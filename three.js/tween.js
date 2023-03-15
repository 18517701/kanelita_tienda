function armTween(){ 
    var position = {x: -20, y: squareSize*11, z : 10};
    var target = {x: -10, y: -1.75, z: -10};

    var tween = new TWEEN.Tween(position)
            .to(target, 500)
            .easing(TWEEN.Easing.Elastic.InOut).
            onUpdate(function(){
                console.log("onUpdate");
                    lowerArm.position.x = position.x;
                    lowerArm.position.y = position.y;
                    lowerArm.position.z = position.z;
            });

    tween.start();
    
}