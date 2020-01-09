const coin = {
    state: 0,
    flip: function () {
        this.state = (Math.floor(Math.random() * 10))
        if (this.state > 5) {
            this.state = 0
        } else {
            this.state = 1
        }
        //console.log(coin.state)
        // 1. One point: Randomly set your coin object's "state" property to be either 
        //    0 or 1: use "this.state" to access the "state" property on this object.
    },
    toString: function () {

        if (this.state === 1) {
            return "Tails"
        } else {
            return "Heads"
        }
        // 2. One point: Return the string "Heads" or "Tails", depending on whether
        //    "this.state" is 0 or 1.
    },
    toHTML: function () {
        const image = document.createElement('img');
        console.log(this.state)
        if (this.state === 1) {
            image.src = 'images/tails.jpg'
        } else {
            image.src = 'images/heads.jpg'
        }
        // 3. One point: Set the properties of this image element to show either face-up
        //    or face-down, depending on whether this.state is 0 or 1.
        return image;
    }
};
function display20Flips() {
    const results = [];
    let newDiv = document.createElement('div')
    newDiv.setAttribute('id', 'Div1')
    
    
    for (i = 0; i <= 19; i++) {
        coin.flip()
        results.push(coin.toString())
    } 
        const span = document.createElement('span');
        const flip = results
        const txt = document.createTextNode(flip);
        span.appendChild(txt);
        newDiv.appendChild(span);
        //console.log(flip)
        let x = document.getElementById("button")
        document.body.appendChild(newDiv)
        
        return results


    
    // 4. One point: Use a loop to flip the coin 20 times, each time displaying the result of the flip as a string on the page.  After your loop completes, return an array with the result of each flip.
}
function display20Images() {
    const results = [];
    for (i = 0; i <= 19; i++) {
        coin.flip()
        results.push(coin.toHTML())
        document.body.appendChild(coin.toHTML())
    }
    return results

    // 5. One point: Use a loop to flip the coin 20 times, and display the results of each flip as an image on the page.  After your loop completes, return an array with result of each flip.
}

display20Flips();
display20Images();
