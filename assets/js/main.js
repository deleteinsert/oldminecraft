var updateStats = function() {
    if (!isNaN(totalUsersRate) && !isNaN(paidUsersRate) && totalUsersRate > 0 && paidUsersRate > 0) {
        totalUsers += totalUsersRate;
        paidUsers += paidUsersRate;

        countTo($('.total_users'),addThousandSeparator(parseInt(totalUsers)));
        countTo($('.paid_users'),addThousandSeparator(parseInt(paidUsers)));
    } else {
        return false;
    }
}

var dropdownMenuItem = 0;
var dropdownCloseTimer = 0;
var dropdownOpen = function() {
    dropdownCancelTimer();
    dropdownClose();
    dropdownMenuItem = $(this).find('ul').show();
}

var dropdownClose = function() {
    if (dropdownMenuItem.length > 0) {
        $(dropdownMenuItem[0]).hide();
    }
}

var dropdownTimer = function() {
    dropdownCloseTimer = window.setTimeout(dropdownClose, 500);
}

var dropdownCancelTimer = function() {
    window.clearTimeout(dropdownCloseTimer);
    dropdownCloseTimer = null;
}

var tees = [
{
    'name':"Three Creeper Moon (Men)",
    'image':"Jinx-Men-Three_Creeper_Moon.png",
    'url':"http://web.archive.org/web/20110930204821/http://www.jinx.com/p/minecraft_three_creeper_moon_premium_tee.html?catid=&cs=1&csd=&preview=1&s=minecraft"
},
{
    'name':"Creeper Inside (Men)",
    'image':"Jinx-Men-Creeper_Inside.png",
    'url':"http://web.archive.org/web/20110930204821/http://www.jinx.com/p/minecraft_creeper_inside_premium_tee.html?catid=&cs=1&csd=&preview=1&s=minecraft"
},
{
    'name':"Creeper (Men)",
    'image':"ThinkGeek-Men-Creeper.png",
    'url':"http://web.archive.org/web/20110930204821/http://www.thinkgeek.com/tshirts-apparel/unisex/gaming/e71d/"
},
{
    'name':"Creeper Anatomy (Men)",
    'image':"Jinx-Men-Creeper_Anatomy.png",
    'url':"http://web.archive.org/web/20110930204821/http://www.jinx.com/p/minecraft_creeper_anatomy_premium_tee.html?catid=&cs=1&csd=&preview=1&s=minecraft"
},
{
    'name':"Diamonds (Men)",
    'image':"Jinx-Men-Diamonds.png",
    'url':"http://web.archive.org/web/20110930204821/http://www.jinx.com/p/minecraft_diamond_crafting_premium_tee.html?catid=&cs=1&csd=&preview=1&s=minecraft"
},
{
    'name':"Drop it Creep (Men)",
    'image':"Jinx-Men-Drop_It_Creep.png",
    'url':"http://web.archive.org/web/20110930204821/http://www.jinx.com/p/minecraft_drop_it_creep_premium_tee.html?catid=&cs=1&csd=&preview=1&s=minecraft"
},
{
    'name':"I Porkchop Minecraft (Men)",
    'image':"Jinx-Men-I_Porkchop_Minecraft.png",
    'url':"http://web.archive.org/web/20110930204821/http://www.jinx.com/p/minecraft_i_porkchop_minecraft_premium_tee.html?catid=&cs=1&csd=&preview=1&s=minecraft"
},
{
    'name':"Creepers Gonna Creep (Men)",
    'image':"Jinx-Men-Creeper_Gonna_Creep.png",
    'url':"http://web.archive.org/web/20110930204821/http://www.jinx.com/p/minecraft_creepers_gonna_creep_premium_tee.html?catid=&cs=1&csd=&preview=1&s=minecraft"
},
{
    'name':"Minecraft Logo (Men)",
    'image':"Jinx-Men-Minecraft.png",
    'url':"http://web.archive.org/web/20110930204821/http://www.jinx.com/p/minecraft_logo_premium_tee.html?catid=&cs=1&csd=&preview=1&s=minecraft"
},
{
    'name':"One More Block (Men)",
    'image':"Jinx-Men-OneMoreBlock.png",
    'url':"http://web.archive.org/web/20110930204821/http://www.jinx.com/p/minecraft_one_more_block_premium_tee.html?catid=&cs=1&csd=&preview=1&s=minecraft"
},
{
    'name':"Periodic Table (Men)",
    'image':"Jinx-Men-Periodic_Table.png",
    'url':"http://web.archive.org/web/20110930204821/http://www.jinx.com/p/minecraft_periodic_table_premium_tee.html?catid=&cs=1&csd=&preview=1&s=minecraft"
},
{
    'name':"Live in Your World (Men)",
    'image':"Jinx-Men-Play_In_Mines.png",
    'url':"http://web.archive.org/web/20110930204821/http://www.jinx.com/p/minecraft_live_in_your_world_premium_tee.html?catid=&cs=1&csd=&preview=1&s=minecraft"
},
{
    'name':"Powered by Redstone (Men)",
    'image':"Jinx-Men-Powered_By_Redstone.png",
    'url':"http://web.archive.org/web/20110930204821/http://www.jinx.com/p/minecraft_powered_by_redstone_premium_tee.html?catid=&cs=1&csd=&preview=1&s=minecraft"
},{
    'name':"Creeper Inside (Hoodie)",
    'image':"Jinx-Hoodie-Creeper_Inside.png",
    'url':"http://web.archive.org/web/20110930204821/http://www.jinx.com/p/minecraft_creeper_inside_hoodie.html?catid=&cs=1&csd=&preview=1&s=minecraft"
},
{
    'name':"Retro Creeper (Men)",
    'image':"Jinx-Men-Retro_Creeper.png",
    'url':"http://web.archive.org/web/20110930204821/http://www.jinx.com/p/minecraft_retro_creeper_premium_tee.html?catid=&cs=1&csd=&preview=1&s=minecraft"
},
{
    'name':"Run Away (Men)",
    'image':"Jinx-Men-Run_Away.png",
    'url':"http://web.archive.org/web/20110930204821/http://www.jinx.com/p/minecraft_run_away_premium_tee.html?catid=&cs=1&csd=&preview=1&s=minecraft"
},
{
    'name':"Drop it Creep (Women)",
    'image':"Jinx-Women_Drop_It_Creep.png",
    'url':"http://web.archive.org/web/20110930204821/http://www.jinx.com/p/minecraft_drop_it_creep_womens_tee.html?catid=&cs=1&csd=&preview=1&s=minecraft"
},
{
    'name':"Creeper Anatomy (Women)",
    'image':"Jinx-Women-Creeper_Anatomy.png",
    'url':"http://web.archive.org/web/20110930204821/http://www.jinx.com/p/minecraft_creeper_anatomy_womens_tee.html?catid=&cs=1&csd=&preview=1&s=minecraft"
},
{
    'name':"Creeper Inside (Women)",
    'image':"Jinx-Women-Creeper_Inside.png",
    'url':"http://web.archive.org/web/20110930204821/http://www.jinx.com/p/minecraft_creeper_inside_womens_tee.html?catid=&cs=1&csd=&preview=1&s=minecraft"
},
{
    'name':"Creepers Gonna Creep (Women)",
    'image':"Jinx-Women-Creepers_Gonna_Creep.png",
    'url':"http://web.archive.org/web/20110930204821/http://www.jinx.com/p/minecraft_creepers_gonna_creep_womens_tee.html?catid=&cs=1&csd=&preview=1&s=minecraft"
},
{
    'name':"Diamonds (Women)",
    'image':"Jinx-Women-Diamonds.png",
    'url':"http://web.archive.org/web/20110930204821/http://www.jinx.com/p/minecraft_diamond_crafting_womens_tee.html?catid=&cs=1&csd=&preview=1&s=minecraft"
},
{
    'name':"I Porkchop Minecraft (Women)",
    'image':"Jinx-Women-I_Porkchop_Women.png",
    'url':"http://web.archive.org/web/20110930204821/http://www.jinx.com/p/minecraft_i_porkchop_minecraft_womens_tee.html?catid=&cs=1&csd=&preview=1&s=minecraft"
},
{
    'name':"Minecraft Logo (Women)",
    'image':"Jinx-Women-Minecraft.png",
    'url':"http://web.archive.org/web/20110930204821/http://www.jinx.com/p/minecraft_logo_womens_tee.html?catid=&cs=1&csd=&preview=1&s=minecraft"
},
{
    'name':"World of Minecraft (Men)",
    'image':"ThinkGeek-Men-World_of_Minecraft.png",
    'url':"http://web.archive.org/web/20110930204821/http://www.thinkgeek.com/tshirts-apparel/unisex/gaming/e76c/"
},
{
    'name':"Creeper (Women)",
    'image':"ThinkGeek-Women-Creeper.png",
    'url':"http://web.archive.org/web/20110930204821/http://www.thinkgeek.com/tshirts-apparel/womens/e76b/"
},
{
    'name':"One More Block (Women)",
    'image':"Jinx-Women-One_More_Block.png",
    'url':"http://web.archive.org/web/20110930204821/http://www.jinx.com/p/minecraft_one_more_block_womens_tee.html?catid=&cs=1&csd=&preview=1&s=minecraft"
},
{
    'name':"Periodic Table (Women)",
    'image':"Jinx-Women-Periodic_Table.png",
    'url':"http://web.archive.org/web/20110930204821/http://www.jinx.com/p/minecraft_periodic_table_womens_tee.html?catid=&cs=1&csd=&preview=1&s=minecraft"
},
{
    'name':"Minecraft Union (Men)",
    'image':"ThinkGeek-Men-Union.png",
    'url':"http://web.archive.org/web/20110930204821/http://www.thinkgeek.com/tshirts-apparel/unisex/gaming/e713/"
},
{
    'name':"Live in Your World (Women)",
    'image':"Jinx-Women-Play_In_Mines.png",
    'url':"http://web.archive.org/web/20110930204821/http://www.jinx.com/p/minecraft_live_in_your_world_womens_tee.html?catid=&cs=1&csd=&preview=1&s=minecraft"
},
{
    'name':"Powered by Redstone (Women)",
    'image':"Jinx-Women-Powered_By_Redstone.png",
    'url':"http://web.archive.org/web/20110930204821/http://www.jinx.com/p/minecraft_powered_by_redstone_womens_tee.html?catid=&cs=1&csd=&preview=1&s=minecraft"
},
{
    'name':"Retro Creeper (Women)",
    'image':"Jinx-Women-Retro_Creeper.png",
    'url':"http://web.archive.org/web/20110930204821/http://www.jinx.com/p/minecraft_retro_creeper_womens_tee.html?catid=&cs=1&csd=&preview=1&s=minecraft"
},
{
    'name':"Run Away (Women)",
    'image':"Jinx-Women-Run_Away.png",
    'url':"http://web.archive.org/web/20110930204821/http://www.jinx.com/p/minecraft_run_away_womens_tee.html?catid=&cs=1&csd=&preview=1&s=minecraft"
},
{
    'name':"Three Creeper Moon (Women)",
    'image':"Jinx-Women-Three_Creeper_Moon.png",
    'url':"http://web.archive.org/web/20110930204821/http://www.jinx.com/p/minecraft_three_creeper_moon_womens_tee.html?catid=&cs=1&csd=&preview=1&s=minecraft"
},
{
    'name':"Creeper (Creeper)",
    'image':"ThinkGeek-Creeper-Creeper.png",
    'url':"http://web.archive.org/web/20110930204821/http://www.thinkgeek.com/tshirts-apparel/kids/e758/"
},
{
    'name':"Creeper (Kids)",
    'image':"ThinkGeek-Kids-Creeper.png",
    'url':"http://web.archive.org/web/20110930204821/http://www.thinkgeek.com/tshirts-apparel/kids/e76a/"
},
{
    'name':"Confused (Men)",
    'image':"ThinkGeek-Men-Confused.png",
    'url':"http://web.archive.org/web/20110930204821/http://www.thinkgeek.com/tshirts-apparel/unisex/gaming/e849/"
}
]
var loadTees = function(el) {
    for (i in tees) {
        var tee = $('<a></a>')
        .addClass("tee")
        .attr('href', tees[i].url)
        .css('background-image', 'url(/images/store/tees/' + tees[i].image + ')')
        .text(tees[i].name)
        .appendTo(el);
        if (i % 4 == 3)
            tee.addClass('last');
    }
}

