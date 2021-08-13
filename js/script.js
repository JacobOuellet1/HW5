class Gamestate {
    constructor() {
        this.ScrabbleTiles = [] ;
        this.ScrabbleTiles["A"] = {value : 1, totalAmount : 9, currentAmount : 9, img : "img/Scrabble_Tiles/Scrabble_Tile_A.jpg"};
        this.ScrabbleTiles["B"] = {value : 3, totalAmount : 2, currentAmount : 2, img : "img/Scrabble_Tiles/Scrabble_Tile_B.jpg"};
        this.ScrabbleTiles["C"] = {value : 3, totalAmount : 2, currentAmount : 2, img : "img/Scrabble_Tiles/Scrabble_Tile_C.jpg"};
        this.ScrabbleTiles["D"] = {value : 2, totalAmount : 4, currentAmount : 4, img : "img/Scrabble_Tiles/Scrabble_Tile_D.jpg"};
        this.ScrabbleTiles["E"] = {value : 1, totalAmount : 12,currentAmount : 12,img : "img/Scrabble_Tiles/Scrabble_Tile_E.jpg"};
        this.ScrabbleTiles["F"] = {value : 4, totalAmount : 2, currentAmount : 2, img : "img/Scrabble_Tiles/Scrabble_Tile_F.jpg"};
        this.ScrabbleTiles["G"] = {value : 2, totalAmount : 3, currentAmount : 3, img : "img/Scrabble_Tiles/Scrabble_Tile_G.jpg"};
        this.ScrabbleTiles["H"] = {value : 4, totalAmount : 2, currentAmount : 2, img : "img/Scrabble_Tiles/Scrabble_Tile_H.jpg"};
        this.ScrabbleTiles["I"] = {value : 1, totalAmount : 9, currentAmount : 9, img : "img/Scrabble_Tiles/Scrabble_Tile_I.jpg"};
        this.ScrabbleTiles["J"] = {value : 8, totalAmount : 1, currentAmount : 1, img : "img/Scrabble_Tiles/Scrabble_Tile_J.jpg"};
        this.ScrabbleTiles["K"] = {value : 5, totalAmount : 1, currentAmount : 1, img : "img/Scrabble_Tiles/Scrabble_Tile_K.jpg"};
        this.ScrabbleTiles["L"] = {value : 1, totalAmount : 4, currentAmount : 4, img : "img/Scrabble_Tiles/Scrabble_Tile_L.jpg"};
        this.ScrabbleTiles["M"] = {value : 3, totalAmount : 2, currentAmount : 2, img : "img/Scrabble_Tiles/Scrabble_Tile_M.jpg"};
        this.ScrabbleTiles["N"] = {value : 1, totalAmount : 6, currentAmount : 6, img : "img/Scrabble_Tiles/Scrabble_Tile_N.jpg"};
        this.ScrabbleTiles["O"] = {value : 1, totalAmount : 8, currentAmount : 8, img : "img/Scrabble_Tiles/Scrabble_Tile_O.jpg"};
        this.ScrabbleTiles["P"] = {value : 3, totalAmount : 2, currentAmount : 2, img : "img/Scrabble_Tiles/Scrabble_Tile_P.jpg"};
        this.ScrabbleTiles["Q"] = {value : 10,totalAmount : 1, currentAmount : 1, img : "img/Scrabble_Tiles/Scrabble_Tile_Q.jpg"};
        this.ScrabbleTiles["R"] = {value : 1, totalAmount : 6, currentAmount : 6, img : "img/Scrabble_Tiles/Scrabble_Tile_R.jpg"};
        this.ScrabbleTiles["S"] = {value : 1, totalAmount : 4, currentAmount : 4, img : "img/Scrabble_Tiles/Scrabble_Tile_S.jpg"};
        this.ScrabbleTiles["T"] = {value : 1, totalAmount : 6, currentAmount : 6, img : "img/Scrabble_Tiles/Scrabble_Tile_T.jpg"};
        this.ScrabbleTiles["U"] = {value : 1, totalAmount : 4, currentAmount : 4, img : "img/Scrabble_Tiles/Scrabble_Tile_U.jpg"};
        this.ScrabbleTiles["V"] = {value : 4, totalAmount : 2, currentAmount : 2, img : "img/Scrabble_Tiles/Scrabble_Tile_V.jpg"};
        this.ScrabbleTiles["W"] = {value : 4, totalAmount : 2, currentAmount : 2, img : "img/Scrabble_Tiles/Scrabble_Tile_W.jpg"};
        this.ScrabbleTiles["X"] = {value : 8, totalAmount : 1, currentAmount : 1, img : "img/Scrabble_Tiles/Scrabble_Tile_X.jpg"};
        this.ScrabbleTiles["Y"] = {value : 4, totalAmount : 2, currentAmount : 2, img : "img/Scrabble_Tiles/Scrabble_Tile_Y.jpg"};
        this.ScrabbleTiles["Z"] = {value : 10,totalAmount : 1, currentAmount : 1, img : "img/Scrabble_Tiles/Scrabble_Tile_Z.jpg"};
        this.ScrabbleTiles["_"] = {value : 0, totalAmount : 2, currentAmount : 2, img : "img/Scrabble_Tiles/Scrabble_Tile_Blank.jpg"};
        this.letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "_"];
        this.score = 0;
        this.tilesLeft = 100;
        this.double_word_index = ["false", "false", "true", "false", "false", "false", "false"];
        this.double_letter_index = ["false", "false", "false", "false", "false", "false", "true"];
    }
    validWord(word){
        var double_word = false;
        var score = this.score;
        for(var i = 0; i < word.length; i++){
            if(word[i] != " "){
                if(this.double_word_index[i] == "true"){
                    double_word = true;
                    score += this.getScore(word[i]);
                } else if(this.double_letter_index[i] == "true"){
                    score += (this.getScore(word[i]) * 2);
                } else {
                    score += this.getScore(word[i]);
                }
            }
        }
        if(double_word){
            score = score * 2;
        }
        this.score = score;
        return score;
    }
    getScore(letter){
        return this.ScrabbleTiles[letter].value;
    }
    tilesRemaining(){
        var amount = 0
        for(var i = 0; i < (this.letters).length; i++){
            amount += (this.ScrabbleTiles[this.letters[i]])["currentAmount"];
        }
        return amount;
    }

    getImage(letter){
        return this.ScrabbleTiles[letter].img;
    }

    getRandom(amount=7){
        var tiles = [];
        if (amount > 7 || amount <= 0){
            console.log("Amount error")
            return NaN;
        }
        var tiles_left = this.tilesRemaining();
            
        if(tiles_left <= amount){  // asking for more tiles or same amount than there are remaining tiles (e.g. not random anymore becuase its all the tiles we have left)
            for(var i = 0; i < (this.letters).length; i++){   // for each of the remaining letters get each letter
                number_of_letters = (this.ScrabbleTiles[this.letters[i]])["currentAmount"]; // if there is a remaining amount of letters add them to the array
                for(var x = number_of_letters; x > 0; x--){ // add them to array until its empty
                    tiles.push(this.letters[i]);
                    (this.ScrabbleTiles[this.letters[i]])["currentAmount"] -= 1;
                }
            }
            this.tilesLeft = this.tilesRemaining();
        }
        else{   // we are asking for less tiles than there are remaining tiles so it needs to be random
            var rand;
            for(var i = 0; i < amount; i++){
                rand = Math.floor(Math.random() * 27);
                var obj = this.ScrabbleTiles[this.letters[rand]];
                while(obj["currentAmount"] <= 0){ //get new number if empty
                    rand = Math.floor(Math.random() * 27);
                    obj = this.ScrabbleTiles[this.letters[rand]]
                }
                (this.ScrabbleTiles[this.letters[rand]])["currentAmount"] -= 1;
                tiles.push(this.letters[rand]);
            }
            this.tilesLeft = this.tilesRemaining();
        }
        return tiles;
    }
}

