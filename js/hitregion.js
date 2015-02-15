 window.onload function {
        // Get the canvas references
        var ca = document.getElementById("cvs");
        var co = ca.getContext('2d');
        
        // Draw the rectangle
        co.fillStyle = 'red';
        co.fillRect(50,50,100,100);
        
        // Draw the circle
        co.fillStyle = 'green';
        co.beginPath();
        co.arc(450, 125, 50, 0, 2 * Math.PI, false);
        co.fill();
        
        /**
        * Get the coords of the canvas tag
        */
        var canvasXY = RGraph.getCanvasXY(ca);
        
        /**
        * Now create and position the square DIV tag
        */
        var div1 = document.createElement('DIV');
            div1.style.position = 'absolute';
            div1.style.top   = canvasXY[1] + 50 + 'px';
            div1.style.left  = canvasXY[0] + 50 + 'px';
            div1.style.width = '100px';
            div1.style.height = '100px';
            div1.style.cursor = 'pointer';
            div1.onclick = function (e)
            {
                alert('The red square has been clicked!');
            }
        document.body.appendChild(div1);
        
        /**
        * Now create and position the circle DIV tag
        */
        var div2 = document.createElement('DIV');
            div2.style.position = 'absolute';
            div2.style.top   = canvasXY[1] + 125  - 50 + 'px';
            div2.style.left  = canvasXY[0] + 450 - 50 + 'px';
            div2.style.width = '100px';
            div2.style.height = '100px';
            div2.style.borderRadius = '50px';
            div2.style.cursor = 'pointer';
            div2.onclick = function (e)
            {
                alert('The green circle has been clicked!');
            }
        document.body.appendChild(div2);
    }
 }
