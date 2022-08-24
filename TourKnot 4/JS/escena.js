const scene = new THREE.Scene();
{
    const color = 0x000000;
    const near = 1;
    const far = 100;
    scene.fog = new THREE.Fog(0xFFFFFF, 17, 120);
  }
scene.background = new THREE.Color(0x392cc7)

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize (window.innerWidth, window.innerHeight);
document.body.appendChild (renderer.domElement);

const geometry = new THREE.TorusKnotGeometry( 10, 3, 100, 16 );
const material = new THREE.MeshBasicMaterial( { color: 0xDC143C } );
const torusKnot = new THREE.Mesh( geometry, material );
scene.add( torusKnot );

const edges = new THREE.EdgesGeometry( geometry );
const line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0x000000 } ) );
scene.add(line);

camera.position.x = 0;
camera.position.y = 2;
camera.position.z = 60;

function animate() {
    requestAnimationFrame(animate);
    torusKnot.rotation.x += 0.0050;
    torusKnot.rotation.y += 0.0050;
    torusKnot.rotation.z += 0.0050;
    line.rotation.x += 0.0050;
    line.rotation.y += 0.0050;
    line.rotation.z += 0.0050;
    renderer.render(scene, camera);
}
animate();