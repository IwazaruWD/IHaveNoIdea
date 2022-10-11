$(document).ready(function(){

    var btn = $("#btn");
    var studient = []; 
    var allStudients = [];
    var mean = [];

    $("#error").hide();

    btn.click(function(){

        let inputNbr = parseInt($("#mean").val());

        if(inputHasNotThisValue('', $("#firstName")) && inputHasNotThisValue('', $("#name")) && inputNbr >=0 && inputNbr <= 20){

            studient.push($("#firstName").val(), $("#name").val(), inputNbr);
            allStudients.push(studient);
            mean.push(inputNbr);
            tableUpdate();
            valueReset();

            if(allStudients.length > 1){
                $("#meanClass").html(meanClass());
            }

        }
        else{
            $('#error').show().fadeOut(5000);
            valueReset();
        }


    })

    function inputHasNotThisValue(valueCheck, input){
        if(input.val() != valueCheck){
            return true;
        }
        else{
            return false;
        }
    }

    
    
    function tableUpdate() {
        $("#tableau .trRemove").remove();
        allStudients.forEach(element => $("#tableau").append("<tr class='trRemove'><td align='left'>" + element[0] + "</td><td class='trRemove' >" + element[1] + "</td><td class='trRemove'>" + element[2] + "</td></tr>"))

    }

    

    function valueReset() {

        studient = [];
        $("#firstName").val('');
        $("#name").val('');
        parseInt($("#mean").val(0));
    }

    function meanClass(){

        var meanNote = mean.reduce((previousValue, currentValue) => previousValue + currentValue, 0);

        return meanNote / mean.length;

    }

});