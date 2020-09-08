var submit = $('#submit');


submit.click((e) => {

    var name = $('#name').val();
    var roll = $('#roll').val();
    var marks = $('#marks').val();

    e.preventDefault();

    if(name===''||roll===''||marks===''){
        alert("Please fill all the details");
    }

    else{
        console.log('about to append');
        var string='<p class="record"><span class="highlight"> '+ roll + ' </span> , <span class="highlight"> '+name +' </span> has got <span class="highlight"> '+marks+' </span> marks</p>';

        $("#display-section").append(string);

        $('#name').val(" ");
        $('#roll').val(" ");
        $('#marks').val(" ");
        
    }

});

