$(document).ready(function(){
    $(document).on("click", "#show-info", function(){
        $("#contact-info-container").slideToggle();
    });
    
    $(document).on("click", ".edit-name", function(){
        $("#pop-up-edit-name").show();
    });
    
    $(document).on("click", ".btn-cancel", function(){
        $(".pop-up").hide();
    });
    
    $(document).on("click", ".btn-primary", function(){
        $(".pop-up").hide();
        $(".edit-section").hide();
    });
    
    $(document).on("click", ".edit-headline", function(){
        $("#pop-up-edit-headline").show();
    });
    
    $(document).on("click", ".edit-location-industry", function(){
        $("#pop-up-edit-location-industry").show();
    });
    
    $(document).on("click", ".edit-education", function(){
        $('html,body').animate({
        scrollTop: $("#background-education-container").offset().top},
        'fast');
    });
    
    $(document).on("click", ".edit-job", function(){
        $('html,body').animate({
        scrollTop: $("#background-experience-container").offset().top},
        'fast');
    });
    
    $(document).on("click", ".edit-summary", function(){
        $(".summary-content>p").hide();
        $(".edit-summary-container").show();
    });
    
    $(document).on("click", ".edit-summary-container .btn-cancel", function(){
        $(".summary-content>p").show();
        $(".edit-summary-container").hide();
    });
    
    $(document).on("click", "#btn-add-position", function(){
        $(".add-position-container").show();
    });
    
    $(document).on("click", "#btn-cancel-add-position", function(){
        $(".add-position-container").hide();
    });
    
    $(document).on("click", "#btn-add-education", function(){
        $(".add-education-container").show();
    });
    
    $(document).on("click", "#btn-cancel-add-education", function(){
        $(".add-education-container").hide();
    });
    
    $(document).on("click", "#btn-add-skill", function(){
        $(".add-skill-container").show();
    });
    
    $(document).on("click", ".edit-avatar", function(){
        $(".pop-up-edit-avatar").show();
    });
    
    $("#btn-cancel-add-skill", function(){
        $(".add-skill-container").hide();
    });
    
    
    
    $(document).on("click", "#btn-cancel-add-project", function(){
        $(".add-project-container").hide();
    });

    $(document).on("click", "#btn-save-summary", function(){
        $(".summary-content>p").show();
        $(".edit-summary-container").hide();
    });

    $(document).on("click", "#btn-save-exp", function(){
        $(".add-position-container").hide();
        $(".add-position-container input").val('');
        $(".add-position-container textarea").val('');
        $(".add-position-container select").val('');
        $(".add-position-container input").attr('checked', false);
    });

    $(document).on("click", "#btn-save-project", function(){
        $(".add-project-container").hide();
        $(".add-project-container input").val('');
        $(".add-project-container textarea").val('');
        $(".add-project-container select").val('');
    });

    $(document).on("click", "#btn-save-skill", function(){
        $(".add-skill-container").hide();
        $(".add-skill-container input").val('');
    });

    $(document).on("click", "#btn-save-education", function(){
        $(".add-education-container").hide();
        $(".add-education-container input").val('');
        $(".add-education-container textarea").val('');
        $(".add-education-container select").val('');
    });

    $(document).on("click", ".edit-exp", function(){
        $(".add-position-container").show();
        $('html,body').animate({
                scrollTop: $("#background-experience-container").offset().top+80},
            'fast');
    });

    $(document).on("click", ".btn-remove", function(){
        $(".add-position-container").hide();
    });
    
    $(document).on("click", "#btn-add-project", function(){
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