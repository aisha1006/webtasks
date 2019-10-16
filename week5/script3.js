
    var first = document.getElementById('first');
    var second = document.getElementById('second');
    var third = document.getElementById('third');
    
    first.addEventListener('click', FirstImage);
    second.addEventListener('click', SecondImage);
    third.addEventListener('click', ThirdImage);
    
    
    function FirstImage(){
        var infoForFirst = "The BMW X6 is a mid-size luxury crossover by German automaker BMW. The first generation (E71) was released for sale in April 2008 for the 2008 model year The X6 was marketed as a sports activity coupé (SAC) by BMW. It combines the attributes of an SUV (high ground clearance, all-wheel drive and all-weather ability, large wheels and tires) with the stance of a coupé (styling featuring a sloping roof). It was based on the previous generation BMW 5 and 6 Series. E71 development began in 2003 under Peter Tuennermann, after start of E70 X5 development in 2001. Design work by E70 X5 designer Pierre Leclercq was frozen in 2005, with test mules being run from the summer of 2005 and prototypes being tested from late 2006. Production began on December 3, 2007.";
        document.getElementById('info').innerHTML = infoForFirst;
        document.getElementById('first').style.position = 'absolute';
        document.getElementById('first').style.left = '564px';
        document.getElementById('first').style.top = '84px';
        document.getElementById('first').style.width = '550px';
        document.getElementById('first').style.height = '460px';
        document.getElementById('first').style.zIndex = '3';
        document.getElementById('third').style.position = 'absolute';
        document.getElementById('third').style.left = '760px';
        document.getElementById('third').style.top = '107px';
        document.getElementById('third').style.width = '500px';
        document.getElementById('third').style.height = '410px';
        document.getElementById('third').style.zIndex = '2';
        document.getElementById('second').style.position = 'absolute';
        document.getElementById('second').style.left = '916px';
        document.getElementById('second').style.top = '130px';
        document.getElementById('second').style.width = '450px';
        document.getElementById('second').style.height = '360px';
        document.getElementById('second').style.zIndex = '1';
        document.getElementById('info').style.zIndex = '4';
        document.getElementsByClassName('header')[0].style.zIndex = '4';
    }
    function SecondImage(){
        var infoForSecond = "Razorback sucker; flying gurnard flathead warbonnet, golden dojo elver, fierasfer jackfish--dojo loach, slimehead; green swordtail California smoothtongue; sand tilefish yellowtail clownfish sprat sea devil armorhead catfish staghorn sculpin. Goldeye paddlefish horn shark gizzard shad pikeblenny, dojo loach lanternfish lemon sole Mozambique tilapia. Duckbilled barracudina lungfish oarfish frilled shark brook lamprey, surfperch plunderfish, beachsalmon, cownose ray three-toothed puffer grayling pink salmon. Bristlenose catfish butterfly ray yellow bass emperor bream, tadpole fish whiptail gulper blue eye piranha! Yellow jack weasel shark wolf-eel ocean sunfish, glass catfish .";
        document.getElementById('info').innerHTML = infoForSecond;
        document.getElementById('second').style.position = 'absolute';
        document.getElementById('second').style.left = '564px';
        document.getElementById('second').style.top = '84px';
        document.getElementById('second').style.width = '550px';
        document.getElementById('second').style.height = '460px';
        document.getElementById('second').style.zIndex = '3';
        document.getElementById('first').style.position = 'absolute';
        document.getElementById('first').style.left = '760px';
        document.getElementById('first').style.top = '107px';
        document.getElementById('first').style.width = '500px';
        document.getElementById('first').style.height = '410px';
        document.getElementById('first').style.zIndex = '2';
        document.getElementById('third').style.position = 'absolute';
        document.getElementById('third').style.left = '916px';
        document.getElementById('third').style.top = '130px';
        document.getElementById('third').style.width = '450px';
        document.getElementById('third').style.height = '360px';
        document.getElementById('third').style.zIndex = '1';
        document.getElementById('info').style.zIndex = '4';
        document.getElementsByClassName('header')[0].style.zIndex = '4';
    }
    function ThirdImage(){
        var infoForThird = "Spearfish: Rattail giant gourami bigmouth buffalo sea devil gombessa pike Atlantic silverside creek chub. Beluga sturgeon lungfish, suckermouth armored catfish banded killifish. Loach catfish gray mullet nurse shark basking shark cardinalfish ballan wrasse brown trout javelin fathead sculpin grideye. Northern pearleye, waryfish brook lamprey bonytongue giant danio butterfly ray blue gourami red velvetfish wolf-herring sharksucker.";
        document.getElementById('info').innerHTML = infoForThird;
        document.getElementById('third').style.position = 'absolute';
        document.getElementById('third').style.left = '564px';
        document.getElementById('third').style.top = '84px';
        document.getElementById('third').style.width = '550px';
        document.getElementById('third').style.height = '460px';
        document.getElementById('third').style.zIndex = '3';
        document.getElementById('second').style.position = 'absolute';
        document.getElementById('second').style.left = '760px';
        document.getElementById('second').style.top = '107px';
        document.getElementById('second').style.width = '500px';
        document.getElementById('second').style.height = '410px';
        document.getElementById('second').style.zIndex = '2';
        document.getElementById('first').style.position = 'absolute';
        document.getElementById('first').style.left = '916px';
        document.getElementById('first').style.top = '130px';
        document.getElementById('first').style.width = '450px';
        document.getElementById('first').style.height = '360px';
        document.getElementById('first').style.zIndex = '1';
        document.getElementById('info').style.zIndex = '4';
        document.getElementsByClassName('header')[0].style.zIndex = '4';
    }

  
