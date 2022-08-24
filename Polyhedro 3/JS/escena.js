const scene = new THREE.Scene();
{
    const color = 0x000000;
    const near = 1;
    const far = 100;
    scene.fog = new THREE.Fog(0x000000, 11, 87);
  }

  scene.background = new THREE.Color(0xFF6100)

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize (window.innerWidth, window.innerHeight);
document.body.appendChild (renderer.domElement);

/* const geometry = new THREE.BoxGeometry(10,5,1);
const material = new THREE.MeshBasicMaterial( {color: 0xFFFFFF} )
const cube = new THREE.Mesh(geometry, material);
scene.add (cube);
 */
const verticesOfCube = [
    -1,-1,-1,    1,-1,-1,    1, 1,-1,    -1, 1,-1,
    -1,-1, 1,    1,-1, 1,    1, 1, 1,    -1, 1, 1,
];

const indicesOfFaces = [
    2,1,0,    0,3,2,
    0,4,7,    7,3,0,
    0,1,5,    5,4,0,
    1,2,6,    6,5,1,
    2,3,7,    7,6,2,
    4,5,6,    6,7,4
];

const geometry = new THREE.PolyhedronGeometry( verticesOfCube, indicesOfFaces, 10, 1 );
const material = new THREE.MeshBasicMaterial( {color: 0xFFFFFF} )
const PolyhedronGeometry  = new THREE.Mesh(geometry, material);
scene.add (PolyhedronGeometry);

const edges = new THREE.EdgesGeometry( geometry );
const line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0x000000 } ) );
scene.add(line);

camera.position.x = 0;
camera.position.y = 0;
camera.position.z = 50;

function animate() {
    requestAnimationFrame(animate);
    PolyhedronGeometry.rotation.x += 0.01;
    PolyhedronGeometry.rotation.y += 0.01;
    PolyhedronGeometry.rotation.z += 0.01;
    line.rotation.x += 0.01;
    line.rotation.y += 0.01;
    line.rotation.z += 0.01;
    renderer.render(scene, camera);
}
animate();