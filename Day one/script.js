

let auroraStats = {
    photo: 'https://1.bp.blogspot.com/-Z55CjH96_LM/Xq6W5GoqdbI/AAAAAAAAABM/M2OTHSTZZX4VS4MozyVJAyzb9iYhNpUfACLcBGAsYHQ/s1600/rower-1926440_960_720.jpg',
    title: 'Aurora',
    text: 'Amikor mindent magadnek kell csinálniEz egy kép az Aurora jelenségről, elég menő cucc, élőben jobb lenne,de háttérnek sem utolsó!',
    thumbnail: 'Aurora'
};
$('#photo').attr('src', auroraStats.photo);
$('#title').text(auroraStats.title);
$('#description').text(auroraStats.text);

let birdStats = {
    photo: 'https://1.bp.blogspot.com/-3PKkhG9y98Y/Xq6W5wkniuI/AAAAAAAAABQ/iSFobiNCStMB-CX9KcJIfJoIzXXe8ci_QCLcBGAsYHQ/s1600/stretch-4165513_960_720.jpg',
    title: 'Csónak',
    text: 'Csónak temető a Berettyó csatornán.',
    thumbnail: "Bird"
};
$('#photo').attr(birdStats.photo);
$('#title').text(birdStats.title);
$('#description').text(birdStats.text);


let butterflyStats = {
    photo: 'https://1.bp.blogspot.com/-uY8xOPes3nU/Xq6ZJXVJLvI/AAAAAAAAABw/o_SaxtgRfJkWlgJxcdLlS6tQBxO2Jm2pwCLcBGAsYHQ/s1600/coarse-fishing-1164949_960_720%2B%25281%2529.jpg',
    title: "Keszeg",
    text: 'A keszeg paprikás lisztben kisütve az igazi.',
    thumbnail: "Butterfly's"
};
$('#photo').attr('src', butterflyStats.photo);
$('#title').text(butterflyStats.title);
$('#description').text(butterflyStats.text);



let castleWomanStats = {
    photo: 'https://1.bp.blogspot.com/-b6LWJBux-VE/XrAsrs9wGZI/AAAAAAAAAB8/cB5G5ou8cRwriBlv8Ugd5vpFlTxIuhKqwCLcBGAsYHQ/s1600/Vag%25C3%25A1ny.jpg',
    title: 'Harcsa',
    text: 'Egy hal is lehet vagány!',
    thumbnail: 'Fantasy'
};
$('#photo').attr('src', castleWomanStats.photo);
$('#title').text(castleWomanStats.title);
$('#description').text(castleWomanStats.text);



let frogStats = {
    photo: 'https://1.bp.blogspot.com/-FqruLfl1p2o/XrAsxEV3H4I/AAAAAAAAACA/bHfd_dC4tyIpCvWnHPFUlXQOlX1AEN9xQCLcBGAsYHQ/s1600/Csend%25C3%25A9let.jpg',
    title: "Vidéki csendélet",
    text: 'Csendélet',
    thumbnail: 'Mr.Frog'
};
$('#photo').attr('src', frogStats.photo);
$('#title').text(frogStats.title);
$('#description').text(frogStats.text);



let jellyFishStats= {
    photo: 'https://1.bp.blogspot.com/-LaJdDIDFQiQ/XrAsyC6NHxI/AAAAAAAAACE/TxnBg3YDhswPLW-MXYRNYd0M0P8ExBffgCLcBGAsYHQ/s1600/Csend%25C3%25A9let%2B2.jpg',
    title: "Folyópart",
    text: 'Ahová még ember nem merészkedett',
    thumbnail: 'JellyFish'
};
$('#photo').attr('src', jellyFishStats.photo);
$('#title').text(jellyFishStats.title);
$('#description').text(jellyFishStats.text);



