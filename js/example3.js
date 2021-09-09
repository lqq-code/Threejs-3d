var scene, camera, renderer, cube;
var vConsole = new VConsole();

function init(){
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(40, document.body.clientWidth / document.body.clientHeight, 0.1, 100);
    camera.position.set(0, 0, 3);
    renderer = new THREE.WebGLRenderer({
        antialias:true,
        alpha:true
    });
    renderer.setSize(document.body.clientWidth, document.body.clientHeight);
    document.getElementById("container").appendChild(renderer.domElement);


    const geometry = new THREE.BoxGeometry( 0.5, 0.5, 0.5 );
    const material = new THREE.MeshStandardMaterial( {color: 0x6698CB} );
    material.metalness = .44;
    material.roughness = 0.4;
    cube = new THREE.Mesh( geometry, material );
    cube.rotation.set(.4,.7,0);
    scene.add( cube );

    addLight();
    loop();

    function capture_orientation (event) {
      var alpha = event.alpha;
      var beta = event.beta;
      var gamma = event.gamma;
      console.log('Orientation - Alpha: '+alpha+', Beta: '+beta+', Gamma: '+gamma);
      cube.rotation.y = gamma/100;
      cube.rotation.x = beta/100;
    }

    document.querySelector("#container,#info").onclick=function(){
      window.DeviceOrientationEvent.requestPermission()
        .then(state => {
            console.log('state',state)
            switch (state) {
                case "granted":
                    //在这里建立监听
                    window.addEventListener('deviceorientation', capture_orientation, false);
                    break;
                case "denied":
                    alert("你拒绝了使用陀螺仪");
                    break;
                case "prompt":
                    alert("其他行为");
                    break;
            }
        });
    }
}

function addBox(){
    const geometry = new THREE.BoxGeometry( 1, 1, 1 );
    const material = new THREE.MeshBasicMaterial( {color: 0x00ff00} );
    const cube = new THREE.Mesh( geometry, material );
    scene.add( cube );
}

function addLight(){
    var ambientLight = new THREE.AmbientLight( 0xd5d5d5 );
    ambientLight.intensity = 1;
    scene.add( ambientLight );

    var bottomRightDirLight = new THREE.DirectionalLight();
    bottomRightDirLight.position.x=5;
    bottomRightDirLight.position.y=3;
    bottomRightDirLight.position.z=-5;
    bottomRightDirLight.intensity=1.3;
    scene.add( bottomRightDirLight );

    var frontDirLight = new THREE.DirectionalLight(0xffffff);
    frontDirLight.position.x=-5;
    frontDirLight.position.y=5;
    frontDirLight.position.z=5;
    frontDirLight.intensity=1.3;
    scene.add( frontDirLight );
}

function loop() {
    requestAnimationFrame(loop);
    cube.rotation.y+=0.01
    renderer.render(scene, camera);
}

window.onload = init;