window.onload=function(){
    // let canvas = document.querySelector(`canvas`);
    // const ctx=canvas.getContext(`2d`);
    
    function drowRect(){
        ctx.fillStyle = "rgba(204,204,255,0.5)";
        ctx.fillRect (20,20,175,175);

        ctx.fillStyle = "rgba(204,255,204,0.5)";
        ctx.fillRect (40,40,175,175);

        ctx.fillStyle = "rgba(255,204,204,0.5)";
        ctx.fillRect (60,60,175,175);
    }
    // drowRect()

    function gradFn (color1,color2){
        let gradient = ctx.createLinearGradient(0, 0, 300, 300);
        gradient.addColorStop(0, color1);
        gradient.addColorStop(1, color2);

        ctx.fillStyle=gradient;
        ctx.fillRect(0, 0, 300,300)
    }
    // gradFn(`blue`,`green`)

    function lineFn (){
        ctx.beginPath(); 
        ctx.moveTo(20, 70); 
        ctx.lineTo(200, 250);
        ctx.stroke()
    }
    // lineFn()

    const svgNS = `http://www.w3.org/2000/svg`;
    let container = document.querySelector(`div`);
    function drawLine(x1,x2,y1,y2,stroke,strokeWidth){
        const svg = document.createElementNS(svgNS,`svg`);
        svg.setAttribute(`width`,200);
        svg.setAttribute(`height`,250);
        const line = document.createElementNS(svgNS,`line`);
        line.setAttribute(`x1`,x1);
        line.setAttribute(`x2`,x2);
        line.setAttribute(`y1`,y1);
        line.setAttribute(`y2`,y2);
        line.setAttribute(`stroke`,stroke);
        line.setAttribute(`stroke-width`,strokeWidth);
        svg.appendChild(line);
        container.appendChild(svg);
    }
    // drawLine(10,50,110,150,`blue`,5);

    function rectDrow(width,height,fill,stroke,strokeWidth){
        const svg = document.createElementNS(svgNS,`svg`);
        svg.setAttribute(`width`, 400);
        svg.setAttribute(`height`, 400); 
        const rect = document.createElementNS(svgNS,`rect`);
        rect.setAttribute(`width`, width);
        rect.setAttribute(`height`, height); 
        rect.setAttribute(`fill`,fill);
        rect.setAttribute(`stroke`,stroke);
        rect.setAttribute(`stroke-width`,strokeWidth);
        svg.appendChild(rect);
        container.appendChild(svg);
    }
    rectDrow(200,300,`blue`,`black`,5)
}