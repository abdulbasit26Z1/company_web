/**
 * Az Meer (SMC-Private) Limited - Modern 3D WebGL Engine (Three.js)
 * 3D Rotating Box/Cube Scene, Particle Constellations & Scroll-Driven Box Rotation
 */

class ThreeSceneEngine {
    constructor() {
        this.container = document.getElementById('three-canvas-container');
        if (!this.container) return;

        this.scene = null;
        this.camera = null;
        this.renderer = null;

        this.boxGroup = null;
        this.heroMesh = null;
        this.orbitRings = [];
        this.particleSystem = null;
        this.floatingNodes = [];

        this.mouseX = 0;
        this.mouseY = 0;
        this.targetMouseX = 0;
        this.targetMouseY = 0;

        this.scrollPercent = 0;
        this.targetScrollPercent = 0;

        this.raycaster = new THREE.Raycaster();
        this.mouseVector = new THREE.Vector2();

        this.init();
    }

    init() {
        // 1. Scene setup (Crisp & Clear, No Heavy Fog)
        this.scene = new THREE.Scene();

        // 2. Camera setup
        const aspect = window.innerWidth / window.innerHeight;
        this.camera = new THREE.PerspectiveCamera(60, aspect, 0.1, 1000);
        this.camera.position.set(0, 0, 30);

        // 3. Renderer setup
        this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
        this.renderer.toneMappingExposure = 1.15;

        this.container.appendChild(this.renderer.domElement);

        // 4. Vibrant Lights
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.95);
        this.scene.add(ambientLight);

        const dirLight1 = new THREE.DirectionalLight(0x2563eb, 1.5);
        dirLight1.position.set(25, 30, 25);
        this.scene.add(dirLight1);

        const dirLight2 = new THREE.DirectionalLight(0x06b6d4, 1.2);
        dirLight2.position.set(-25, -20, 20);
        this.scene.add(dirLight2);

        const pointLight = new THREE.PointLight(0x4f46e5, 2.0, 60);
        pointLight.position.set(0, 0, 15);
        this.scene.add(pointLight);

        // 5. Build 3D Objects & Rotating Box Structure
        this.create3DRotatingBoxRoom();
        this.createHero3DCore();
        this.createParticleConstellation();
        this.createFloatingGeometryNodes();

        // 6. Listeners
        window.addEventListener('resize', () => this.onWindowResize());
        window.addEventListener('mousemove', (e) => this.onMouseMove(e));
        window.addEventListener('scroll', () => this.onScroll());

        // Initial scroll calculation
        this.onScroll();

