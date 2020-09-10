// https://dog.ceo/dog-api/documentation/
var opt=$('#breed');
var dogImg=$('#img');
var allowSubmit=true;
var breed;

$.get('https://dog.ceo/api/breeds/list/all',
function(data ,message){
    let breedName=data.message;
    for(let breed in breedName){
        opt.append('<option value="'+breed+'">'+breed+'</option>');
        // console.log("dropdown menu");
    }
});

opt.change(function () {
    allowSubmit = true;
});

$("#get").click(function (e) {
    e.preventDefault();

    if (allowSubmit) {
        breed = opt.val();
        displayDog(breed);
        allowSubmit = false;
    }

});

$("#next").click(function (e) {
    e.preventDefault();
    if (breed !== undefined) {
        console.log("inside next");
        displayDog(breed);
    }

    else{
        alert("Plz choose the breed first..");
    }
});

function displayDog(breed) {
    let url = "https://dog.ceo/api/breed/" + breed + "/images/random";

    $("#img img").remove();

    $.get(url, function (data, status) {
        let imageUrl = data.message;
        $('#img').append('<img src="' + imageUrl + '" alt="' + breed + '">');
    });

}