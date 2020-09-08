var balls=['blueviolet','aquamarine','chocolate','coral','crimson','cornsilk','fuchsia','deeppink','tomato','yellowgreen','violet','turquoise','steelblue','sandybrown','paleturquoise'];


var box=$('#basket');
$('#submit').click(()=>{

    var color=Math.floor(Math.random()*balls.length);
    console.log(color);
    box.append('<div class="ball" style="background-color: ' + balls[color] + '"></div>');
});

$('#reset').click(()=>{
    box.empty();
})