var oldCodeLength = 0;
var formatCode = function(el) {
    newVal = "";
    for(var i = 0; i < el.val().length; i++) {
        if (newVal.length >= 14) break;
        if (!el.val()[i].match(/[\s-]/))
            newVal += el.val()[i];
        if (newVal.length < 13 && (newVal.length + 1) % 5 == 0) {
            newVal += "-";
        }
    }
    el.val(newVal);
}

var countTo = function(el, val) {
    if (el.text().length != val.length) {
        el.text(val);
        el.css('width', el.width() + 'px').css('display', 'inline-block');
        return false;
    }
    var digits = el.text().split('');
    el.css('width', el.width() + 'px').css('display', 'inline-block');
    el.html("");
    var offset = new Array();
    var digitEles = new Array();
    for (i in digits) {
        var digit = $("<span></span>").text(digits[i]).appendTo(el);
        offset.push(digit.position().left);
        digitEles.push(digit);
    }
    for (i in digitEles) {
        digitEles[i].css({
            top: 0,
            left: offset[i] + "px",
            position: 'absolute'
        })
    }

    var newDigits = val.split('');
    for (i in newDigits) {
        if (newDigits[i] != digits[i]) {
            var newDigit = $('<span></span>').text(newDigits[i]).appendTo(el);
            newDigit.css({
                top: "-10px",
                left: offset[i] + "px",
                position: 'absolute'
            });
            newDigit.animate({
                top: '+=10',
                opacity: 1.0
            }, 200), function() {
                el.html(val)
            };
            digitEles[i].animate({
                top: '+=10',
                opacity: 0.0
            }, 200, function(){
                $(this).remove()
            });
        }
    }

//$($('.total_users span')[4]).animate({top: '-=15', opacity: 1.0 },500, function(){$(this).remove()});
}

