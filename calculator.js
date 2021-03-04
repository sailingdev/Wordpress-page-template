let H10 = 0;
let H12 = 0;
let H16 = 0;
let H20 = 0;
let D70 = 50;
let F70 = 1.85;
let D71 = 5;
let D73 = 110;
let H14 = 0;
let H18 = 0;
let M23 = 0;
let E24 = 0;
let C27 = 0;
let C38 = 0;
let D61 = 0;
let G61 = 0;
let J27 = 0;
let H31 = 0;
let H32 = 0;
let G70 = 0;
let E71 = 0;
let D72 = 0;
let E72 = 0;
let F72 = 0;
let E73 = 0;
let isPrintable = false;

var $j = jQuery.noConflict();

function fieldLoad() {
    // return Integer
    H10 = $j("#H10").val();
    H12 = $j('#H12').val();
    H16 = $j('#H16').val();
    H20 = $j('#H20').val();
    // D70 = $j('#D70').val();
    // F70 = $j('#F70').val();
    // D71 = $j('#D71').val();
    // D73 = $j('#D73').val();
    M23 = H16/(H10 == 0 ? 1: H10);
    E24 =  H10*Get_F23();
    C27 = $j('#H18 option:selected').text();
    H14 = $j('#H14 option:selected').val();
    H18 = $j('#H18 option:selected').val();  
    C38 = H20/(H18 == 1 ? 24 : 300)
    D61 = H10*(Get_F23()/100)*100;
    G61 = H16-D61;
    J27 = G61*C38;
    H31 = J27 == 0? 0 : 39.99/J27;
    H32 = J27 == 0? 0 : 28/J27;
    G70 = D70*F70;
    E71 = D70/D71;
    D72 = D71*1.85;
    E72 = D70/D72;
    F72 = E71-E72;
    E73 = D73/F72;
}

function Get_F23 (){
    if(H14 == 1){
        return 0.015;
    }
    return H14 == 2 ? 0.02 : 0.025;
}

function section_1(){
    let res =  `
    <div class="pagebreak mt-5 center" id="section_1" style="max-width: 901px;">
        <span >
            <h5 style="line-height: normal;">
                Based on your weight management goal is it recommened that you feed <strong style="color: black;">`+(Get_F23()*100).toFixed(2)+`%</strong> of your horse's body weight in hay per day. You currently feed <strong style="color: black;">`+(M23*100).toFixed(2)+`%</strong> <br>
                Based on your horse's weight you should* be feeding <strong style="color: black;">`+E24.toFixed(2)+`kg</strong> of hay per day <br>

                Based on the average weight of a Large Round Bale and the price you pay per bale, we calculate that you could save <strong style="color: black;">£`+J27.toFixed(2)+`</strong> per day on hay <br><br>

                A recent study involving the Trickle Net Original has shown an increase in consumption time of 66.4%**. <br>
                Based on the calculated daily saving, a Trickle Net Original priced at £39.99 would pay for itself in <strong style="color: black;">`+H31.toFixed(2)+`</strong> days <br>
                Based on the calculated daily saving, a Trickle Net Mini Priced at £28.00 would for pay itself in <strong style="color: black;">`+H32.toFixed(2)+`</strong> days. <br>
                Please note - Nets should be weighed talking into account the weight of the itself. A trickle Net Original weighs 1.5kg and has a capacity of approx 8kg dry hay. the Trickle net Mini weighs 0.5kg and ha a capabcity of approx 4kg dry hay.<br>
            </h5>
        </span> 
        </div>
    `;
    return res;
}

function section_2() {
    let res =  `
    <div class="text-center mt-1" id="section_2">
        <span>
        ----------- * * * ----------- <br>
            *This calcualtor should be used as a guide, however every horse is individual and there are many variables that dicate dietry requirements. <br>
            We strongly advise you seek the guidance of an independant equine nutritionist - such as Briony Witherow Practical Equine Nutrition. <br>
            **66.4% in overall consumption time compared with feeding on the floor. <br>
            <strong style="color: red;">Always consult your vet if you are concerned for your horse's health</strong> <br>              
        </span>
        </div>
    `;
    return res;
}

