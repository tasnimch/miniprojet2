document.getElementById("inscription").addEventListener("submit",function(e){
   //e.preventDefault()

    var error;
    var inputs=document.getElementsByTagName("input");
    var mdp=document.getElementById("mdp");
    var mdp2=document.getElementById("mdp2");

    for(var i=0;i<inputs.length-1;i++){
        //console.log(inputs[i]);
        if(!inputs[i].value){
            error=alert("Veuillez renseigner tous les champ");
        }
    }
    if(error){
            e.preventDefault();
            document.getElementById("error").innerHTML = error;
            return false;
        }
    else if(!error){
            alert("Formulaire envoyé !");
    }
    if(mdp.value!=mdp2.value){
        alert("svp verifie votre password");
    }
});



function test() {
    alert("vous avez essaiz");
    var tv = document.getElementById('tv').value;
    if(bb.length < 0 ) {
        alert('Votre message est valide ');
    }
    else {
        alert('Répetez s il-vous-plait');
    }
}