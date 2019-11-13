import * as THREE from "three";

class ThreeTest {
  init(element) {
    this.element = element;
    this.camera = new THREE.PerspectiveCamera(
      70,
      window.innerWidth / window.innerHeight,
      0.01,
      10
    );
    this.camera.position.z = 1;

    this.scene = new THREE.Scene();

    this.geometry = new THREE.BoxGeometry(0.2, 0.2, 0.2);
    this.material = new THREE.MeshNormalMaterial();

    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.scene.add(this.mesh);

    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
      canvas: element
    });

    // Use a random spinning direction
    this.xIncrement = (Math.random() - 0.5) / 10;
    this.yIncrement = (Math.random() - 0.5) / 10;
  }
  render() {
    this.renderer.render(this.scene, this.camera);
  }
  animate() {
    requestAnimationFrame(this.animate.bind(this));
    this.mesh.rotation.x += this.xIncrement;
    this.mesh.rotation.y += this.yIncrement;
    this.render();
  }
}

window.initThree = function(element) {
  // Called from Java with the DOM element for the Three component instance
  const tt = new ThreeTest();
  tt.init(element);
  tt.animate();
};
