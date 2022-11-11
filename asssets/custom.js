$(document).ready(function(){
            
    var navbar = [ "Snapshot","Key radtio","Peers","Financial","Owernership","News","Events"];
    var card_data = { 'ISIN' :"ADV456F23G8JK",'Face value' :"98,3456 cr",'Total Share' :"98,3456 cr",'Total Income' :"1236.5 ",
    'Profit After Tax' :"123456 cr ",'Promotor Holding' :"23% ",'EPS' :"<i class='bi bi-currency-rupee'></i>42.09 ",'P/E' :"48.9",'P/B' :"3.33",
    'Market captialistaion' :"1,00,289.90 cr ",'Enterprise value' :"1,00,289.90 cr ",'Book Value' :"1,00,289.90 cr ",'Intrinsic Value' :"95,289.90 cr ",
    'devided Yield' :"95,289.90 cr ",'Earning Yield' :"95,289.90 cr ",'Sector' :"Real Estate",'Sub Sector' :"Auto Parts ",'Category' :"PrelPO ",
    'Cash Flow Operation' :"1,00,289 cr ",'Cash Flow Financing' :"1,00,289 cr "};
    let icon_details = [
                            {
                                col_id: 1,
                                col_name: "icon1.png",
                                col_data: "Management <br> Trustworthy  ",
                                
                            },
                            {
                                col_id: 2,
                                col_name: "icon2.png",
                                col_data: "Accounting Practice<br>Clean ",
                               
                            },
                            {
                                col_id: 3,
                                col_name: "icon3.png",
                                col_data: "Profitability<br>Outstanding ",
                               
                            },
                            {
                                col_id: 4,
                                col_name: "icon4.png",
                                col_data: "Solvency<br>Exceed Expectations",
                               
                            },
                            {
                                col_id: 5,
                                col_name: "icon5.png",
                                col_data: "Growth<br>Meet Expectations",
                               
                            },
                            {
                                col_id: 6,
                                col_name: "6.png",
                                col_data: "Valuation<br>Undervalued ",
                               
                            },
                            {
                                col_id: 7,
                                col_name: "icon6.png",
                                col_data: "Business Type <br>Fairly Valued  ",
                               
                            },
                            {
                                col_id: 8,
                                col_name: "icon7.png",
                                col_data: "Business Type <br>Fairly Valued",
                               
                            },
                           
                        ];
        icon_details.forEach(function(data) {
            $('.icon-gallery-show').append('<div class="col-md-6 px-1 py-2">'+
                                '<div class="bg-white rounded icon-gallery"><img src="'+data.col_name+'" alt="">'+
                                '<p>'+data.col_data+'</p></div>'+
                           ' </div>'
                );
            });                   
   
    $.each( navbar, function( index, value ) {
     $('.nab-bar-data').append('<li class="nav-items">'+value+'</li>');
    });

    $.each( card_data, function( index, value ) {
     $('.home-page-data').append('<div class="col-sm-3 home-card-data pb-2 px-2">'+
                    '<div class="card shadow"> <p class="home-info-icon" ><i  class="bi bi-info-circle-fill"></i></P>'+
                    '<div class="card-body home-info-card-body">'+
                        '<h6 class="card-title">'+index+'</h6>'+
                        '<p class="card-text">'+value+'</p>'+
                   ' </div>'+
                    '</div>'+
                '</div>'
                );
    });

    $(".nav-items").mouseover(function(){
        $(this).addClass('Snapshot , shadow');
    });
    $(".nav-items").mouseout(function(){
        $(this).removeClass('Snapshot , shadow');
    });
});