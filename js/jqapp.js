$(document).ready(function () {

    // console.log('hay');

    // UI

    //Start Navbar Section
    $('.navbuttons').click(function () {
        // console.log('i am working');
        $('.navbuttons').toggleClass('changes');
    });



    $(window).scroll(function () {
        let getscrolly = $(this).scrollTop();

        if (getscrolly >= 200) {
            $('.navbar').addClass('navmenus');
        } else {
            $('.navbar').removeClass('navmenus');
        }
    });
    //End Navbar Section



    // Start Mission

    $(window).scroll(function () {
        let getscrolly = $(this).scrollTop();

        if (getscrolly >= 650) {
            $('.cameraimgs').addClass("fromlefts");
            $('.missiontexts').addClass("fromrights");
        } else {
            $('.cameraimgs').removeClass("fromlefts");
            $('.missiontexts').removeClass("fromrights");
        }


    });

    //End Mission 




    // Start Gallery Section
    $('.gallerylists').click(function () {

        let datafilter = $(this).attr('data-filter');
        // console.log(datafilter);

        if (datafilter === "all") {
            $('.filters').show(300);
        } else {
            $('.filters').not('.' + datafilter).hide(300);

            $('.filters').filter('.' + datafilter).show(300);
        }



    });




    // for ul active 
    $('.gallerylists').click(function () {
        $(this).addClass('activeitems').siblings().removeClass('activeitems');
    });


    // End Gallery Section



    // Start Pricing Section
    $(window).scroll(function () {
        let getscrolly = $(this).scrollTop();

        if (getscrolly >= 4300) {
            $('.cardones').addClass('movefromlefts');
            $('.cardtwos').addClass('movefrombottoms');
            $('.cardthrees').addClass('movefromrights');
        } else {
            $('.cardones').removeClass('movefromlefts');
            $('.cardtwos').removeClass('movefrombottoms');
            $('.cardthrees').removeClass('movefromrights');
        }

    });
    // End Pricing Section




    // Start Footer Section
    const showyear = document.getElementById('showyear');
    const getfullyear = new Date().getUTCFullYear();

    showyear.textContent = getfullyear;
    //End Footer Section





    //18BCJ1F


















});