function isInSubDirectory(dir, file) {
    var fl = file.replace(RegExp('^'+dir+'/'), '');
    return fl.indexOf('/') != -1;
}

function listContents(dir, storagename) {
    //Clear up the list first
    $('#results').html("");
    var files = navigator.getDeviceStorage(storagename);

    var cursor = files.enumerate();

    cursor.onsuccess = function () {
        //alert("Got something");
        var file = this.result;
        if (file != null) {
            if (isInSubDirectory(dir, file.name)){
                // Aquí hay que imprimir el directorio, pero sin los archivos
                // Sería bueno meterlos en un arreglo, y si el directorio está
                // en el directorio, no mostrarlo
                alert('hola');
            }
            else {
                var imageElement = $('<img height="100" width="75">');
                imageElement.attr('src', window.URL.createObjectURL(file));
                $("<p>" + file.name + "," + file.lastModifiedDate + "," + file.type + "," + file.size  + "</p>").appendTo('#results');
                imageElement.appendTo("#results");
            }
            this.done = false;
        }
        else {
            this.done = true;
            //alert("File is null!");
        }

        if (!this.done) {
            this.continue();
        }
    }
}

$(document).ready(function(){
    $("#browseSDCard").click(function(){
        listContents('', 'sdcard');
    });
    $("#browseVideos").click(function(){
        listContents('', 'videos');
    });
    $("#browseMusic").click(function(){
        listContents('', 'music');
    });
    $("#browsePictures").click(function(){
        listContents('', 'pictures');
    });
});
