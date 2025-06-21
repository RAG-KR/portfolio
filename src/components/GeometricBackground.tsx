
import { useEffect, useRef } from "react";
import * as THREE from "three";

export const GeometricBackground = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    mountRef.current.appendChild(renderer.domElement);

    camera.position.z = 15;

    // Parallax groups for different layer speeds
    const parallaxGroups = [
      new THREE.Group(), // Foreground - fastest
      new THREE.Group(), // Mid-ground
      new THREE.Group(), // Background - slowest
    ];

    parallaxGroups.forEach(group => scene.add(group));

    // Moderately bright wireframe materials (15% brighter than original muted)
    const brightMaterial = new THREE.MeshBasicMaterial({ 
      color: 0x7ab5ff, // brighter blue-400
      wireframe: true,
      transparent: true,
      opacity: 0.6
    });

    const accentMaterial = new THREE.MeshBasicMaterial({ 
      color: 0xb89bff, // brighter violet-400
      wireframe: true,
      transparent: true,
      opacity: 0.5
    });

    const dustMaterial = new THREE.MeshBasicMaterial({ 
      color: 0x4de6a6, // brighter emerald-400
      wireframe: true,
      transparent: true,
      opacity: 0.4
    });

    const highlightMaterial = new THREE.MeshBasicMaterial({ 
      color: 0xffcf47, // brighter amber-400
      wireframe: true,
      transparent: true,
      opacity: 0.5
    });

    // Create geometric shapes
    function createGeometry(type: string, size: number, material: THREE.Material) {
      let geometry: THREE.BufferGeometry;
      switch(type) {
        case 'sphere':
          geometry = new THREE.SphereGeometry(size, 16, 16);
          break;
        case 'box':
          geometry = new THREE.BoxGeometry(size, size, size);
          break;
        case 'octahedron':
          geometry = new THREE.OctahedronGeometry(size);
          break;
        case 'tetrahedron':
          geometry = new THREE.TetrahedronGeometry(size);
          break;
        case 'torus':
          geometry = new THREE.TorusGeometry(size, size * 0.3, 8, 16);
          break;
        case 'cone':
          geometry = new THREE.ConeGeometry(size, size * 1.5, 8);
          break;
        default:
          geometry = new THREE.SphereGeometry(size, 12, 12);
      }
      return new THREE.Mesh(geometry, material);
    }

    // Populate parallax layers
    const shapes: Array<{
      mesh: THREE.Mesh;
      layer: number;
      speed: number;
      rotationSpeed: { x: number; y: number; z: number };
      initialY: number;
    }> = [];
    
    const shapeTypes = ['sphere', 'box', 'octahedron', 'tetrahedron', 'torus', 'cone'];
    const materials = [brightMaterial, accentMaterial, highlightMaterial, dustMaterial];

    // Layer 1 - Foreground (fastest parallax)
    for(let i = 0; i < 15; i++) {
      const type = shapeTypes[Math.floor(Math.random() * shapeTypes.length)];
      const material = materials[Math.floor(Math.random() * materials.length)];
      const shape = createGeometry(type, Math.random() * 1.2 + 0.6, material);
      
      shape.position.set(
        (Math.random() - 0.5) * 50,
        (Math.random() - 0.5) * 35,
        Math.random() * 10 + 5
      );
      
      shape.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      );

      parallaxGroups[0].add(shape);
      shapes.push({ 
        mesh: shape, 
        layer: 0, 
        speed: Math.random() * 0.6 + 0.9,
        rotationSpeed: {
          x: (Math.random() - 0.5) * 0.015,
          y: (Math.random() - 0.5) * 0.015,
          z: (Math.random() - 0.5) * 0.015
        },
        initialY: shape.position.y
      });
    }

    // Layer 2 - Mid-ground
    for(let i = 0; i < 20; i++) {
      const type = shapeTypes[Math.floor(Math.random() * shapeTypes.length)];
      const material = materials[Math.floor(Math.random() * materials.length)];
      const shape = createGeometry(type, Math.random() * 1.5 + 0.8, material);
      
      shape.position.set(
        (Math.random() - 0.5) * 70,
        (Math.random() - 0.5) * 45,
        Math.random() * 15 - 5
      );

      parallaxGroups[1].add(shape);
      shapes.push({ 
        mesh: shape, 
        layer: 1, 
        speed: Math.random() * 0.4 + 0.5,
        rotationSpeed: {
          x: (Math.random() - 0.5) * 0.01,
          y: (Math.random() - 0.5) * 0.01,
          z: (Math.random() - 0.5) * 0.01
        },
        initialY: shape.position.y
      });
    }

    // Layer 3 - Background (slowest parallax)
    for(let i = 0; i < 25; i++) {
      const type = shapeTypes[Math.floor(Math.random() * shapeTypes.length)];
      const shape = createGeometry(type, Math.random() * 2.0 + 0.5, dustMaterial);
      
      shape.position.set(
        (Math.random() - 0.5) * 90,
        (Math.random() - 0.5) * 60,
        Math.random() * 20 - 20
      );

      parallaxGroups[2].add(shape);
      shapes.push({ 
        mesh: shape, 
        layer: 2, 
        speed: Math.random() * 0.25 + 0.15,
        rotationSpeed: {
          x: (Math.random() - 0.5) * 0.008,
          y: (Math.random() - 0.5) * 0.008,
          z: (Math.random() - 0.5) * 0.008
        },
        initialY: shape.position.y
      });
    }

    // Mouse and scroll variables
    let scrollY = 0;
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    const handleScroll = () => {
      scrollY = window.scrollY;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Animation loop
    function animate() {
      requestAnimationFrame(animate);

      // Parallax movement based on scroll
      const scrollFactor = scrollY * 0.001;
      parallaxGroups[0].position.y = scrollFactor * 25; // Fastest
      parallaxGroups[1].position.y = scrollFactor * 15; // Medium
      parallaxGroups[2].position.y = scrollFactor * 8;  // Slowest

      // Mouse parallax (subtle)
      parallaxGroups[0].rotation.x = mouseY * 0.05;
      parallaxGroups[0].rotation.y = mouseX * 0.05;
      parallaxGroups[1].rotation.x = mouseY * 0.03;
      parallaxGroups[1].rotation.y = mouseX * 0.03;
      parallaxGroups[2].rotation.x = mouseY * 0.02;
      parallaxGroups[2].rotation.y = mouseX * 0.02;

      // Individual shape animations
      shapes.forEach((shapeData) => {
        const { mesh, rotationSpeed } = shapeData;
        
        // Gentle rotation
        mesh.rotation.x += rotationSpeed.x;
        mesh.rotation.y += rotationSpeed.y;
        mesh.rotation.z += rotationSpeed.z;
        
        // Subtle floating motion
        mesh.position.y += Math.sin(Date.now() * 0.001 + mesh.position.x) * 0.01;
      });

      renderer.render(scene, camera);
    }

    animate();

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none"
    />
  );
};
