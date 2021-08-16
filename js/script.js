/*
File: script.js
GUI Assignment: Homework 5
Jacob Ouellet, UMass Lowell Computer Science, jacob_ouellet@student.uml.edu
Copyright (c) 2021 by Jacob Ouellet. All rights reserved. May be freely copied or
excerpted for educational purposes with credit to the author.
updated by Jacob Ouellet on Aug 15, 2021 at 4:57 PM
*/

// class used to store the structure for the game and information about the game
class Gamestate {
    constructor() {
        // build the structure to hold tile information
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

    // takes and valid word that has only a length of 7 where spaces not used on the board are filled with blank spaces e.g
    // the word cat could be "   cat ". It assumes the index location of the word is the same as it appears on the board.
    validWord(word){
        var double_word = false;
        var _score = 0;
        for(var i = 0; i < word.length; i++){
            if(word[i] != " "){ // if its not an unused game board space    we know its a complete word because we do validation before passing word
                if(this.double_word_index[i] == "true"){    // if its a double word space
                    double_word = true;
                    _score += this.getScore(word[i]);
                } else if(this.double_letter_index[i] == "true"){   // if its a double letter space
                    _score += (this.getScore(word[i]) * 2);
                } else {    // if its a normal space than just add the value of the letter to the score
                    _score += this.getScore(word[i]);
                }
            }
        }
        if(double_word){    // if its a double word score multiply it by 2
            _score = _score * 2;
        }
        this.score = this.score + _score;   // set the score in the structure and also return the score. 
    }
    getScore(letter){
        return this.ScrabbleTiles[letter].value;
    }

    /* internal function that goes through the data structure and counts how many tiles are left */
    _tilesRemaining(){
        var amount = 0
        for(var i = 0; i < (this.letters).length; i++){
            amount += (this.ScrabbleTiles[this.letters[i]])["currentAmount"];
        }
        return amount;
    }

    /* returns the image coresponding to the letter*/
    getImage(letter){
        return this.ScrabbleTiles[letter].img;
    }

    // gets random tiles from the tiles that are remaining. Takes value between 1 and 7
    getRandom(amount=7){
        var tiles = [];
        if (amount > 7 || amount <= 0){ // this should never be reached but it's here just incase 
            console.log("Amount error");
            return NaN;
        }
        var tiles_left = this._tilesRemaining();
            
        if(tiles_left <= amount){  // asking for more tiles or same amount than there are remaining tiles (e.g. not random anymore becuase its all the tiles we have left)
            for(var i = 0; i < (this.letters).length; i++){   // for each of the remaining letters get each letter
                var number_of_letters = (this.ScrabbleTiles[this.letters[i]])["currentAmount"]; // if there is a remaining amount of letters add them to the array
                for(var x = number_of_letters; x > 0; x--){ // add them to array until its empty
                    tiles.push(this.letters[i]);
                    (this.ScrabbleTiles[this.letters[i]])["currentAmount"] -= 1;
                }
            }
            this.tilesLeft = this._tilesRemaining(); // update the tilesLeft value with how many remain
        }
        else{   // we are asking for less tiles than there are remaining tiles so it needs to be random
            var rand;
            for(var i = 0; i < amount; i++){    // for the amount of tiles they are asking for
                rand = Math.floor(Math.random() * 27);  // generate a random number between 0 and 26    A-Z and blank
                var obj = this.ScrabbleTiles[this.letters[rand]];   // get the letter at that random number
                while(obj["currentAmount"] <= 0){ //get new number if there are no tiles left of that kind
                    rand = Math.floor(Math.random() * 27);
                    obj = this.ScrabbleTiles[this.letters[rand]];
                }
                (this.ScrabbleTiles[this.letters[rand]])["currentAmount"] -= 1; // subtract one of that tile from the structure
                tiles.push(this.letters[rand]); // add the letter of the tile to the array to be returned
            }
            this.tilesLeft = this._tilesRemaining(); // update the tilesLeft value with how many remain
        }
        return tiles;   // return list of letters to be used
    }

    // used to add letters back into the structure in the event that the user wants to pick new letters.
    // takes an array of letters e.g. ["A", "B"]
    addLetters(letters){
        for(var x = 0; x < letters.length; x++){
            (this.ScrabbleTiles[letters[x]])["currentAmount"] += 1;
        }
        this.tilesLeft = this._tilesRemaining(); // update the tilesLeft value with how many remain
    }
}

// general function used to remove a character at a specific index of a string
function remove_char_at_index(i, str){
    if(str.length == 1){    // if the length is one just return the empty string
        return "";
    } else if(i == str.length - 1){ // if the index we want to remove is the last position return substring before that index
        return str.substring(0, i);
    }else if (i == 0){ // if the index we want to remove is the first index create the substring after the first index
        return str.substring(i + 1);
    } else{ // otherwise create two substrings one after and one before the index and combine the result
        return str.substring(0, i) + str.substring(i + 1);
    }
}

// jquery code below
$( function() {

    // drop box code for drop boxes in the game space
    $('.drop_box').droppable({
        tolerance: 'intersect',
        accept : function(draggable){   // this comabts stacking two elements in one drop box. If element is in the box has dropped class or drop box doesn't
            if (!$(this).hasClass('dropped') || draggable.hasClass('dropped')){
                return true;
            }
            return false;
        },
        drop : function(event, ui) {    // if a draggable is dropped in the box
            $(this).addClass('dropped');    // add dropped class to the dropbox and the dragbox
            ui.draggable.addClass('dropped');
            var letter = ui.draggable.attr("data-letter"); // get the letter from the dragbox
            $(this).attr("data-letter", letter); // set the data-letter attribute in the dropbox
            
            // animate it so the dragbox auto aligns to the correct spot in the dropbox
            var drop_p = $(this).offset();  // get pos. of dropbox
            var drag_p = ui.draggable.offset(); // get pos. of dragbox
            var left_end = drop_p.left - drag_p.left;
            var top_end = drop_p.top - drag_p.top;
            ui.draggable.animate({  // animate the difference in position
                top: '+=' + top_end,
                left: '+=' + left_end
            });

            // if its a blank ask what it should be
            if(letter == "_"){
                $(".blank_choice").each(function(index){
                    $(this).css("display", "inline-block"); // make the display box with buttons appear
                    $(this).css("z-index", "50");
               });
                $(".block").css("z-index", "50");   // make grey background appear and block access to other elements
                $(".block").css("display", "block");                
            }
        },
        out: function( event, ui ){ // if a drag box is removed from a drop_box int he game space
            $(this).removeClass('dropped'); // remove the dropped classes
            $(this).removeAttr("data-letter");  // remove the data-letter attribute from the drop box
            if($(this).attr("data-chosen-letter") != undefined){    // if its a blank and has the data-chosen-letter attribute
                $(this).removeAttr("data-chosen-letter");
            }
            ui.draggable.removeClass('dropped');
        }
    });

    $('.shelf').droppable({ // code for the drop boxes in the shelf (nearly identical to code for drop boxes in game space)
        tolerance: 'intersect',
        accept : function(draggable){ // this comabts stacking two elements in one drop box. If element is in the box has dropped class or drop box doesn't
            if (!$(this).hasClass('dropped') || draggable.hasClass('dropped')){
                return true;
            }
            return false;
        },
        drop : function(event, ui) { // if a draggable is dropped in the box
            $(this).addClass('dropped'); // add dropped class to the dropbox and the dragbox
            ui.draggable.addClass('dropped');

            // animate the movement from the drag box to the dropbox so all tiles align
            var drop_p = $(this).offset(); // get pos. of dropbox
            var drag_p = ui.draggable.offset(); // get pos. of dragbox
            var left_end = drop_p.left - drag_p.left + 1;
            var top_end = drop_p.top - drag_p.top + 1;
            ui.draggable.animate({ // animate the difference in position
                top: '+=' + top_end,
                left: '+=' + left_end
            });

            var letter = ui.draggable.attr("data-letter");
            // if its a blank make sure to set the img back from what the user picked for a letter back to the blank img
            if(letter == "_"){
                img = ui.draggable.find("img");
                $(img).attr("src", game.getImage("_"));
            }
        },
        out: function( event, ui ){ // if a letter is dragged out of the shelf remove the dropped classes so other tiles can be palced their
            $(this).removeClass('dropped');
            ui.draggable.removeClass('dropped');
        },
    });


    // custom validator functions
    // letters only makes sure the word contains only letters not spaces
    jQuery.validator.addMethod("lettersonly", function(value, element) {
        return this.optional(element) || /^[A-Z]+$/i.test(value);
    });
    // minlength sets the minimum word length which is 2 in our case
    jQuery.validator.addMethod("minlength", function(value, element, param) {
        return this.optional(element) || value.length >= param;
    });

    // used to validate the word put into the word input box if its not valid the submit click won't continue
    $("#wordValidate").validate({
        focusInvalid: false,
        rules:{
            word:{
                lettersonly: true,
                minlength: 2
            }
        },
        messages:{
            // error messages for each attribute to be validated
            word:{
                lettersonly: "Word contains a space",
                minlength: "There must be at least 2 letters."
            }
        }
    });
    $("#check_word").button();
    $("#check_word").click(function(event){ // if checkword is clicked
        var word ="";
        var letter = '';
        $(".drop_box").each(function(index){    // for each drop box get the data-letter value
            letter = $(this).attr("data-letter");
            if(letter == undefined){    // if its an empty box just add a blank space
                letter = " ";
            }
            if(letter == "_"){  // if its a blank tile get the chosen letter attribute from the box
                letter = $(this).attr("data-chosen-letter");
            }
            word+=letter;
        });

        // get the word if it has its leading and trailing blanks removed
        var Word_leading_trailing_blanks_removed = word.replace(/^\s+|\s+$/g,"");
        if (Word_leading_trailing_blanks_removed == ""){    // if the user hits submit with no tiles in the game space just return
            return;
        }

        // place the word into the word input box on the screen and validate the word
        var valid;
        $("#word").val(Word_leading_trailing_blanks_removed);
        valid = $("#wordValidate").valid();
        if(!valid){ // if its not a valid word return
            return;
        }

        // othwerwise if its a valid word pass the word so the score can be calculated in the game state
        game.validWord(word);
        $("#score").val(game.score);    // put the score into the score input box

        // since its a valid word we need to reset the drop boxes in the game space
        $(".drop_box").each(function(index){
            $(this).removeClass('dropped');
            $(this).removeAttr("data-letter");
            if($(this).attr("data-chosen-letter") != undefined){    // if its a blank tile
                $(this).removeAttr("data-chosen-letter");
            }
        });


        // need to get the positioning of the shelf to determine what dragboxes are not on the shelf
        var shelf_pos = $("#shelf").offset();   // get the position of the shelf
        var shelf_height = $("#shelf").css("height");   // get the css height to calculate the top and bottom pos.
        shelf_height = parseInt(shelf_height.substring(0, shelf_height.length - 2)); // remove the px from pixel
        var shelf_width = $("#shelf").css("width"); // get the css height to calculate the left and right pos.
        shelf_width = parseInt(shelf_width.substring(0, shelf_width.length - 2)); // remove the px from pixel

        // calcualte the left right top and bottom pos of the shelf
        var shelf_top = shelf_pos.top;
        var shelf_bottom = shelf_top + shelf_height;
        var shelf_left = shelf_pos.left;
        var shelf_right = shelf_left + shelf_width;

        var tiles = game.getRandom(Word_leading_trailing_blanks_removed.length); //get the number of tiles played and get that number of random letter (if that many remains)
        tiles_length = tiles.length; // see if there are same amount of tiles we got back as we used (e.g. the bag of tiles ran out)
        var tiles_index = 0;
        var drag_box_left_pos = []; // place to put the left positions of each of the drag_boxes
        var drag_box_top_pos = []; // place to put the top positions of each of the drag_boxes
        $(".drag_box").each(function(){
            drag_box_left_pos.push($(this).offset().left);
            drag_box_top_pos.push($(this).offset().top);
        });

        $(".shelf").each(function(index){   // reset tiles still on the shelf to their original positions (this combats overlapping of tiles)
            if ( (drag_box_left_pos[index] <= shelf_right && drag_box_left_pos[index] >= shelf_left &&
                drag_box_top_pos[index] <= shelf_bottom && drag_box_top_pos[index] >= shelf_top)){
                // if the dragbox (tile) is still on the shel we are going to remove it and replace it back to its original position
                // also note each index of the shelf drop box corresponds to the original position of each of the drag boxes (tiles)
                var html = $(this).html();
                var tile = $(html).attr("data-letter");
                $(this).empty();    // remove the drag_box from the shelf
                var pic = game.getImage(tile);
                $(this).html("<div class='drag_box' data-letter='"+ tile +"'><img src='" + pic + "' alt='"+ tile +"'></div>");   // replace the drag box so it goes back to its origin
            }
            $(this).removeClass('dropped'); // reset each of the shelves
        });

        //now that we have reset the tiles on the shelves we can remove the ones and replace the ones that aren't with new tiles
        $('.shelf').each(function(index){
            if ( !(drag_box_left_pos[index] <= shelf_right && drag_box_left_pos[index] >= shelf_left && // if its not on the shelf
                drag_box_top_pos[index] <= shelf_bottom && drag_box_top_pos[index] >= shelf_top)){
                $(this).empty();    // remove the drag box from the shelf
                if(tiles_length > 0){   // if we have tiles remaing to replace (e.g. if we need more tiles than there are remaining than we just remove the used tiles and don't replace them)
                    var pic = game.getImage(tiles[tiles_index]);    // place a new drag box into the shelf with the new tiles we got from the game state 
                    $(this).html("<div class='drag_box' data-letter='"+ tiles[tiles_index] +"'><img src='" + pic + "' alt='"+ tiles[tiles_index] +"'></div>");
                    tiles_index +=1;
                    tiles_length -=1;
                }
            }
        });

        $("#tiles_left").val(game.tilesLeft);    // update the ammount of tiles left
        $('.drag_box').draggable({  // make the new drag boxes draggable
            revert: 'invalid',
            scroll: false
        });
    });

    $("#repick_letters").button();
    $("#repick_letters").click(function(event){ // if the user repicks their letters
        var letters = [];
        $(".shelf").each(function(index){   // clear out the old tiles
            var dragBox = $(this).html();
            if($(dragBox).attr("data-letter") != undefined){    // if there is a drag box in the shelf
                letters.push($(dragBox).attr("data-letter"));   // add letter to the letter array
            }
            $(this).empty();    // remove any contents in the shelf
        });
        $(".drop_box").each(function(){ // reset drop boxes
            $(this).removeClass('dropped');
            $(this).removeAttr("data-letter");
            if($(this).attr("data-chosen-letter") != undefined){
                $(this).removeAttr("data-chosen-letter");
            }
        });
        if(letters.length <= 0){ // if no letters left ignore
            return;
        }
        game.addLetters(letters); // add old words back into the game
        var new_letters = game.getRandom(letters.length);   // get the new random letters
        $(".shelf").each(function(index){   // clear out old tiles
            if(index < new_letters.length){ // add new tiles into the shelf
                var pic = game.getImage(new_letters[index]);
                $(this).html("<div class='drag_box' data-letter='"+ new_letters[index] +"'><img src='" + pic + "' alt='"+ new_letters[index] +"'></div>");
            }
        });

        $("#tiles_left").val(game.tilesLeft);    // update the amount of tiles left (which should be unchanged)
        $('.drag_box').draggable({  // make the new drag boxes draggable
            revert: 'invalid',
            scroll: false
        });
    })

    // start of game
    var game = new Gamestate();   // init the gamestate
    var tiles = game.getRandom(7);  // get 7 new random
    $("#tiles_left").val(game.tilesLeft);   // set tiles left

    // add tiles (drag_boxes) into the shelf
    $(".shelf").each(function(index){
        var pic = game.getImage(tiles[index]);
        $(this).html("<div class='drag_box' data-letter='"+ tiles[index] +"'><img src='" + pic + "' alt='"+ tiles[index] +"'></div>");
    });

    $('.drag_box').draggable({  // make the drag_boxes draggable
        revert: 'invalid',
        scroll: false
    });

    $("#restart").button();
    $("#restart").click(function(event){    // restart the game button
        game = new Gamestate();   // init the gamestate
        var tiles = game.getRandom(7);  // get 7 new random
        $("#tiles_left").val(game.tilesLeft);   // set tiles left
        $("#word").val(""); // set word to empty
        $("#score").val("0");   // set score to zero
        // add tiles (drag_boxes) into the shelf
        $(".shelf").each(function(index){
            var pic = game.getImage(tiles[index]);
            $(this).html("<div class='drag_box' data-letter='"+ tiles[index] +"'><img src='" + pic + "' alt='"+ tiles[index] +"'></div>");
        });

        $('.drag_box').draggable({  // make the drag_boxes draggable
            revert: 'invalid',
            scroll: false
        });
    })

    // code for the blank tile selection. create all the buttons that will be in the selection menu
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

    // will set the drop_box the blank tile is in to that letter in the data-chosen-letter attribute and will change the picture from a blank to that letter
    function set_letter(choice){
        $(".drop_box").each(function(index){
            var letter = $(this).attr("data-letter");
            var attr = $(this).attr("data-chosen-letter");
            if(letter == "_" && attr == undefined){ // find the drop box containing the just placed blank tile
                $(this).attr("data-chosen-letter", choice);  // set the attribute to contain the letter chosen
                
                var offset = $(this).offset();
                var xPos = Math.floor(offset.left);
                var yPos = Math.floor(offset.top);
                $(".drag_box").each(function(index){    // find the drag_box blank tile that is currenlty in the drop_box we just set the chosen letter of
                    var drag_offset = $(this).offset();
                    var drag_xPos = Math.floor(drag_offset.left);
                    var drag_yPos = Math.floor(drag_offset.top);
                    if(drag_xPos == xPos && drag_yPos == yPos){ // if its the drag_box (tile) we are looking for change its image to the corresponding letters image
                        var img = $(this).find("img");
                        var pic = game.getImage(choice);
                        $(img).attr("src", pic);
                    }
                });
            }
        });
        $(".blank_choice").each(function(index){    // hide the letter selection menu
            $(this).css("display", "none");
       });
        $(".block").css("display", "none"); // hide the block screen
    }


    // if a letter selection button is clicked set the letter
    $("#A_btn").click(function(event){set_letter("A");});
    $("#B_btn").click(function(event){set_letter("B");});
    $("#C_btn").click(function(event){set_letter("C");});
    $("#D_btn").click(function(event){set_letter("D");});
    $("#E_btn").click(function(event){set_letter("E");});
    $("#F_btn").click(function(event){set_letter("F");});
    $("#G_btn").click(function(event){set_letter("G");});
    $("#H_btn").click(function(event){set_letter("H");});
    $("#I_btn").click(function(event){set_letter("I");});
    $("#J_btn").click(function(event){set_letter("J");});
    $("#K_btn").click(function(event){set_letter("K");});
    $("#L_btn").click(function(event){set_letter("L");});
    $("#M_btn").click(function(event){set_letter("M");});
    $("#N_btn").click(function(event){set_letter("N");});
    $("#O_btn").click(function(event){set_letter("O");});
    $("#P_btn").click(function(event){set_letter("P");});
    $("#Q_btn").click(function(event){set_letter("Q");});
    $("#R_btn").click(function(event){set_letter("R");});
    $("#S_btn").click(function(event){set_letter("S");});
    $("#T_btn").click(function(event){set_letter("T");});
    $("#U_btn").click(function(event){set_letter("U");});
    $("#V_btn").click(function(event){set_letter("V");});
    $("#W_btn").click(function(event){set_letter("W");});
    $("#X_btn").click(function(event){set_letter("X");});
    $("#Y_btn").click(function(event){set_letter("Y");});
    $("#Z_btn").click(function(event){set_letter("Z");});
});