var addThousandSeparator = function(nStr) {
    nStr += '';
    x = nStr.split('.');
    x1 = x[0];
    x2 = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + ',' + '$2');
    }
    return x1;
}

var loadTwitter = function() {
    $.get('/feeds/twitter', function(data) {
        var list = $("<ul></ul>");
        var tweets = JSON.parse(data).results;
        var count = 0;
        for (i in tweets) {
            if (tweets[i].text.match("^@")) continue;
            if (count >= 4) break;
            count++;
            var tweet = $("<li></li>")
            .addClass('tweet')
            .html('<div class="message">' + tweets[i].text.replace(new RegExp('(https?://\\S+)', 'g'), '<a href="$1">$1</a>').replace(new RegExp('@([\\w]+)', 'g'), '<a href="https://twitter.com/#!/$1">@$1</a>') + '</div><a class="timestamp" href="http://twitter.com/#!/notch/status/' + tweets[i].id_str + '">' + $.timeago(tweets[i].created_at) + '</a>')
            .appendTo(list);
        }
        $('#twitter div').html("").append(list);
    });
}

var loadFacebook = function() {
    $('#facebook .fbarea').html('<iframe src="https://www.facebook.com/plugins/likebox.php?href=http%3A%2F%2Fwww.facebook.com%2Fminecraft&amp;width=300&amp;colorscheme=dark&amp;connections=10&amp;stream=false&amp;header=false&amp;height=255" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:300px; height:255px;" allowTransparency="true"></iframe>');
}