function section_3() {
    let res =  `
    <div class="mt-2" id="section_3">
        <span>
            <h3>Ignore below</h3>
            Based on your weight and diet goals you should feed % of horse's body weight of hay, however you currently feed <br>
            This means you should feed your horse <strong style="color: black;">`+D61.toFixed(2)+`kg</strong> of hay, which saves <strong style="color: black;">`+G61.toFixed(2)+`kg</strong> of hay per day <br>
            As you pay  per kg of hay, this is a total saving of  per day whilst keeping your horse healthy.... <br><br><br>

            A Trickle Net original would take  days to pay for itself
        </span>
        </div>
    `;
    return res;
}

function section_4() {
    let res = `
    <table class="pagebreak  center mt-2" id="section_4">
        <tr>
            <td><h4>cost of hay</h4></td>
            <td>50</td>
            <td></td>
            <td>1.85</td>
            <td>`+G70+`</td>
        </tr>
        <tr>
            <td><h4>how long does it bale last</h4></td>
            <td>5</td>
            <td>`+E71+`</td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td><h4>how long it will last with net</h4></td>
            <td>`+D72.toFixed(2)+`</td>
            <td>`+E72+`</td>
            <td>`+F72+`</td>
            <td></td>
        </tr>
        <tr>
            <td><h4>rbn</h4></td>
            <td>110</td>
            <td>`+E73+`</td>
            <td>days to pay for itself</td>
            <td></td>
        </tr>
        </table>
    `;
    return res;
}

function header(tmp_url) {
    let res = `
    <img class="calc_logo" src="`+tmp_url+`/calc_logo.png" alt="calc_logo">
    <div class="calc_title text-center">
        <h1>Forage Feeding Caclulator</h2>
    </div>
    <div class="calc_sub-title text-center">
        <h2>Welcome to the Trickle Net Forage Feeding calculator. 
            Fill in the boxes below to calculate how much forage your horse requires and find out if you could be saving money.
        </h2>
    </div>
    <div class="center" style="max-width: 901px;">
        <table class="center mt-2">
            <tr><th style="width: 701px;"></th><th></th></tr>    
            <tr>
                    <td>
                        <h2>Curent Horse's Weight(kg)</h2>
                    </td>
                    <td>
                        <input id="H10" type="text"  value="`+H10+`" />
                    </td>
                </tr>
                <tr>
                    <td >
                        <h2>Ideal Horse's Weight(kg)</h2>
                    </td>
                    <td>
                        <input id="H12" type="text" value="`+H12+`" />
                    </td>
                </tr>
                <tr>
                    <td >
                        <h2>Are you feeding for weightloss, maintenance or underweight?</h2>
                    </td>
                    <td>
                    <input type="text" value="`+ $j('#H14 option:selected').text() +`" />
                    </td>
                </tr>
                <tr>
                    <td >
                        <h2>How much hay you currently feed per day (KG)</h2>
                    </td>
                    <td>
                        <input id="H16" type="text" value="`+H16+`" />
                    </td>
                </tr>
                <tr>
                <td>
                    <h2>Do you buy hay in standard small or large round bales?</h2>
                </td> 
                <td>
                <input type="text" value="`+ $j('#H18 option:selected').text() +`" />
                </td>
                </tr>
                <tr>
                    <td><h2>How much do you pay for the bale?(£)</h2></td>
                    <td>
                        <input id="H20" type="text" value="`+H20+`"/>
                    </td>
                </tr>                
        </table>
    </div>`;
    return res;
}

function calculator(){
    fieldLoad();
    $j('#section_1').replaceWith(section_1());
    $j('#section_2').replaceWith(section_2());
    if (!isPrintable) {
        isPrintable = !isPrintable;
    }
}

function printor(tmp_url){
    if (isPrintable) {
        var mywindow = window.open('', '', 'height=900,width=1000');

        mywindow.document.write('<html><head><meta http-equiv="Content-Type" content="text/html; charset=utf-8"/><title>' + document.title  + '</title>');
        mywindow.document.write('<link rel="stylesheet" href="'+tmp_url+'/calculator.css"></head><body><div class="container center">');
        mywindow.document.write(header(tmp_url));
        mywindow.document.write(section_1());
        mywindow.document.write(section_2());
        mywindow.document.write('</div></body></html>');

        mywindow.document.close(); // necessary for IE >= 10
        mywindow.focus(); // necessary for IE >= 10*/

        setTimeout(() => {
            mywindow.print(); 
            mywindow.close();       
        }, 500);
    }
}