$(document).ready(function(){
    var _url='https://my-json-server.typicode.com/mikorail/apistud/mahasiswa';
    var result = '';
    var gender_result ='';
    var gender=[];

    $.get(_url,function(data){
        $.each(data,function(key,items ){
            _gend=items.gender;
            result +='<div><h3>'+items.name+'</h3><p>'+_gend+'</p></div>';
            
            if($.inArray(_gend,gender)===-1){
                gender.push(_gend);
                gender_result += "<option value='"+_gend+"'>"+_gend+"</option>";
            }
        });
        $('#mhs-list').html(result);
        $('#mhs-select').html("<option value='semua'>semua</option>"+gender_result);

});

$("#mhs-select").on('change',function(){
    updateListMahasiswa($(this).val);
});

    function updateListMahasiswa(opt){
        var result='';
        var _url2=_url;
        if(opt!=='semua'){
            _url2=url +'?gender='+opt;   
        }
        $.get(_url,function(data){
            $.each(data,function(key,items ){
                _gend=items.gender;
                result +='<div><h3>'+items.name+'</h3><p>'+_gend+'</p></div>';
            });
            $('#mhs-list').html(result);
    });
    }
});
