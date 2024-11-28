import * as THREE from 'three';

// Crear la escena
const scene = new THREE.Scene();

// Crear la cámara (Campo de visión, proporción, cercanía, lejanía)
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// Crear el renderizador
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Crear geometría de la esfera
const geometry = new THREE.SphereGeometry(1, 64, 64);

// Crear material de la esfera
const material = new THREE.MeshBasicMaterial({ color: 0x0077ff });

// Crear la malla
const sphere = new THREE.Mesh(geometry, material);

// Añadir la esfera a la escena
scene.add(sphere);

// Añadir luz ambiental
const ambientLight = new THREE.AmbientLight(0x404040); // Luz suave
scene.add(ambientLight);

// Añadir luz puntual
const pointLight = new THREE.PointLight(0xffffff, 1, 100);
pointLight.position.set(5, 5, 5);
scene.add(pointLight);

// Cargar una textura
const textureLoader = new THREE.TextureLoader();
const texture = textureLoader.load('/earth.jpg');

// Aplicar la textura a un nuevo material
const texturedMaterial = new THREE.MeshBasicMaterial({ map: texture });

// Actualizar la esfera con el nuevo material
sphere.material = texturedMaterial;

function animate() {
    requestAnimationFrame(animate);
  
    // Rotar la esfera
    sphere.rotation.y -= 0.01;
  
    // Renderizar la escena
    renderer.render(scene, camera);
  }
  
  // Iniciar la animación
  animate();