let treeStats = {
    photo: 'https://1.bp.blogspot.com/-XvWr0o5I-B0/XrAtDmZjqbI/AAAAAAAAACc/YsfYmDm0f-ccYjKki7cHaqyER8FDJmg1QCLcBGAsYHQ/s1600/T%25C3%25A1tika.jpg',
    title: "Csuka",
    text: 'Ha én egyszer kinyitom a számat...',
    thumbnail: "Tree's"
};
$('#photo').attr('src', treeStats.photo);
$('#title').text(treeStats.title);
$('#description').text(treeStats.text);



let currentPhoto = 0;
let gallery = [auroraStats, birdStats, butterflyStats, castleWomanStats, frogStats, jellyFishStats, treeStats];

$('#photo').attr('src', gallery[currentPhoto].photo);
$('#title').text(gallery[currentPhoto].title);
$('#description').text(gallery[currentPhoto].text);



let loadPhoto = (photoNumber) => {
    $('#photo').attr('src', gallery[photoNumber].photo);
    $('#title').text(gallery[photoNumber].title);
    $('#description').text(gallery[photoNumber].text);
    $('.pictures').css('border', 'ridge');
    let picturesBorder =  document.getElementById([currentPhoto]);
    $(picturesBorder).css('border-color', 'red');
};

loadPhoto(currentPhoto);

$('#right').click(() => {
    if(currentPhoto < 6) {
        currentPhoto++;
        loadPhoto(currentPhoto);
        console.log(currentPhoto);
    };
});

$('#left').click(() =>{
    if(currentPhoto > 0) {
        currentPhoto--;
        loadPhoto(currentPhoto);
        console.log(currentPhoto);
    };
});
let borderCss = 'red ridge';
let borderdefault = 'ridge';


$('#0').click (() => {
    $('#photo').attr('src',gallery[0].photo);
    $('#title').text(gallery[0].title);
    $('#description').text(gallery[0].text);
    currentPhoto = 0;
    $('#0').css('border', borderCss);
    $('#1, #2, #3, #4, #5, #6').css('border', borderdefault);
});
$('#1').click (() => {
    $('#photo').attr('src',gallery[1].photo);
    $('#title').text(gallery[1].title);
    $('#description').text(gallery[1].text);
    currentPhoto = 1;
    $('#1').css('border', borderCss);
    $('#0, #2, #3, #4, #5, #6').css('border', borderdefault);
});
$('#2').click (() => {
    $('#photo').attr('src',gallery[2].photo);
    $('#title').text(gallery[2].title);
    $('#description').text(gallery[2].text);
    currentPhoto = 2;
    $('#2').css('border', borderCss);
    $('#1, #0, #3, #4, #5, #6').css('border', borderdefault);
});
$('#3').click (() => {
    $('#photo').attr('src',gallery[3].photo);
    $('#title').text(gallery[3].title);
    $('#description').text(gallery[3].text);
    currentPhoto = 3;
    $('#3').css('border', borderCss);
    $('#1, #2, #0, #4, #5, #6').css('border', borderdefault);
});
$('#4').click (() => {
    $('#photo').attr('src',gallery[4].photo);
    $('#title').text(gallery[4].title);
    $('#description').text(gallery[4].text);
    currentPhoto = 4;
    $('#4').css('border', borderCss);
    $('#1, #2, #3, #0, #5, #6').css('border', borderdefault);
});
$('#5').click (() => {
    $('#photo').attr('src',gallery[5].photo);
    $('#title').text(gallery[5].title);
    $('#description').text(gallery[5].text);
    currentPhoto = 5;
    $('#5').css('border', borderCss);
    $('#1, #2, #3, #4, #0, #6').css('border', borderdefault);
});
$('#6').click (() => {
    $('#photo').attr('src',gallery[6].photo);
    $('#title').text(gallery[6].title);
    $('#description').text(gallery[6].text);
    currentPhoto = 6;
    $('#6').css('border', borderCss);
    $('#1, #2, #3, #4, #5, #0').css('border', borderdefault);
});
