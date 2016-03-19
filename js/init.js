$(document).ready(function(){
    function all(){
        var w_width=$(window).width();
        var h_top=$(".top").height();
        var h_official=$(".official").height();
        var w_official=$(".official").width();
        var h_header_img=$(".header_img").height();
        var top_official=(h_header_img-h_official)/2+70;
        var left_official=($(window).width()-w_official)/2;
        var pad_htuch=(w_width-2*$(".tuch_thin").width()-$(".h_tuch h2").width()-40)/2;
        $(".h_tuch").css({"padding-left":pad_htuch+"px"});
        $(".to_down,.header_to_down,.to_down_yellow,.video_to_down").css({"left":(w_width-$(".to_down").width())/2});
        if(w_width>1062){
            $(".official").css({"top":top_official+'px',"left":left_official});
        }
        else{
            $(".official").css({"top":top_official-50+'px',"left":left_official});

        }

        //Video//
        var count_video=0;
        $(".play_button").click(function(){
            ++count_video;
            if(count_video%2==1){
                $("#video")[0].play();
                $(".play_button img").hide();
                $(".pause_button").show();
            }
            else{
                $("#video")[0].pause();
                $(".play_button img").show();
                $(".pause_button").hide();
            }
        });

        //Video//


        var offset_services=$(".h_main h2").offset().top-h_top;
        var offset_albums=$(".h_albums h3").offset().top-h_top;
        var offset_advantages=$(".h_advantages").offset().top-h_top;
        var offset_tuch=$(".tuch").offset().top-h_top;
        var offset_contacts=$(".contact_us").offset().top-h_top;
        var left_img=-1*($(".wending_slider").width()+20);
        var right_text=$(".wending_text_rel").width()+20;
        //alert(right_text);
        function toscroll(varOffset){
            $('html, body').animate({scrollTop:varOffset}, 500);
        }
        $("#top_services").click(function(){
            toscroll(offset_services);
        });

        $("#top_albums,.header_to_down").click(function(){
            toscroll(offset_albums);
        });
        $("#top_advantages,.to_down").click(function(){
            toscroll(offset_advantages);
        });
        $(".video_to_down").click(function(){
            toscroll(offset_tuch);
        });
        $("#top_contacts").click(function(){
            toscroll(offset_contacts);
        });


        var c_port=$(".portfolio").length;
        function abl(arg){
            arg.mouseenter(function(){
                $(this).find(".on_one").css({top:'330px'});
            })
        }
        for(var j=0;j<c_port;j++){
            console.log(j);
            $(".portfolio")[j].onmouseenter=function(){
                $(this).find(".on_one").css({top:'330px'});
                $(this).find(".on_one").find(".on_container").css({"margin-top":10+"px"});
            };
            $(".portfolio")[j].onmouseleave=function(){

                $(this).find(".on_one").css({top:'0'});
                $(this).find(".on_one").find(".on_container").css({"margin-top":50+"%"});
            }
        }

        $("#all").click(function(){
            $(".more span,.more_thin").show();
            hide_albums();
            $(".portfolio_one,.portfolio_two,.portfolio_three").show();
        });
        $("#wending").click(function(){
            $(".more span,.more_thin").hide();
            hide_albums();
            $(".portfolio_two,.portfolio_three").hide();
            $(".portfolio_one").show();
        });
        $("#privet").click(function(){
            $(".more span").hide();
            hide_albums();
            $(".portfolio_one,.portfolio_three").hide();
            $(".portfolio_two").show();
        });
        $("#corporate").click(function(){
            $(".more span,.more_thin").hide();
            hide_albums();
            $(".portfolio_one,.portfolio_two").hide();
            $(".portfolio_three").show();
        });
        var count_more=0;
        var album_count=$(".portfolio_div").length;
        function hide_albums(){
            for(var i=album_count-1;i>0;i--){
                $(".portfolio_div").eq(i).hide();
            }
        };hide_albums();

        $(".more span").click(function(){
            ++count_more;
            $(".portfolio_div").eq(count_more).show();
        });

        $("#christening_party,#private_event,#corporate_event").css({"left":left_img});
        $("#text_private,#text_corporate,#text_christening").css({"left":right_text});
        var right_left=0;
        function slide_text(id_img,id_text){
            var number_img="#"+id_img;
            var number_text="#"+id_text;
            $(".wending_text_abs").css({"left":right_text});
            $(".wending").css({"left":left_img});
            setTimeout(function(){
                $(number_img).css({"left":0});
                $(number_text).css({"left":0});
            },300);
        }
        $(".services_list li").eq(0).click(function(){
            right_left=0;
            slide_text("wending_party","text_wending");
        });
        var two=$(".services_list li:eq(1)").click(function(){
            right_left=1;
            slide_text("private_event","text_private");
        });
        $(".services_list li:eq(2)").click(function(){
            right_left=2;
            slide_text("corporate_event","text_corporate");
            $(".to_right").click(function(){
                slide_text("christening_party","text_christening");
            });
            $(".to_left").click(function(){
                slide_text("private_event","text_private");
            })
        });
        $(".services_list li:eq(3)").click(function(){
            right_left=3;
            slide_text("christening_party","text_christening");
        });
        var img_array=["wending_party","private_event","corporate_event","christening_party"];
        var text_array=["text_wending","text_private","text_corporate","text_christening"];
        $(".to_left").click(function(){
            if(right_left){
                --right_left;
                slide_text(img_array[right_left],text_array[right_left]);
            }
        });
        $(".to_right").click(function(){
            if(right_left<3){
                ++right_left;
                slide_text(img_array[right_left],text_array[right_left]);
            }
        });

        /////Form ajax//////

            $("#contact_button").click(function(){

                $.ajax({
                    url:"./",
                    method:"POST",
                    success:function(){
                        var name=$("#name").val();
                        var email=$("#email").val();
                        var msg=$("#msg").val();
                    if(name && email && msg){
                        alert("you send us message, thank you!");
                    }
                     },
                    error:function(){
                        alert("error!");
                    }})
            });

        /////Form ajax//////

    }all();
    $(window).resize(function(){
        all();
    });


    //    Map   //
    function initialize() {
        var myAddress=new google.maps.LatLng(40.1725522,44.52160300000003);
        var mapCanvas = document.getElementById('map');
        var mapOptions = {
            center:myAddress,
            zoom: 12,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(mapCanvas, mapOptions);
        var marker=new google.maps.Marker({
            position:myAddress
        });

        marker.setMap(map);

    }
    google.maps.event.addDomListener(window, 'load', initialize);

    //    Map   //

});