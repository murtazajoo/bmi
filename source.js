
function result() {
    //GETTING THE VAUES OF HEIGHT AND WEIGHT

    height = document.getElementById('height').value;
    weight = document.getElementById("weight").value;
    newHeight = height / 100;

// BMI = kg/ms2
    
    finalResult = Math.round(weight / (newHeight * newHeight))
    document.getElementById("result").innerHTML = finalResult + " kg/m2"
    
// showing Healthy or Not
    
    let con = document.getElementById("con")
    let engrus = document.getElementById('engresult')
    if (finalResult >= 18 && finalResult <= 25) {
        engrus.innerHTML = "Healthy"
        engrus.style.color="green"
        con.style.background="rgba(32, 158, 38, 0.5)"
    
    } 
    else if (finalResult >= 26) {
        engrus.innerHTML = "overWeight"
        engrus.style.color="red"
       con.style.background="rgba(208, 32, 32, 0.8)"
        
    }
    else {
        engrus.innerHTML = "UnderWeight"
        engrus.style.color="red"
       con.style.background="rgba(198, 32, 32, 0.8)"
    }

}