var loadTumblr = function() {
    $.get('/feeds/tumblr.html', function(data) {
        var posts = JSON.parse(data).posts;
        var list = $("<ul></ul>");
        for (i in posts) {
            if (list.children(".tumblr").length >= 5) break;
            if (posts[i]['regular-title']) {
                var post = $("<li></li>")
                .addClass('tumblr')
                .html('<a class="title" href="' + posts[i]['url-with-slug'] + '">' + posts[i]['regular-title'] + '</a><div class="timestamp">' + $.timeago(posts[i].date) + '</div>')
                .appendTo(list);
            }
        }
        $('#tumblr div').html("").append(list);
    });
}

var loggedOut = function() {
    $('#userbox .logged-out').show();
    $('#userbox .logged-in').html('').hide();
}

var loggedIn = function(payload) {
    if (app.debug) {
        window.log(payload);
    }
    var user = payload.user;

    $('#userbox .logged-out').hide();
    $('#userbox .logged-in').html('Logged in as ' + user.name + ' | <a href="/logout" id="logout-link">Log out</a>').show();
    $('#logout-link').click(function(event) {
        event.preventDefault();
        $.ajax({
            url: "/session",
            type: "DELETE"
        });
        $.postMessage('logout', accountServiceAddress, $("#iframe iframe")[0].contentWindow);
        return false;
    });

    $.ajax({
        url: "/session",
        type: "PUT",
        data: JSON.stringify(payload)
    });
}

