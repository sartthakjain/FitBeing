$(document).ready(function main() {
    var animating = false,
    firstLoad = false;
    var btnflag;
    var cur = 0;

    hambtnani();
  
    
  //  $('#ourstory-container').hide(0);
    $("#loader").delay(10000).hide(1000);
    $(".ham").hide();
    $("#high").hide(0).delay(0).show(0).delay(13000).animate({ opacity: '1' }, 2000, "");
    $("#high0").hide(0).delay(0).show(0).delay(14000).animate({ opacity: '1' }, 2000, "");
    $("#high1").hide(0).delay(0).show(0).delay(15000).animate({ opacity: '1' }, 2000, "");
    $("#high2").hide(0).delay(0).show(0).delay(16000).animate({ opacity: '1' }, 2000, "");
    $("#first").hide(0).delay(2000).show(0);
    $("#second").hide(0).delay(2000).show(0);
    $(".ham").delay(17000).show(100);
    $('#maindiv').delay(10000).animate({ width: '100%' }, 2000, "easeInOutCirc").delay(0).animate({ height: '100%', top: '0' }, 1000, "easeInOutCirc");
  //  $('#maindiv2').animate({ left:'50%' }, 2000, "easeInOutCirc").delay(0).animate({ height: '100%', top: '0' }, 1000, "easeInOutCirc");

    $('#content').hide();
    $('#menuword2').hide(0);
    $('#menuword3').hide(0);
    $('#menuword4').hide(0);

   
    showLetsstartPage();
    showWorkoutPage();
       
   
    /*





    $("#homebtn").click(function () {


        $('#homebtn').delay(0).animate({ left: '600px', opacity: '0' }, 500, "easeInOutCirc");

        $('#maindiv').removeClass("maindivani").delay(700).animate({ left: '30%' }, 500, "easeInOutCirc");



        $('#closebtn').delay(100).animate({ left: '1200px', opacity: '1' }, "easeInOutCirc");


        $('#high').delay(1200).animate({ left: '+=150%' }, "easeInOutCirc");
        //         $('#first').delay(1300).animate({ width: '+=100%' }, 500, "easeInOutCirc").delay(500).animate({ left: '+=100%' }, 500, "easeInOutCirc");
        //       $('#second').delay(1500).animate({ width: '+=100%' }, 500, "easeInOutCirc").delay(500).animate({ left: '+=100%' }, 500, "easeInOutCirc");
        //     $('#third').delay(1700).animate({ width: '+=100%' }, 500, "easeInOutCirc").delay(500).animate({ left: '+=100%' }, 500, "easeInOutCirc");
        $('#content').delay(1200).show(0);
        $('#menuword').delay(1400).animate({ opacity: '1', left: '10px' }, 500, "easeInOutCirc");
        $('#menuword2').delay(1400).animate({ opacity: '1', left: '10px' }, 500, "easeInOutCirc");
        $('#menuword3').delay(1400).animate({ opacity: '1', left: '10px' }, 500, "easeInOutCirc");
        $('#menuword4').delay(1400).animate({ opacity: '1', left: '10px' }, 500, "easeInOutCirc");
    });         /*not using these button functions now*/
    
    $("#closebtn").click(function () {

        // $('#maindiv').delay(500).animate({ height: '100%', top: '0px' }, "easeInOutCirc");;

        $('#menuword').delay(0).animate({ opacity: '0', left: '0px' }, 500, "easeInOutCirc");
        $('#menuword2').delay(0).animate({ opacity: '0', left: '0px' }, 500, "easeInOutCirc");
        $('#maindiv').delay(500).animate({ left: '0%' }, 1000, "easeInOutCirc");
        $('#homebtn').delay(600).animate({ left: '10px', opacity: '1' }, "easeInOutCirc");


        $('#closebtn').delay(600).animate({ left: '600px', opacity: '0' }, "easeInOutCirc");

        $('#content').delay(700).hide(0);

        //     $('#high').delay(600).animate({ marginLeft: '-=150%' }, "easeInOutCirc");


        ///                $('#first').delay(100).animate({ left: '0%' }, 500, "easeInOutCirc").delay(500).animate({ width: '0%' }, 500, "easeInOutCirc");
        //             $('#second').delay(300).animate({ left: '0%' }, 500, "easeInOutCirc").delay(500).animate({width: '0%' }, 500, "easeInOutCirc");
        //           $('#third').delay(500).animate({ left: '0%' }, 500, "easeInOutCirc").delay(500).animate({ width: '0%' }, 500, "easeInOutCirc");





    });

    



    $("#menuword2").click(function () {
                
        btnflag = 1;
      
                
     
        //     $('#maindiv2').load('letsstart.html');

        // $('#maindiv').delay(700).css("transform", "scale(0.5)");

        //$('#first').delay(700).animate({ width: '+=40%' }, 500, "easeInOutCirc").delay(100).animate({ height: '100%', top: '0px' }, 500, "easeInOutCirc").delay(100).animate({top:'100%',height:'0%'},500,"easeInOutCirc");
        //  $('#second').delay(700).animate({ left: '-=60%' }, 500, "easeInOutCirc").delay(100).animate({ height: '100%', top: '0px' }, 500, "easeInOutCirc").delay(100).animate({ top: '0%', height: '0%' }, 500, "easeInOutCirc");;


        // $('#second').delay(1500).animate({ width: '+=100%' }, 500, "easeInOutCirc").delay(500).animate({ left: '+=100%' }, 500, "easeInOutCirc");
        // $('#third').delay(1700).animate({ width: '+=100%' }, 500, "easeInOutCirc").delay(500).animate({ left: '+=100%' }, 500, "easeInOutCirc");
        // $("#maindiv").delay(2200).hide(0);


      




    });
    

    $("#menuword3").click(function () {
        btnflag = 2;


    });

    $("#item_one").click(function () { btnflag=3});
           

  




    (function () {

        "use strict";

        var toggles = document.querySelectorAll(".menuwordani");

        for (var i = toggles.length - 1; i >= 0; i--) {
            var toggle = toggles[i];

            toggleHandler(toggle);
        };

        function toggleHandler(toggle) {
            toggle.addEventListener("click", function (e) {
                e.preventDefault();
                if (this.classList.contains("is-active") === true) {


                    this.classList.remove("is-active");
                          

             
            



                } else {


                   for (var i = toggles.length - 1; i >= 0; i--) {
                        var toggle = toggles[i];
                           
                       toggle.classList.add("is-active");
                           
                    };


                          


                }

            //    setTimeout(function () { window.location = "letsstart.html" }, 3400);

            });
        }

    })();



    $('main').on('click', '[data-type="page-transition"]', function (event) {
        event.preventDefault();
        //detect which page has been selected
        var newPage = $(this).attr('href');
        //if the page is not animating - trigger animation
        if (!animating) changePage(newPage, true);
        firstLoad = true;
    });




    $(window).on('popstate', function () {
        if (firstLoad) {
            var newPageArray = location.pathname.split('/'),
                //this is the url of the page to be loaded 
                newPage = newPageArray[newPageArray.length - 1];
         
            if (!animating) changePage(newPage,false);
        }
        firstLoad = true;
    });





    function changePage(url, bool) {
        animating = true;
        if (url == 'index.html' || url == 'highonlife.azurewebsites.net'||url=='') {
            btnflag = 0;
         
        }
        else if (url == 'letsstart.html')
            btnflag = 1;
        else if (url == 'workouts.html')
            btnflag = 2;
        else if (url == 'shoulders.html')
            btnflag = 11;
        else if (url == 'chest.html')
            btnflag = 12;



        
        if ((btnflag == 1)|| (btnflag == 2)) {
            //going from index to letsstart or workouts
            removeWorkoutPage();
            removeIndexPage();
            if (cur == 0)
                //index is current
                setTimeout(function () { loadNewContent(url, bool); }, 2000);
            else
            setTimeout(function () { loadNewContent(url, bool); }, 1700);  //shoulder ,chest etc are current

            
        } else if (btnflag >= 11 && cur>=2)
        {
            removeWorkoutPage();
            setTimeout(function () { loadNewContent(url, bool); }, 1700);

    
        }
        else if(btnflag==0)
        {
            removeWorkoutPage();
            removeLetsstartPage();
            setTimeout(function () { loadNewContent(url, bool); }, 1700);
        
        }
     


        

            
        
       




      
    }



    function loadNewContent(url, bool) {
        url = ('highonlife.azurewebsites.net' == url) ? 'index.html' : url;
        var newSectionName = 'cd-' + url.replace('.html', ''),
            section = $('<div class="cd-main-content ' + newSectionName + '"></div>');

        section.load(url + ' .cd-main-content > *', function (event) {
            // load new content and replace <main> content with the new one
            $('main').html(section);
            if(section.hasClass(".cd-letsstart")) {
                $(".cd-main-content").addClass(".cd-letsstart"); 
               

            }
            else if (section.hasClass(".cd-workouts"))
            {
                $(".cd-main-content").addClass(".cd-workouts");
             //   $(".workout_content").animate({ left: '10%', width: '80%' }, 300, "easeInOutCirc");
            }
            else if (section.hasClass(".cd-shoulders"))
            {
               
            //    reloadScript('#shoulderscript');
            }
            else if (section.hasClass(".cd-chest")) {
                $(".cd-main-content").addClass(".cd-chest");

            }
            else
            {


                $(".cd-main-content").removeClass(".cd-letsstart");


            }
            if (btnflag == 1) {

                showLetsstartPage();
                cur = 2;
            }
            else if (btnflag == 2) {
                showWorkoutPage();
                cur = 2;

                
            } else if (btnflag >= 11) {

                showWorkoutPage();
                cur = 3;
            }
            else if (btnflag == 0) {
                showIndexPage();
                         cur = 0;
               
            }




            if (url != window.location && bool) {
                //add the new page to the window.history
                window.history.pushState({ path: url }, '', url);
            }
            animating = false;
          
        });
    }


  
   
    




    function removeIndexPage() {

        $('#menuword').delay(1300).hide(0);
        $('#menuword2').delay(1300).hide(0);
        $('#menuword3').delay(1300).hide(0);
        $('#menuword4').delay(1300).hide(0);
        $('#content').delay(1300).animate({ height: '0%' }, 1000, "easeInOutCirc");
        $('#maindiv').delay(1300).animate({ top:'50%',height: '2px' }, 300);
        
        $('#maindiv').animate({ width:'20%',left:'40%' }, 300);
        
      //  $('#maindiv').delay(2300).animate({ left: '-87%' }, 1000, "easeInOutCirc");
  //      $('#maindiv2').delay(2300).animate({ left: '-37%' }, 1000, "easeInOutCirc");





        var toggles = document.querySelectorAll(".menuwordani");

        setTimeout(function () {
            for (var i = toggles.length - 1; i >= 0; i--) {
                var toggle = toggles[i];
                // toggle.classList.remove("rev");
                toggle.classList.add("is-active");
            };
        }, 100);

    };
          

    function showIndexPage() {
        $("#loader").hide(0);
        $('#maindiv').css({ height: '2px', top: '50%', left: '40%', width: '20%' });
        $('#maindiv').animate({ left: '0%', width: '100%' }, 300);
    
        $('#maindiv').delay(350).animate({ top: '5%', height: '90%' }, 300);
        $('#maindiv').delay(350).animate({ top: '0%', height: '100%', left: '0%', width: '100%' }, 300, "easeInOutCirc");
        $("#overlay").delay(1000).animate({ opacity: '0.6' }, 1000);
        $('#maindiv2').css({ height: '100%', top: '0%' });
        $('#maindiv').delay(0).animate({ left:'0%' }, 1000, "easeInOutCirc");
    //    $('#maindiv2').delay(0).animate({ left: '50%' }, 1000, "easeInOutCirc");
        $('#content').delay(1000).animate({ height: '100%' }, 500, "easeInOutCirc");


        $('#menuword2').delay(1500).show(0);
        $('#menuword3').delay(1500).show(0);
        $('#menuword4').delay(1500).show(0);

        var toggles = document.querySelectorAll(".menuwordani");
        for (var i = toggles.length - 1; i >= 0; i--) {
            var toggle = toggles[i];
            // toggle.classList.remove("rev");
            toggle.classList.add("is-active");
        };
        setTimeout(function () {
            for (var i = toggles.length - 1; i >= 0; i--) {
                var toggle = toggles[i];
                // toggle.classList.remove("rev");
                toggle.classList.remove("is-active");
            };
        }, 2000);

        hambtnani();


 


    };

    function removeLetsstartPage() {
        $('#ourstory-container').delay(0).animate({ top: '100%', opacity: '0' }, 400, "swing");


        $(".cd-letsstart").delay(0).animate({ top: '50%', height: '2px' }, 300, "easeInOutCirc");

        $(".cd-letsstart").animate({ width: '20%', left: '40%' }, 300, "easeInOutCirc");

    };

    function showLetsstartPage() {
        $(".heading_text_one").delay(2000).animate({ opacity: '1' }, 1000);
     //   $(".heading_text_two").delay(3000).animate({ opacity: '1' }, 1000);

        $("#overlay").delay(1000).animate({ opacity: '0.6' }, 1000);
        $(".cd-letsstart").animate({ left: '0%', width: '100%' }, 300, "easeInOutCirc");

        $(".cd-letsstart").delay(350).animate({ top: '5%', height: '90%' }, 300, "easeInOutCirc");
        $(".cd-letsstart").delay(350).animate({ top: '0%', height: '100%', left: '0%', width: '100%' }, 300, "easeInOutCirc");
        $('#ourstory-container').show(0).delay(1200).animate({ top: '30%', opacity: '1' }, 400, "swing");
        $('#ourstory').delay(1400).animate({ top: '0%' }, 400, "swing");
        $('#ourstory-bg').delay(5100).addClass("bluraniclass");
        btnflag = 0;
    };

    function showWorkoutPage() {
        
      //  $(".workout_nav_items").animate({ opacity: '1' },500);
       
        $("#overlay").delay(1000).animate({ opacity: '0.6' }, 1000);
        $(".heading_text_one").delay(2000).animate({ opacity: '1' }, 1000);
        $(".heading_text_two").delay(3000).animate({ opacity: '1' }, 1000);
        $(".workout_content").animate({ left: '0%', width: '100%' }, 300);

        $(".workout_content").delay(350).animate({ top: '5%', height: '90%' }, 300);
        $("#workout_content_main").delay(350).animate({ top: '0%', height: '100%', left: '0%', width: '100%' }, 300, "easeInOutCirc");
    //   $(".workout_content").delay(300).animate({ top: '0%', height: '100%',left:'13%',width:'87%' }, 300,"easeInOutCirc");
        
    };

    function removeWorkoutPage() {
     //   $(".workout_nav_items").animate({ opacity: '0' },500);
    //    $(".workout_content").animate({ top: '5%', height: '90%', left: '15%', width: '80%' }, 100);
      
        $(".heading_text_one").delay(0).animate({ opacity: '0' }, 1000);
        $(".heading_text_two").delay(0).animate({ opacity: '0' }, 1000);
        $(".workout_content").delay(1000).animate({ top: '50%', height: '2px' }, 300);

        $(".workout_content").animate({ width: '20%', left: '40%' }, 300);

       
    };




    function reloadScript(id) {

        var $el = $('#' + id);

        $('#' + id).replaceWith('<script id="' + id + '" src="' + $el.prop('src') + '"></script>');
    }
   


    function hambtnani() {
        (function () {

            "use strict";

            var toggles = document.querySelectorAll(".ham");

            for (var i = toggles.length - 1; i >= 0; i--) {
                var toggle = toggles[i];

                toggleHandler(toggle);
            };

            function toggleHandler(toggle) {
                toggle.addEventListener("click", function (e) {
                    e.preventDefault();
                    if (this.classList.contains("is-active") === true) {


                        this.classList.remove("is-active");




                        $("#high").delay(2000).show(0).animate({ opacity: '1' }, 1000);
                        $("#high0").delay(2000).show(0).animate({ opacity: '1' }, 1000);
                        $("#high1").delay(2000).show(0).animate({ opacity: '1' }, 1000);

                        $("#high2").delay(2000).show(0).animate({ opacity: '1' }, 1000);


                        $('#menuword').delay(0).animate({ opacity: '0', left: '0px' }, 500, "easeInOutCirc");
                        $('#content').delay(1500).animate({ height: '0%' }, 1000, "easeInOutCirc");

                        if (btnflag == 1) {
                            btnflag = 0;

                            //           $('#ourstory-container').delay(500).animate({ top: '100%', opacity: '0' }, 400, "swing");
                            //          $('#ourstory').delay(0).animate({ top: '100%' }, 400, "swing");
                            //        $('#ourstory-bg').delay(200).animate({ opacity: '0' }, 400, "swing");
                            //   $('#maindiv').delay(2000).removeClass("newbg1").delay(2000).addClass("oldbg");//.delay(500).animate({ top: '0%', left: '0%', height: '100%', width: '100%' }, 1000, "easeInOutCirc");

                            //      $('#maindiv').delay(2500).animate({ width: '50%',left:'0%' }, 1000, "easeInOutCirc");
                            //    $('#maindiv2').delay(2500).animate({ left: '50%' }, 1000, "easeInOutCirc");


                        }
                        else {
                            //      $('#maindiv').delay(2500).animate({ left: '0%' }, 1000, "easeInOutCirc");
                            //    $('#maindiv2').delay(2500).animate({ left: '50%' }, 1000, "easeInOutCirc");


                            var toggles = document.querySelectorAll(".menuwordani");

                            for (var i = toggles.length - 1; i >= 0; i--) {
                                var toggle = toggles[i];
                                // toggle.classList.remove("rev");
                                toggle.classList.add("is-active");
                            };
                            $('#menuword2').delay(1500).hide(0);
                            $('#menuword3').delay(1500).hide(0);
                            $('#menuword4').delay(1500).hide(0);


                        }


                    } else {

                        $("#high").animate({ opacity: '0' }, 1000).delay(100).hide(0);
                        $("#high0").animate({ opacity: '0' }, 1000).delay(100).hide(0);
                        $("#high1").animate({ opacity: '0' }, 1000).delay(100).hide(0);
                        $("#high2").animate({ opacity: '0' }, 1000).delay(100).hide(0);
                        this.classList.add("is-active");

                        //  $("#maindiv").animate({ left: '-20%' }, 1000, "easeInOutCirc");
                        //  $("#maindiv2").animate({ left: '70%' }, 1000, "easeInOutCirc");
                        $('#content').delay(0).show(0).animate({ height: '100%' }, 1000, "easeInOutCirc");
                        $('#menuword').delay(0).show(0).delay(1000).animate({ opacity: '1', left: '10px' }, 500, "easeInOutCirc");
                        $('#menuword2').delay(1000).show(0);
                        $('#menuword3').delay(1000).show(0);
                        $('#menuword4').delay(1000).show(0);

                        var toggles2 = document.querySelectorAll(".menuwordani");
                        for (var j = toggles2.length - 1; j >= 0; j--) {
                            var toggle2 = toggles2[j];
                            toggle2.classList.remove("is-active");
                        };


                    }

                });
            }

        })();
    };

});
