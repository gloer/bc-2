const track01 = document.querySelector("#track-01");

const draw = (elem)  => {
    const ctx = elem.getContext("2d");

    // Fake the player
    const dark = "#ffb397";
    const light = "#ffffff";

    let chosenColor = dark;
    const count = 630;
    const height = 30;
    const min = 15;

    for(let i=0; i<count; i+=3) {
        ctx.strokeStyle = chosenColor;

        ctx.beginPath();

            ctx.moveTo(i, height + min);
            ctx.lineTo(i, Math.ceil(Math.random()*height));
            ctx.stroke();

        ctx.closePath();


        if(i > 180) {
            chosenColor = light;
        }
    }
    

}

draw(track01);