$( function() {
    $('.drop_box').droppable({
        tolerance: 'intersect',
        classes: {
            "ui-droppable-active": "ui-state-active",
            "ui-droppable-hover": "ui-state-hover"
        },
        accept : function(draggable){
            if (!$(this).hasClass('dropped') || draggable.hasClass('dropped')){
                return true;
            }
            return false;
        },
        drop : function(event, ui) {
            $(this).addClass('dropped');
            ui.draggable.addClass('dropped');
            var letter = ui.draggable.attr("data-letter")
            $(this).attr("data-letter", letter)
            var drop_p = $(this).offset();
            var drag_p = ui.draggable.offset();
            var left_end = drop_p.left - drag_p.left;
            var top_end = drop_p.top - drag_p.top;
            ui.draggable.animate({
                top: '+=' + top_end,
                left: '+=' + left_end
            });

            // if its a blank ask what it should be
            var letter = ui.draggable.attr("data-letter");
            if(letter == "_"){
                $(".blank_choice").each(function(index){
                    $(this).css("display", "inline-block");
                    $(this).css("z-index", "50");
               })
                $(".block").css("z-index", "50");
                $(".block").css("display", "block");                
            }
        },
        out: function( event, ui ){
            $(this).removeClass('dropped');
            $(this).removeAttr("data-letter");
            if($(this).attr("data-chosen-letter") != undefined){
                $(this).removeAttr("data-chosen-letter");
            }
            ui.draggable.removeClass('dropped');
        }
    });
    $('.shelf').droppable({
        tolerance: 'intersect',
        classes: {
            "ui-droppable-active": "ui-state-active",
            "ui-droppable-hover": "ui-state-hover"
        },
        accept : function(draggable){
            if (!$(this).hasClass('dropped') || draggable.hasClass('dropped')){
                return true;
            }
            return false;
        },
        drop : function(event, ui) {
            $(this).addClass('dropped');
            ui.draggable.addClass('dropped');
            var drop_p = $(this).offset();
            var drag_p = ui.draggable.offset();
            var left_end = drop_p.left - drag_p.left + 1;
            var top_end = drop_p.top - drag_p.top + 1;
            ui.draggable.animate({
                top: '+=' + top_end,
                left: '+=' + left_end
            });

            var letter = ui.draggable.attr("data-letter");
            if(letter == "_"){
                img = ui.draggable.find("img");
                $(img).attr("src", "img/Scrabble_Tiles/Scrabble_Tile_Blank.jpg")
            }
        },
        out: function( event, ui ){
            $(this).removeClass('dropped');
            ui.draggable.removeClass('dropped');
        }
    });
    jQuery.validator.addMethod("lettersonly", function(value, element) {
        return this.optional(element) || /^[A-Z]+$/i.test(value);
    }); 
    $("#wordValidate").validate({
        focusInvalid: false,
        rules:{
            word:{
                lettersonly: true
            }
        },
        messages:{
            // error messages for each attribute to be validated
            word:{
                lettersonly: "Word contains a space"
            }
        }
    });
    $("#check_word").button();
    $("#check_word").click(function(event){
        var word =""
        var letter = ''
        $(".drop_box").each(function(index){
            letter = $(this).attr("data-letter");
            if(letter == undefined){
                letter = " "
            }
            if(letter == "_"){
                letter = $(this).attr("data-chosen-letter");
            }
            word+=letter;
        })
        console.log(word);
        var word_score = 0;
        var leading_trailing_blanks_removed = word.replace(/^\s+|\s+$/g,"");
        var valid;
        $("#word").val(leading_trailing_blanks_removed);
        valid = $("#wordValidate").valid();
        if(!valid){
            return;
        }
        var score = game.validWord(word);
        $("#score").val(score);
        $("#tiles_left").val(game.tilesLeft)
    });

    const game = new Gamestate();
    var tiles = game.getRandom(7);
    $("#tiles_left").val(game.tilesLeft);

    $(".shelf").each(function(index){
        var pic = game.getImage(tiles[index]);
        $(this).html("<div class='drag_box' data-letter='"+ tiles[index] +"'><img src='" + pic + "' alt='"+ tiles[index] +"'></div>")
    });

    $('.drag_box').draggable({
        revert: 'invalid',
        scroll: false
    });
});


