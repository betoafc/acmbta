var channelName = 'LaalianzadebarcelonetaOrglive';

$(document).ready(function(){
    $.get(
        "https://www.googleapis.com/youtube/v3/channels",{
            part: 'contentDetails',
            forUsername: channelName,
            key: 'AIzaSyCl3RwmbRlBuBYj_AlEdlMJFGCoGhLQ-1g'},
            function(data){
                $.each(data.items, function(i, item){
                    console.log(item);
                });
            
            });

});