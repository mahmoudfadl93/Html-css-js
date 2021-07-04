
    var current_fs , next_fs ,previous_fs ;//fieldsets
    var left , opacity ,scale ;//field properties thich we will animate
    
    $(".NextTotalNumber").click(function () {
        current_fs = $(this).parent();
        next_fs    = $(this).parent().next();

        //activate next steo on progressbar using the index of next_fs
        $("#progressbar li").eq($("#msform fieldset").index(next_fs)).addClass("active");

        // Show the next fieldset
        next_fs.show();

        //hide the current fieldset with style
        current_fs.animate({opacity: 0},{
            step:function (now,mx) {
                // as the opacity of current_fs reduces to 0 - stored in "now"
                //1.scale current_fs down to 80%
                scale = 1 -(1-now) * 0.2;

                //2. bring next_fs from the right (50%)
                left = (now * 50)+ "%";

                //3.increase opacity of next_fs to 1 as it movie in
                opacity = 1 - now;
                current_fs.css({'transform':'scale('+ scale+')'});
                next_fs.css({'left':left,'opacity':opacity});   
            },
            duration:700,
            complete:function(){
                current_fs.hide();
            },
            //this comes from the custom easing plugin
            easing:'easeInOutBack'

        }); 
        
    });

    // $(".Previous").click(function () {
    //     current_fs  = $(this).parent();
    //     previous_fs = $(this).parent().prev();

    //     //de-activate current next steo on progressbar
    //     $("#progressbar li").eq($("#msform fieldset").index(current_fs)).removeClass("active");

    //     // Show the next fieldset
    //     previous_fs.show();

    //     //hide the current fieldset with style
    //     current_fs.animate({opacity: 0},{
    //         step:function (now,mx) {
    //             // as the opacity of current_fs reduces to 0 - stored in "now"
    //             //1.scale current_fs down to 80% to 100%
    //             scale = 0.8 +(1-now) * 0.2;

    //             //2. bring previous_fs from the right (50%) - from 0%
    //             left = ((1-now) * 50)+ "%";

    //             //3.increase opacity of previous_fs to 1 as it movie in
    //             opacity = 1 - now;
    //             current_fs.css({'left':left});   
    //             previous_fs.css({'transform':'scale('+ scale+')','opacity':opacity});
               
    //         },
    //         duration:800,
    //         complete:function(){
    //             current_fs.hide();
    //         },
    //         //this comes from the custom easing plugin
    //         easing:'easeInOutBack'

    //     }); 
        
    // });