var setPaymentMethod = function(method) {
    $("#payment-method").val(method);
    $('#payment-method-debug').text(method);

    updateTotalSum();

    if (method == "paypal") {
        $('#provider').val("paypal");
    } else {
        $('#provider').val("moneybookers");
    }
}

var updatePaymentMethodList = function() {
    var country = $("#country")[0].value;
    $('.payment-method').hide();
    $('.payment-method-all').show();
    $('.payment-method-' + country).show();
}

var oc = function(a)
{
    var o = {};
    for(var i=0;i<a.length;i++)
    {
        o[a[i]]='';
    }
    return o;
}

var updateTotalSum = function() {
    var country = $("#country")[0].value;
    var usdCountries = ['US', 'VG', 'EC', 'CA', 'SV', 'MH', 'FM', 'PW', 'PA', 'KH', 'LB', 'LR', 'ZW', 'MX'];
    var gbpCountries = ['GB', 'IM', 'AQ', 'GI'];
    if ($("#payment-method").val() == "paypal") {
        $(".totalsum").text("€" + priceEUR);
        $(".totalsum-fullprice").first().text("€" + priceEURFull);
    } else if (country in oc(gbpCountries)) {
        $(".totalsum").text("£" + priceGBP);
        $(".totalsum-fullprice").first().text("about £" + priceGBPFull);
        $('#order-amount').val(priceGBP);
        $('#order-currency').val("GBP");
    } else if(country in oc(usdCountries)) {
        $(".totalsum").text("$" + priceUSD);
        $(".totalsum-fullprice").first().text("about $" + priceUSDFull);
        $('#order-amount').val(priceUSD);
        $('#order-currency').val("USD");
    } else {
        $(".totalsum").text("€" + priceEUR);
        $(".totalsum-fullprice").first().text("€" + priceEURFull);
        $('#order-amount').val(priceEUR);
        $('#order-currency').val("EUR");
    }
}

var updatePayToEmail = function() {
    var currency = $('#order-currency').val();
    $('#pay-to-email').val('payments.' + currency.toLowerCase() + '@mojang.com');
}

