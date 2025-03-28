document.addEventListener('DOMContentLoaded', () => {
    // Three.js 3D Developer Scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 500 / 500, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(500, 500);
    document.querySelector('.developer-scene').appendChild(renderer.domElement);

    // Create developer figure
    const geometry = new THREE.BoxGeometry(1, 2, 1);
    const material = new THREE.MeshPhongMaterial({ color: 0x9c27b0 });
    const developer = new THREE.Mesh(geometry, material);
    scene.add(developer);

    // Computer model
    const computerGeometry = new THREE.BoxGeometry(2, 1.5, 0.2);
    const computerMaterial = new THREE.MeshPhongMaterial({ color: 0x616161 });
    const computer = new THREE.Mesh(computerGeometry, computerMaterial);
    computer.position.set(0, 0, -1);
    scene.add(computer);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    const pointLight = new THREE.PointLight(0xffffff, 1);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    // Camera positioning
    camera.position.z = 5;

    // Animation
    function animate() {
        requestAnimationFrame(animate);
        developer.rotation.y += 0.005;
        computer.rotation.y -= 0.003;
        renderer.render(scene, camera);
    }
    animate();

    // Parallax effect
    window.addEventListener('mousemove', (event) => {
        const x = (event.clientX / window.innerWidth) * 2 - 1;
        const y = -(event.clientY / window.innerHeight) * 2 + 1;
        
        developer.rotation.y = x * 0.2;
        developer.rotation.x = y * 0.2;
        computer.rotation.y = -x * 0.1;
        computer.rotation.x = -y * 0.1;
    });
});
