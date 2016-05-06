$(document).ready(function(){
    $("#show-info").click(function(){
        $("#contact-info-container").slideToggle();
    });
    
    $(".edit-name").click(function(){
        $("#pop-up-edit-name").show();
    });
    
    $(".btn-cancel").click(function(){
        $(".pop-up").hide();
    });
    
    $(".btn-primary").click(function(){
        $(".pop-up").hide();
        $(".edit-section").hide();
    });
    
    $(".edit-headline").click(function(){
        $("#pop-up-edit-headline").show();
    });
    
    $(".edit-location-industry").click(function(){
        $("#pop-up-edit-location-industry").show();
    });
    
    $(".edit-education").click(function(){
        $('html,body').animate({
        scrollTop: $("#background-education-container").offset().top},
        'fast');
    });
    
    $(".edit-job").click(function(){
        $('html,body').animate({
        scrollTop: $("#background-experience-container").offset().top},
        'fast');
    });
    
    $(".edit-summary").click(function(){
        $(".summary-content>p").hide();
        $(".edit-summary-container").show();
    });
    
    $(".edit-summary-container .btn-cancel").click(function(){
        $(".summary-content>p").show();
        $(".edit-summary-container").hide();
    });
    
    $("#btn-add-position").click(function(){
        $(".add-position-container").show();
    });
    
    $("#btn-cancel-add-position").click(function(){
        $(".add-position-container").hide();
    });
    
    $("#btn-add-education").click(function(){
        $(".add-education-container").show();
    });
    
    $("#btn-cancel-add-education").click(function(){
        $(".add-education-container").hide();
    });
    
    $("#btn-add-skill").click(function(){
        $(".add-skill-container").show();
    });
    
    $("#btn-cancel-add-skill").click(function(){
        $(".add-skill-container").hide();
    });
    
    
    
    $("#btn-cancel-add-project").click(function(){
        $(".add-project-container").hide();
    });

    $("#btn-save-summary").click(function(){
        $(".summary-content>p").show();
        $(".edit-summary-container").hide();
    });

    $("#btn-save-exp").click(function(){
        $(".add-position-container").hide();
        $(".add-position-container input").val('');
        $(".add-position-container textarea").val('');
        $(".add-position-container select").val('');
        $(".add-position-container input").attr('checked', false);
    });

    $("#btn-save-project").click(function(){
        $(".add-project-container").hide();
        $(".add-project-container input").val('');
        $(".add-project-container textarea").val('');
        $(".add-project-container select").val('');
    });

    $("#btn-save-skill").click(function(){
        $(".add-skill-container").hide();
        $(".add-skill-container input").val('');
    });

    $("#btn-save-education").click(function(){
        $(".add-education-container").hide();
        $(".add-education-container input").val('');
        $(".add-education-container textarea").val('');
        $(".add-education-container select").val('');
    });

    $(document).on("click", ".edit-exp", function(){
        $(".add-position-container").show();
        $('html,body').animate({
                scrollTop: $("#background-experience-container").offset().top+90},
            'fast');
    });

    $(document).on("click", ".btn-remove", function(){
        $(".add-position-container").hide();
    });
    
    $("#btn-add-project").click(function(){
        $(".add-project-container").show();
        $('html,body').animate({
                scrollTop: $("#background-project-container").offset().top},
            'fast');

    });

    $(document).on("click", "#edit-project", function(){
        $(".add-project-container").show();
        $('html,body').animate({
                scrollTop: $("#background-project-container").offset().top},
            'fast');
    });

    $(document).on("click", "#btn-remove-project", function(){
        $(".add-project-container").hide();
        $('html,body').animate({
                scrollTop: $("#background-project-container").offset().top},
            'fast');
    });

    $(document).on("click", "#edit-edu", function(){
        $(".add-education-container").show();
        $('html,body').animate({
                scrollTop: $("#background-education-container").offset().top},
            'fast');
    });

    $(document).on("click", "#btn-remove-edu", function(){
        $(".add-education-container").hide();
        $('html,body').animate({
                scrollTop: $("#background-education-container").offset().top},
            'fast');
    });

});