$(document).ready(function() {

    /*   $.receiveMessage(function(e){
        if (e.data.length > 0) {
            data = JSON.parse(e.data);
            if (data.payload == "unauthorized" || data.event == "loggedout") {
                loggedOut();
            } else if (data.event == "loggedin") {
                loggedIn(data.payload);
                //                app.setLocation("/");
                window.location = "/";
            } else if (data.event == "getsession") {
                $.post("/session", JSON.stringify(data.payload))
                .success(function(data, textStatus, jqXHR) {
                    if (data == "unauthorized") {
                        $.postMessage('logout', accountServiceAddress, $("#iframe iframe")[0].contentWindow);
                        loggedOut();
                    } else {
                        loggedIn(data);
                    }
                })
                .error(function() {
                    loggedOut();
                })
            }
        }
    }, accountServiceAddress);
     */
    //app.bind('changed', function(e, data) {
    //        var method = app.last_location[0];
    //        var location = app.last_location[1];
    var location = window.location.pathname;

    // On every 'changed'
    /*if($("#iframe iframe")[0] == undefined) {
            $.get('/session', function(data) {
                mojangReq = data;
                src = accountServiceAddress + '/remote?' + mojangReq + '#' + encodeURIComponent( document.location.href );
                iframe = $('<iframe>')
                .attr('src', src)
                .attr('width', 0)
                .attr('height', 0)
                .attr('style', "display:none;");
                $('#iframe').html(iframe);
            })
        }*/
    var mainclasses = $('#main').attr('class').split(' ');
    for(var i = 0; i < mainclasses.length; i++) {
        var mainclass = mainclasses[i];
        if (mainclass.match(/(path_|verb_)/)) {
            $('#main').removeClass(mainclass);
        }
    }
    $('#main').addClass("path_" + location.toString().replace(/[^0-9a-zA-Z]/g, ""));
    //        $('#main').addClass("verb_" + app.last_route.verb);

    $('#menu > li').bind('mouseover', dropdownOpen);
    $('#menu > li').bind('mouseout', dropdownTimer);

    // Specific locations
    if (location == "/") {
        loadFacebook();
        loadTwitter();
        loadTumblr();
        if (justRegistered) {
            _gaq.push(['_trackEvent', 'account', 'registration']);
        }
        var statsTicker = window.setInterval(updateStats, 1000);
    } else if (location == "/game") {

    } else if (location == "/login") {
    /*$('#loginForm').submit(function(event) {
                event.preventDefault();
                $.post("/session/new", {
                    authenticityToken: $('#loginForm input[name=authenticityToken]').attr('value'),
                    username: $('#loginForm #username').attr('value'),
                    password: $('#loginForm #password').attr('value'),
                    remember: $('#loginForm #remember').is(':checked')
                }, function(data) {
                    $.postMessage(JSON.stringify(data), accountServiceAddress, $("#iframe iframe")[0].contentWindow);
                });
                return false;
            })*/
    } else if (location == "/download") {
        $('#platform-all').click(function(event) {
            event.preventDefault();
            $('.platform').show();
            $(this).remove();
            return false;
        });
        if (operating_system) {
            $('#platform-' + operating_system).show();
        } else {
            $('.platform').show();
        }
    } else if (location == "/classic/list") {
        var durToTime = function(dur) {
            var regex = /(\d+)([dhms])/;
            var match = regex.exec(dur);
            var type = match[2];
            if (type == "s") {
                return match[1];
            } else if (type == "m") {
                return match[1] * 60;
            } else if (type == "h") {
                return match[1] * 60 * 60;
            } else if (type == "d") {
                return match[1] * 60 * 60 * 24;
            }
        }
        $.fn.dataTableExt.oSort['duration-asc']  = function(x,y) {
            return ((durToTime(x) < durToTime(y)) ? -1 : ((durToTime(x) > durToTime(y)) ? 1 : 0));
        };

        $.fn.dataTableExt.oSort['duration-desc'] = function(x,y) {
            return ((durToTime(x) < durToTime(y)) ? 1 : ((durToTime(x) > durToTime(y)) ? -1 : 0));
        };
        $('#servers').dataTable({
            "aaSorting": [[ 3, "desc" ]],
            "aoColumns": [
            null,
            null,
            null,
            {
                "sType": "duration"
            },
            null
            ]
        });
    } else if (location == "/store/game" || location == "/store/gift") {
        updatePaymentMethodList();
        updateTotalSum();
        updatePayToEmail();

        _gaq.push(['_trackEvent', 'purchase', 'product_view', storeItem]);

        $('#paypal-form').hide();

        $('.payment-method').each(function() {
            var method = $(this)[0];
            var methodName = method.id.replace("payment-method-","");
            $(method).html('<input type="radio" name="method-radio" value="' + methodName + '" />');
            if (methodName == "") return;
            $(method).css('background-image','url(/images/payment/' + methodName + '.png)');
        });

        $(".payment-method").mouseup(function(e) {
            var method = e.currentTarget.id.replace("payment-method-","");
            $($($(e.currentTarget)[0]).children('input[type=radio]')[0]).attr('checked', true);
            setPaymentMethod(method);
        });

        $('#country').change(function() {
            updatePaymentMethodList();
            updateTotalSum();
            updatePayToEmail();
        });
    } else if (location == "/store/purchase") {
        $('#purchaseform').submit();
    } else if (location == "/user/redeem") {
        $('#redeemForm #code').keyup(function(event) {
            if($('#redeemForm #code').val().length != oldCodeLength) {
                formatCode($('#redeemForm #code'));
                oldCodeLength = $('#redeemForm #code').val().length;
            }
        });
    } else if (location == "/store") {
        updateTotalSum();
        loadTees($('#tees'));
    } else if (location == "/store/success" && storeItem) {
        _gaq.push(['_trackEvent', 'purchase', 'complete', storeItem, 14.95]);
    }
//});
});


/*
     FILE ARCHIVED ON 20:48:21 Sep 30, 2011 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 15:11:12 Aug 31, 2019.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  PetaboxLoader3.datanode: 43.791 (4)
  exclusion.robots.policy: 0.142
  LoadShardBlock: 105.144 (3)
  exclusion.robots: 0.153
  esindex: 0.022
  load_resource: 40.905
  CDXLines.iter: 13.356 (3)
  RedisCDXSource: 1.917
  captures_list: 128.105
  PetaboxLoader3.resolve: 97.398 (3)
*/