        // 7. Animation Loop
        this.animate();
    }

    create3DRotatingBoxRoom() {
        this.boxGroup = new THREE.Group();

        // Main 3D Wireframe Box Frame
        const boxGeo = new THREE.BoxGeometry(28, 28, 28);
        const boxMat = new THREE.MeshBasicMaterial({
            color: 0x3b82f6,
            wireframe: true,
            transparent: true,
            opacity: 0.25
        });

        const boxMesh = new THREE.Mesh(boxGeo, boxMat);
        this.boxGroup.add(boxMesh);

        // Outer Inner Box Frame with Accent Color
        const innerBoxGeo = new THREE.BoxGeometry(20, 20, 20);
        const innerBoxMat = new THREE.MeshBasicMaterial({
            color: 0x06b6d4,
            wireframe: true,
            transparent: true,
            opacity: 0.2
        });
        const innerBoxMesh = new THREE.Mesh(innerBoxGeo, innerBoxMat);
        this.boxGroup.add(innerBoxMesh);

        // Glowing 3D Corner Vertices
        const cornerGeo = new THREE.IcosahedronGeometry(0.6, 1);
        const cornerMat = new THREE.MeshStandardMaterial({ color: 0x2563eb, roughness: 0.1, metalness: 0.8 });

        const positions = [
            [-14, -14, -14], [14, -14, -14], [14, 14, -14], [-14, 14, -14],
            [-14, -14, 14], [14, -14, 14], [14, 14, 14], [-14, 14, 14]
        ];

        positions.forEach(pos => {
            const corner = new THREE.Mesh(cornerGeo, cornerMat);
            corner.position.set(pos[0], pos[1], pos[2]);
            this.boxGroup.add(corner);
        });

        this.scene.add(this.boxGroup);
    }

    createHero3DCore() {
        this.heroGroup = new THREE.Group();
        this.heroGroup.position.set(7, 1, 0);

        const knotGeo = new THREE.TorusKnotGeometry(3.0, 0.85, 120, 16);
        const glassMaterial = new THREE.MeshStandardMaterial({
            color: 0x2563eb,
            roughness: 0.15,
            metalness: 0.3,
            transparent: true,
            opacity: 0.92
        });

        this.heroMesh = new THREE.Mesh(knotGeo, glassMaterial);
        this.heroGroup.add(this.heroMesh);

        const wireGeo = new THREE.TorusKnotGeometry(3.05, 0.87, 60, 8);
        const wireMat = new THREE.MeshBasicMaterial({
            color: 0x60a5fa,
            wireframe: true,
            transparent: true,
            opacity: 0.4
        });
        const wireMesh = new THREE.Mesh(wireGeo, wireMat);
        this.heroMesh.add(wireMesh);

        const icoGeo = new THREE.IcosahedronGeometry(1.6, 1);
        const icoMat = new THREE.MeshStandardMaterial({
            color: 0x4f46e5,
            roughness: 0.1,
            metalness: 0.8,
            emissive: 0x2563eb,
            emissiveIntensity: 0.4
        });
        this.innerCore = new THREE.Mesh(icoGeo, icoMat);
        this.heroGroup.add(this.innerCore);

        const ringGeo1 = new THREE.TorusGeometry(5.0, 0.06, 16, 100);
        const ringMat1 = new THREE.MeshStandardMaterial({ color: 0x2563eb, roughness: 0.2 });
        const ring1 = new THREE.Mesh(ringGeo1, ringMat1);
        ring1.rotation.x = Math.PI / 3;
        this.heroGroup.add(ring1);
        this.orbitRings.push(ring1);

        const ringGeo2 = new THREE.TorusGeometry(6.2, 0.05, 16, 100);
        const ringMat2 = new THREE.MeshStandardMaterial({ color: 0x06b6d4, roughness: 0.2 });
        const ring2 = new THREE.Mesh(ringGeo2, ringMat2);
        ring2.rotation.y = Math.PI / 4;
        this.heroGroup.add(ring2);
        this.orbitRings.push(ring2);

        this.scene.add(this.heroGroup);
    }

    createParticleConstellation() {
        const particleCount = 260;
        const geometry = new THREE.BufferGeometry();
        const positions = new Float32Array(particleCount * 3);
        const colors = new Float32Array(particleCount * 3);

        const color1 = new THREE.Color(0x2563eb);
        const color2 = new THREE.Color(0x06b6d4);

        for (let i = 0; i < particleCount; i++) {
            positions[i * 3] = (Math.random() - 0.5) * 90;
            positions[i * 3 + 1] = (Math.random() - 0.5) * 90;
            positions[i * 3 + 2] = (Math.random() - 0.5) * 60;

            const c = color1.clone().lerp(color2, Math.random());
            colors[i * 3] = c.r;
            colors[i * 3 + 1] = c.g;
            colors[i * 3 + 2] = c.b;
        }

        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

        const particleMaterial = new THREE.PointsMaterial({
            size: 0.5,
            vertexColors: true,
            transparent: true,
            opacity: 0.85
        });

        this.particleSystem = new THREE.Points(geometry, particleMaterial);
        this.scene.add(this.particleSystem);
    }

    createFloatingGeometryNodes() {
        const geometries = [
            new THREE.TetrahedronGeometry(1.2),
            new THREE.OctahedronGeometry(1.3),
            new THREE.DodecahedronGeometry(1.1)
        ];

        const nodeMaterial = new THREE.MeshStandardMaterial({
            color: 0xffffff,
            roughness: 0.15,
            metalness: 0.1,
            transparent: true,
            opacity: 0.9
        });

        this.nodeGroup = new THREE.Group();

        for (let i = 0; i < 14; i++) {
            const geo = geometries[i % geometries.length];
            const mesh = new THREE.Mesh(geo, nodeMaterial.clone());

            mesh.position.set(
                (Math.random() - 0.5) * 60,
                (Math.random() - 0.5) * 50,
                (Math.random() - 0.5) * 35
            );

            mesh.userData = {
                rotSpeedX: (Math.random() - 0.5) * 0.015,
                rotSpeedY: (Math.random() - 0.5) * 0.015,
                initialY: mesh.position.y
            };

            this.nodeGroup.add(mesh);
            this.floatingNodes.push(mesh);
        }

        this.scene.add(this.nodeGroup);
    }

    onMouseMove(event) {
        this.targetMouseX = (event.clientX / window.innerWidth - 0.5) * 2;
        this.targetMouseY = (event.clientY / window.innerHeight - 0.5) * 2;

        this.mouseVector.x = (event.clientX / window.innerWidth) * 2 - 1;
        this.mouseVector.y = -(event.clientY / window.innerHeight) * 2 + 1;
    }

    onScroll() {
        const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
        this.targetScrollPercent = totalScroll > 0 ? window.scrollY / totalScroll : 0;
    }

    onWindowResize() {
        if (!this.camera || !this.renderer) return;
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
    }

    animate() {
        requestAnimationFrame(() => this.animate());

        // Smooth mouse and scroll lerp
        this.mouseX += (this.targetMouseX - this.mouseX) * 0.05;
        this.mouseY += (this.targetMouseY - this.mouseY) * 0.05;

        this.scrollPercent += (this.targetScrollPercent - this.scrollPercent) * 0.08;

        // 3D BOX ROOM ROTATION DRIVEN BY SCROLL
        if (this.boxGroup) {
            this.boxGroup.rotation.y = this.scrollPercent * Math.PI * 2.5 + this.mouseX * 0.2;
            this.boxGroup.rotation.x = Math.sin(this.scrollPercent * Math.PI) * 0.4 + this.mouseY * 0.15;
            this.boxGroup.rotation.z = this.scrollPercent * Math.PI * 0.5;
        }

        // Rotate Hero Core Mesh
        if (this.heroMesh) {
            this.heroMesh.rotation.x += 0.006;
            this.heroMesh.rotation.y += 0.009;
        }

        if (this.innerCore) {
            this.innerCore.rotation.y -= 0.012;
        }

        this.orbitRings.forEach((ring, idx) => {
            ring.rotation.z += 0.007 * (idx + 1);
        });

        // Float Nodes
        const time = Date.now() * 0.001;
        this.floatingNodes.forEach((node) => {
            node.rotation.x += node.userData.rotSpeedX;
            node.rotation.y += node.userData.rotSpeedY;
            node.position.y = node.userData.initialY + Math.sin(time + node.position.x) * 0.9;
        });

        if (this.particleSystem) {
            this.particleSystem.rotation.y = time * 0.02 + this.scrollPercent * Math.PI;
        }

        // Camera Motion synchronized with 3D Box Rotation
        if (this.camera) {
            this.camera.position.x = this.mouseX * 4;
            this.camera.position.y = -this.mouseY * 3 - this.scrollPercent * 8;
            this.camera.position.z = 30 - Math.sin(this.scrollPercent * Math.PI) * 6;
            this.camera.lookAt(0, -this.scrollPercent * 5, 0);
        }

        this.renderer.render(this.scene, this.camera);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    window.threeEngine = new ThreeSceneEngine();
});