// placed at end becuase it has really tedious and repetitive code
$(function(){
    $("#A_btn").button();
    $("#B_btn").button();
    $("#C_btn").button();
    $("#D_btn").button();
    $("#E_btn").button();
    $("#F_btn").button();
    $("#G_btn").button();
    $("#H_btn").button();
    $("#I_btn").button();
    $("#J_btn").button();
    $("#K_btn").button();
    $("#L_btn").button();
    $("#M_btn").button();
    $("#N_btn").button();
    $("#O_btn").button();
    $("#P_btn").button();
    $("#Q_btn").button();
    $("#R_btn").button();
    $("#S_btn").button();
    $("#T_btn").button();
    $("#U_btn").button();
    $("#V_btn").button();
    $("#W_btn").button();
    $("#X_btn").button();
    $("#Y_btn").button();
    $("#Z_btn").button();

    $("#A_btn").click(function(event){
        $(".drop_box").each(function(index){
            var letter = $(this).attr("data-letter");
            var attr = $(this).attr("data-chosen-letter");
            if(letter == "_" && attr == undefined){
                $(this).attr("data-chosen-letter", "A")
                
                var offset = $(this).offset();
                var xPos = offset.left;
                var yPos = offset.top;
                $(".drag_box").each(function(index){
                    var drag_offset = $(this).offset();
                    var drag_xPos = drag_offset.left;
                    var drag_yPos = drag_offset.top;
                    if(drag_xPos == xPos && drag_yPos == yPos){
                        var img = $(this).find("img");
                        $(img).attr("src", "img/Scrabble_Tiles/Scrabble_Tile_A.jpg");
                    }
                });
            }
        })
        $(".blank_choice").each(function(index){
            $(this).css("display", "none");
       })
        $(".block").css("display", "none");
    });
    $("#B_btn").click(function(event){
        $(".drop_box").each(function(index){
            var letter = $(this).attr("data-letter");
            var attr = $(this).attr("data-chosen-letter");
            if(letter == "_" && attr == undefined){
                $(this).attr("data-chosen-letter", "B")
                
                var offset = $(this).offset();
                var xPos = Math.floor(offset.left);
                var yPos = Math.floor(offset.top);
                $(".drag_box").each(function(index){
                    var drag_offset = $(this).offset();
                    var drag_xPos = Math.floor(drag_offset.left);
                    var drag_yPos = Math.floor(drag_offset.top);
                    if(drag_xPos == xPos && drag_yPos == yPos){
                        var img = $(this).find("img");
                        $(img).attr("src", "img/Scrabble_Tiles/Scrabble_Tile_B.jpg");
                    }
                });
            }
        })
        $(".blank_choice").each(function(index){
            $(this).css("display", "none");
       })
        $(".block").css("display", "none");
    });
    $("#C_btn").click(function(event){
        $(".drop_box").each(function(index){
            var letter = $(this).attr("data-letter");
            var attr = $(this).attr("data-chosen-letter");
            if(letter == "_" && attr == undefined){
                $(this).attr("data-chosen-letter", "C")
                
                var offset = $(this).offset();
                var xPos = Math.floor(offset.left);
                var yPos = Math.floor(offset.top);
                $(".drag_box").each(function(index){
                    var drag_offset = $(this).offset();
                    var drag_xPos = Math.floor(drag_offset.left);
                    var drag_yPos = Math.floor(drag_offset.top);
                    if(drag_xPos == xPos && drag_yPos == yPos){
                        var img = $(this).find("img");
                        $(img).attr("src", "img/Scrabble_Tiles/Scrabble_Tile_C.jpg");
                    }
                });
            }
        })
        $(".blank_choice").each(function(index){
            $(this).css("display", "none");
       })
        $(".block").css("display", "none");
    });
    $("#D_btn").click(function(event){
        $(".drop_box").each(function(index){
            var letter = $(this).attr("data-letter");
            var attr = $(this).attr("data-chosen-letter");
            if(letter == "_" && attr == undefined){
                $(this).attr("data-chosen-letter", "D")
                
                var offset = $(this).offset();
                var xPos = Math.floor(offset.left);
                var yPos = Math.floor(offset.top);
                $(".drag_box").each(function(index){
                    var drag_offset = $(this).offset();
                    var drag_xPos = Math.floor(drag_offset.left);
                    var drag_yPos = Math.floor(drag_offset.top);
                    if(drag_xPos == xPos && drag_yPos == yPos){
                        var img = $(this).find("img");
                        $(img).attr("src", "img/Scrabble_Tiles/Scrabble_Tile_D.jpg");
                    }
                });
            }
        })
        $(".blank_choice").each(function(index){
            $(this).css("display", "none");
       })
        $(".block").css("display", "none");
    });
    $("#E_btn").click(function(event){
        $(".drop_box").each(function(index){
            var letter = $(this).attr("data-letter");
            var attr = $(this).attr("data-chosen-letter");
            if(letter == "_" && attr == undefined){
                $(this).attr("data-chosen-letter", "E")
                
                var offset = $(this).offset();
                var xPos = Math.floor(offset.left);
                var yPos = Math.floor(offset.top);
                $(".drag_box").each(function(index){
                    var drag_offset = $(this).offset();
                    var drag_xPos = Math.floor(drag_offset.left);
                    var drag_yPos = Math.floor(drag_offset.top);
                    if(drag_xPos == xPos && drag_yPos == yPos){
                        var img = $(this).find("img");
                        $(img).attr("src", "img/Scrabble_Tiles/Scrabble_Tile_E.jpg");
                    }
                });
            }
        })
        $(".blank_choice").each(function(index){
            $(this).css("display", "none");
       })
        $(".block").css("display", "none");
    });
    $("#F_btn").click(function(event){
        $(".drop_box").each(function(index){
            var letter = $(this).attr("data-letter");
            var attr = $(this).attr("data-chosen-letter");
            if(letter == "_" && attr == undefined){
                $(this).attr("data-chosen-letter", "F")
                
                var offset = $(this).offset();
                var xPos = Math.floor(offset.left);
                var yPos = Math.floor(offset.top);
                $(".drag_box").each(function(index){
                    var drag_offset = $(this).offset();
                    var drag_xPos = Math.floor(drag_offset.left);
                    var drag_yPos = Math.floor(drag_offset.top);
                    if(drag_xPos == xPos && drag_yPos == yPos){
                        var img = $(this).find("img");
                        $(img).attr("src", "img/Scrabble_Tiles/Scrabble_Tile_F.jpg");
                    }
                });
            }
        })
        $(".blank_choice").each(function(index){
            $(this).css("display", "none");
       })
        $(".block").css("display", "none");
    });
    $("#G_btn").click(function(event){
        $(".drop_box").each(function(index){
            var letter = $(this).attr("data-letter");
            var attr = $(this).attr("data-chosen-letter");
            if(letter == "_" && attr == undefined){
                $(this).attr("data-chosen-letter", "G")
                
                var offset = $(this).offset();
                var xPos = Math.floor(offset.left);
                var yPos = Math.floor(offset.top);
                $(".drag_box").each(function(index){
                    var drag_offset = $(this).offset();
                    var drag_xPos = Math.floor(drag_offset.left);
                    var drag_yPos = Math.floor(drag_offset.top);
                    if(drag_xPos == xPos && drag_yPos == yPos){
                        var img = $(this).find("img");
                        $(img).attr("src", "img/Scrabble_Tiles/Scrabble_Tile_G.jpg");
                    }
                });
            }
        })
        $(".blank_choice").each(function(index){
            $(this).css("display", "none");
       })
        $(".block").css("display", "none");
    });
    $("#H_btn").click(function(event){
        $(".drop_box").each(function(index){
            var letter = $(this).attr("data-letter");
            var attr = $(this).attr("data-chosen-letter");
            if(letter == "_" && attr == undefined){
                $(this).attr("data-chosen-letter", "H")
                
                var offset = $(this).offset();
                var xPos = Math.floor(offset.left);
                var yPos = Math.floor(offset.top);
                $(".drag_box").each(function(index){
                    var drag_offset = $(this).offset();
                    var drag_xPos = Math.floor(drag_offset.left);
                    var drag_yPos = Math.floor(drag_offset.top);
                    if(drag_xPos == xPos && drag_yPos == yPos){
                        var img = $(this).find("img");
                        $(img).attr("src", "img/Scrabble_Tiles/Scrabble_Tile_H.jpg");
                    }
                });
            }
        })
        $(".blank_choice").each(function(index){
            $(this).css("display", "none");
       })
        $(".block").css("display", "none");
    });
    $("#I_btn").click(function(event){
        $(".drop_box").each(function(index){
            var letter = $(this).attr("data-letter");
            var attr = $(this).attr("data-chosen-letter");
            if(letter == "_" && attr == undefined){
                $(this).attr("data-chosen-letter", "I")
                
                var offset = $(this).offset();
                var xPos = Math.floor(offset.left);
                var yPos = Math.floor(offset.top);
                $(".drag_box").each(function(index){
                    var drag_offset = $(this).offset();
                    var drag_xPos = Math.floor(drag_offset.left);
                    var drag_yPos = Math.floor(drag_offset.top);
                    if(drag_xPos == xPos && drag_yPos == yPos){
                        var img = $(this).find("img");
                        $(img).attr("src", "img/Scrabble_Tiles/Scrabble_Tile_I.jpg");
                    }
                });
            }
        })
        $(".blank_choice").each(function(index){
            $(this).css("display", "none");
       })
        $(".block").css("display", "none");
    });
    $("#J_btn").click(function(event){
        $(".drop_box").each(function(index){
            var letter = $(this).attr("data-letter");
            var attr = $(this).attr("data-chosen-letter");
            if(letter == "_" && attr == undefined){
                $(this).attr("data-chosen-letter", "J")
                
                var offset = $(this).offset();
                var xPos = Math.floor(offset.left);
                var yPos = Math.floor(offset.top);
                $(".drag_box").each(function(index){
                    var drag_offset = $(this).offset();
                    var drag_xPos = Math.floor(drag_offset.left);
                    var drag_yPos = Math.floor(drag_offset.top);
                    if(drag_xPos == xPos && drag_yPos == yPos){
                        var img = $(this).find("img");
                        $(img).attr("src", "img/Scrabble_Tiles/Scrabble_Tile_J.jpg");
                    }
                });
            }
        })
        $(".blank_choice").each(function(index){
            $(this).css("display", "none");
       })
        $(".block").css("display", "none");
    });
    $("#K_btn").click(function(event){
        $(".drop_box").each(function(index){
            var letter = $(this).attr("data-letter");
            var attr = $(this).attr("data-chosen-letter");
            if(letter == "_" && attr == undefined){
                $(this).attr("data-chosen-letter", "K")
                
                var offset = $(this).offset();
                var xPos = Math.floor(offset.left);
                var yPos = Math.floor(offset.top);
                $(".drag_box").each(function(index){
                    var drag_offset = $(this).offset();
                    var drag_xPos = Math.floor(drag_offset.left);
                    var drag_yPos = Math.floor(drag_offset.top);
                    if(drag_xPos == xPos && drag_yPos == yPos){
                        var img = $(this).find("img");
                        $(img).attr("src", "img/Scrabble_Tiles/Scrabble_Tile_K.jpg");
                    }
                });
            }
        })
        $(".blank_choice").each(function(index){
            $(this).css("display", "none");
       })
        $(".block").css("display", "none");
    });
    $("#L_btn").click(function(event){
        $(".drop_box").each(function(index){
            var letter = $(this).attr("data-letter");
            var attr = $(this).attr("data-chosen-letter");
            if(letter == "_" && attr == undefined){
                $(this).attr("data-chosen-letter", "L")
                
                var offset = $(this).offset();
                var xPos = Math.floor(offset.left);
                var yPos = Math.floor(offset.top);
                $(".drag_box").each(function(index){
                    var drag_offset = $(this).offset();
                    var drag_xPos = Math.floor(drag_offset.left);
                    var drag_yPos = Math.floor(drag_offset.top);
                    if(drag_xPos == xPos && drag_yPos == yPos){
                        var img = $(this).find("img");
                        $(img).attr("src", "img/Scrabble_Tiles/Scrabble_Tile_L.jpg");
                    }
                });
            }
        })
        $(".blank_choice").each(function(index){
            $(this).css("display", "none");
       })
        $(".block").css("display", "none");
    });
    $("#M_btn").click(function(event){
        $(".drop_box").each(function(index){
            var letter = $(this).attr("data-letter");
            var attr = $(this).attr("data-chosen-letter");
            if(letter == "_" && attr == undefined){
                $(this).attr("data-chosen-letter", "M")
                
                var offset = $(this).offset();
                var xPos = Math.floor(offset.left);
                var yPos = Math.floor(offset.top);
                $(".drag_box").each(function(index){
                    var drag_offset = $(this).offset();
                    var drag_xPos = Math.floor(drag_offset.left);
                    var drag_yPos = Math.floor(drag_offset.top);
                    if(drag_xPos == xPos && drag_yPos == yPos){
                        var img = $(this).find("img");
                        $(img).attr("src", "img/Scrabble_Tiles/Scrabble_Tile_M.jpg");
                    }
                });
            }
        })
        $(".blank_choice").each(function(index){
            $(this).css("display", "none");
       })
        $(".block").css("display", "none");
    });
    $("#N_btn").click(function(event){
        $(".drop_box").each(function(index){
            var letter = $(this).attr("data-letter");
            var attr = $(this).attr("data-chosen-letter");
            if(letter == "_" && attr == undefined){
                $(this).attr("data-chosen-letter", "N")
                
                var offset = $(this).offset();
                var xPos = Math.floor(offset.left);
                var yPos = Math.floor(offset.top);
                $(".drag_box").each(function(index){
                    var drag_offset = $(this).offset();
                    var drag_xPos = Math.floor(drag_offset.left);
                    var drag_yPos = Math.floor(drag_offset.top);
                    if(drag_xPos == xPos && drag_yPos == yPos){
                        var img = $(this).find("img");
                        $(img).attr("src", "img/Scrabble_Tiles/Scrabble_Tile_N.jpg");
                    }
                });
            }
        })
        $(".blank_choice").each(function(index){
            $(this).css("display", "none");
       })
        $(".block").css("display", "none");
    });
    $("#O_btn").click(function(event){
        $(".drop_box").each(function(index){
            var letter = $(this).attr("data-letter");
            var attr = $(this).attr("data-chosen-letter");
            if(letter == "_" && attr == undefined){
                $(this).attr("data-chosen-letter", "O")
                
                var offset = $(this).offset();
                var xPos = Math.floor(offset.left);
                var yPos = Math.floor(offset.top);
                $(".drag_box").each(function(index){
                    var drag_offset = $(this).offset();
                    var drag_xPos = Math.floor(drag_offset.left);
                    var drag_yPos = Math.floor(drag_offset.top);
                    if(drag_xPos == xPos && drag_yPos == yPos){
                        var img = $(this).find("img");
                        $(img).attr("src", "img/Scrabble_Tiles/Scrabble_Tile_O.jpg");
                    }
                });
            }
        })
        $(".blank_choice").each(function(index){
            $(this).css("display", "none");
       })
        $(".block").css("display", "none");
    });
    $("#P_btn").click(function(event){
        $(".drop_box").each(function(index){
            var letter = $(this).attr("data-letter");
            var attr = $(this).attr("data-chosen-letter");
            if(letter == "_" && attr == undefined){
                $(this).attr("data-chosen-letter", "P")
                
                var offset = $(this).offset();
                var xPos = Math.floor(offset.left);
                var yPos = Math.floor(offset.top);
                $(".drag_box").each(function(index){
                    var drag_offset = $(this).offset();
                    var drag_xPos = Math.floor(drag_offset.left);
                    var drag_yPos = Math.floor(drag_offset.top);
                    if(drag_xPos == xPos && drag_yPos == yPos){
                        var img = $(this).find("img");
                        $(img).attr("src", "img/Scrabble_Tiles/Scrabble_Tile_P.jpg");
                    }
                });
            }
        })
        $(".blank_choice").each(function(index){
            $(this).css("display", "none");
       })
        $(".block").css("display", "none");
    });
    $("#Q_btn").click(function(event){
        $(".drop_box").each(function(index){
            var letter = $(this).attr("data-letter");
            var attr = $(this).attr("data-chosen-letter");
            if(letter == "_" && attr == undefined){
                $(this).attr("data-chosen-letter", "Q")
                
                var offset = $(this).offset();
                var xPos = Math.floor(offset.left);
                var yPos = Math.floor(offset.top);
                $(".drag_box").each(function(index){
                    var drag_offset = $(this).offset();
                    var drag_xPos = Math.floor(drag_offset.left);
                    var drag_yPos = Math.floor(drag_offset.top);
                    if(drag_xPos == xPos && drag_yPos == yPos){
                        var img = $(this).find("img");
                        $(img).attr("src", "img/Scrabble_Tiles/Scrabble_Tile_Q.jpg");
                    }
                });
            }
        })
        $(".blank_choice").each(function(index){
            $(this).css("display", "none");
       })
        $(".block").css("display", "none");
    });
    $("#R_btn").click(function(event){
        $(".drop_box").each(function(index){
            var letter = $(this).attr("data-letter");
            var attr = $(this).attr("data-chosen-letter");
            if(letter == "_" && attr == undefined){
                $(this).attr("data-chosen-letter", "R")
                
                var offset = $(this).offset();
                var xPos = Math.floor(offset.left);
                var yPos = Math.floor(offset.top);
                $(".drag_box").each(function(index){
                    var drag_offset = $(this).offset();
                    var drag_xPos = Math.floor(drag_offset.left);
                    var drag_yPos = Math.floor(drag_offset.top);
                    if(drag_xPos == xPos && drag_yPos == yPos){
                        var img = $(this).find("img");
                        $(img).attr("src", "img/Scrabble_Tiles/Scrabble_Tile_R.jpg");
                    }
                });
            }
        })
        $(".blank_choice").each(function(index){
            $(this).css("display", "none");
       })
        $(".block").css("display", "none");
    });
    $("#S_btn").click(function(event){
        $(".drop_box").each(function(index){
            var letter = $(this).attr("data-letter");
            var attr = $(this).attr("data-chosen-letter");
            if(letter == "_" && attr == undefined){
                $(this).attr("data-chosen-letter", "S")
                
                var offset = $(this).offset();
                var xPos = Math.floor(offset.left);
                var yPos = Math.floor(offset.top);
                $(".drag_box").each(function(index){
                    var drag_offset = $(this).offset();
                    var drag_xPos = Math.floor(drag_offset.left);
                    var drag_yPos = Math.floor(drag_offset.top);
                    if(drag_xPos == xPos && drag_yPos == yPos){
                        var img = $(this).find("img");
                        $(img).attr("src", "img/Scrabble_Tiles/Scrabble_Tile_S.jpg");
                    }
                });
            }
        })
        $(".blank_choice").each(function(index){
            $(this).css("display", "none");
       })
        $(".block").css("display", "none");
    });
    $("#T_btn").click(function(event){
        $(".drop_box").each(function(index){
            var letter = $(this).attr("data-letter");
            var attr = $(this).attr("data-chosen-letter");
            if(letter == "_" && attr == undefined){
                $(this).attr("data-chosen-letter", "T")
                
                var offset = $(this).offset();
                var xPos = Math.floor(offset.left);
                var yPos = Math.floor(offset.top);
                $(".drag_box").each(function(index){
                    var drag_offset = $(this).offset();
                    var drag_xPos = Math.floor(drag_offset.left);
                    var drag_yPos = Math.floor(drag_offset.top);
                    if(drag_xPos == xPos && drag_yPos == yPos){
                        var img = $(this).find("img");
                        $(img).attr("src", "img/Scrabble_Tiles/Scrabble_Tile_T.jpg");
                    }
                });
            }
        })
        $(".blank_choice").each(function(index){
            $(this).css("display", "none");
       })
        $(".block").css("display", "none");
    });
    $("#U_btn").click(function(event){
        $(".drop_box").each(function(index){
            var letter = $(this).attr("data-letter");
            var attr = $(this).attr("data-chosen-letter");
            if(letter == "_" && attr == undefined){
                $(this).attr("data-chosen-letter", "U")
                
                var offset = $(this).offset();
                var xPos = Math.floor(offset.left);
                var yPos = Math.floor(offset.top);
                $(".drag_box").each(function(index){
                    var drag_offset = $(this).offset();
                    var drag_xPos = Math.floor(drag_offset.left);
                    var drag_yPos = Math.floor(drag_offset.top);
                    if(drag_xPos == xPos && drag_yPos == yPos){
                        var img = $(this).find("img");
                        $(img).attr("src", "img/Scrabble_Tiles/Scrabble_Tile_U.jpg");
                    }
                });
            }
        })
        $(".blank_choice").each(function(index){
            $(this).css("display", "none");
       })
        $(".block").css("display", "none");
    });
    $("#V_btn").click(function(event){
        $(".drop_box").each(function(index){
            var letter = $(this).attr("data-letter");
            var attr = $(this).attr("data-chosen-letter");
            if(letter == "_" && attr == undefined){
                $(this).attr("data-chosen-letter", "V")
                
                var offset = $(this).offset();
                var xPos = Math.floor(offset.left);
                var yPos = Math.floor(offset.top);
                $(".drag_box").each(function(index){
                    var drag_offset = $(this).offset();
                    var drag_xPos = Math.floor(drag_offset.left);
                    var drag_yPos = Math.floor(drag_offset.top);
                    if(drag_xPos == xPos && drag_yPos == yPos){
                        var img = $(this).find("img");
                        $(img).attr("src", "img/Scrabble_Tiles/Scrabble_Tile_V.jpg");
                    }
                });
            }
        })
        $(".blank_choice").each(function(index){
            $(this).css("display", "none");
       })
        $(".block").css("display", "none");
    });
    $("#W_btn").click(function(event){
        $(".drop_box").each(function(index){
            var letter = $(this).attr("data-letter");
            var attr = $(this).attr("data-chosen-letter");
            if(letter == "_" && attr == undefined){
                $(this).attr("data-chosen-letter", "W")
                
                var offset = $(this).offset();
                var xPos = Math.floor(offset.left);
                var yPos = Math.floor(offset.top);
                $(".drag_box").each(function(index){
                    var drag_offset = $(this).offset();
                    var drag_xPos = Math.floor(drag_offset.left);
                    var drag_yPos = Math.floor(drag_offset.top);
                    if(drag_xPos == xPos && drag_yPos == yPos){
                        var img = $(this).find("img");
                        $(img).attr("src", "img/Scrabble_Tiles/Scrabble_Tile_W.jpg");
                    }
                });
            }
        })
        $(".blank_choice").each(function(index){
            $(this).css("display", "none");
       })
        $(".block").css("display", "none");
    });
    $("#X_btn").click(function(event){
        $(".drop_box").each(function(index){
            var letter = $(this).attr("data-letter");
            var attr = $(this).attr("data-chosen-letter");
            if(letter == "_" && attr == undefined){
                $(this).attr("data-chosen-letter", "X")
                
                var offset = $(this).offset();
                var xPos = Math.floor(offset.left);
                var yPos = Math.floor(offset.top);
                $(".drag_box").each(function(index){
                    var drag_offset = $(this).offset();
                    var drag_xPos = Math.floor(drag_offset.left);
                    var drag_yPos = Math.floor(drag_offset.top);
                    if(drag_xPos == xPos && drag_yPos == yPos){
                        var img = $(this).find("img");
                        $(img).attr("src", "img/Scrabble_Tiles/Scrabble_Tile_X.jpg");
                    }
                });
            }
        })
        $(".blank_choice").each(function(index){
            $(this).css("display", "none");
       })
        $(".block").css("display", "none");
    });
    $("#Y_btn").click(function(event){
        $(".drop_box").each(function(index){
            var letter = $(this).attr("data-letter");
            var attr = $(this).attr("data-chosen-letter");
            if(letter == "_" && attr == undefined){
                $(this).attr("data-chosen-letter", "Y")
                
                var offset = $(this).offset();
                var xPos = Math.floor(offset.left);
                var yPos = Math.floor(offset.top);
                $(".drag_box").each(function(index){
                    var drag_offset = $(this).offset();
                    var drag_xPos = Math.floor(drag_offset.left);
                    var drag_yPos = Math.floor(drag_offset.top);
                    if(drag_xPos == xPos && drag_yPos == yPos){
                        var img = $(this).find("img");
                        $(img).attr("src", "img/Scrabble_Tiles/Scrabble_Tile_Y.jpg");
                    }
                });
            }
        })
        $(".blank_choice").each(function(index){
            $(this).css("display", "none");
       })
        $(".block").css("display", "none");
    });
    $("#Z_btn").click(function(event){
        $(".drop_box").each(function(index){
            var letter = $(this).attr("data-letter");
            var attr = $(this).attr("data-chosen-letter");
            if(letter == "_" && attr == undefined){
                $(this).attr("data-chosen-letter", "Z")
                
                var offset = $(this).offset();
                var xPos = Math.floor(offset.left);
                var yPos = Math.floor(offset.top);
                $(".drag_box").each(function(index){
                    var drag_offset = $(this).offset();
                    var drag_xPos = Math.floor(drag_offset.left);
                    var drag_yPos = Math.floor(drag_offset.top);
                    if(drag_xPos == xPos && drag_yPos == yPos){
                        var img = $(this).find("img");
                        $(img).attr("src", "img/Scrabble_Tiles/Scrabble_Tile_Z.jpg");
                    }
                });
            }
        })
        $(".blank_choice").each(function(index){
            $(this).css("display", "none");
       })
        $(".block").css("display", "none");
    });
});