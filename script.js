$("#button").click(function () {
    var parent = $("#shuffle");
    const divs = parent.children();
    // console.log(divs);
    // console.log(divs.length)
    console.log($('#'+parent.children()[0].id));
    while (divs.length) {
        parent.append(divs.splice(Math.floor(Math.random() * divs.length), 1)[0]);
    }
    var parent = $("div");

    // BOUCLE QUI PARCOURS LE TABLEAU DE JEUX
for(let i =0;i < 9;i++){
    // console.log(parent.children()[i].id)
    // ID DE L'IMAGE BLANCHE 
    if( parent.children()[i].id==9)
    {
            //ICI VAR I vaux donc la case blanche on BoardGames de 0-8
            console.log(i);

           
        recursive(i);
     }
    }
})

// ====== Recursive function ======
// a chaques fois qu'une div adjacente(only) est click elle prend la place puis Callback recursivité <3<3<3<3<3  
function recursive(i){
    var parent = $("div");
     // CHAQUE CONDITION DE DEPART EST EGALE A UN 0(haut-droite)-8(bas droite)
            // si CASE BLANCHE ==0 
            // si CASE BLANCHE ==8
            // ect.....; 
    if(i==0){
        $('#'+parent.children()[1].id).click(function(event){
            // Prend la place de l'autre temp it's case white BGGG
            let temp = parent.children()[0];
            parent[0].append(parent.children()[1])
            parent[1].append(temp);
            // ON enleve le click sur tout les autres non adjacentes
            $('#'+parent.children()[0].id).off();
            $('#'+parent.children()[1].id).off();
            $('#'+parent.children()[2].id).off();
            $('#'+parent.children()[3].id).off();
            $('#'+parent.children()[4].id).off();
            $('#'+parent.children()[5].id).off();
            $('#'+parent.children()[6].id).off();
            $('#'+parent.children()[7].id).off();
            $('#'+parent.children()[8].id).off();
            // CALLBACK
            recursive(1);
        })

        $('#'+parent.children()[3].id).click(function(event){
            let temp = parent.children()[0];
            parent[0].append(parent.children()[3])
            parent[3].append(temp);
            $('#'+parent.children()[0].id).off();
            $('#'+parent.children()[1].id).off();
            $('#'+parent.children()[2].id).off();
            $('#'+parent.children()[3].id).off();
            $('#'+parent.children()[4].id).off();
            $('#'+parent.children()[5].id).off();
            $('#'+parent.children()[6].id).off();
            $('#'+parent.children()[7].id).off();
            $('#'+parent.children()[8].id).off();
            recursive(3);
        })

    }
    if(i==1){
        $('#'+parent.children()[0].id).click(function(event){
            let temp = parent.children()[1];
            parent[1].append(parent.children()[0])
            parent[0].append(temp);
            $('#'+parent.children()[0].id).off();
            $('#'+parent.children()[1].id).off();
            $('#'+parent.children()[2].id).off();
            $('#'+parent.children()[3].id).off();
            $('#'+parent.children()[4].id).off();
            $('#'+parent.children()[5].id).off();
            $('#'+parent.children()[6].id).off();
            $('#'+parent.children()[7].id).off();
            $('#'+parent.children()[8].id).off();
            recursive(0);
        })

        $('#'+parent.children()[4].id).click(function(event){
            let temp = parent.children()[1];
            parent[1].append(parent.children()[4])
            parent[4].append(temp);
            $('#'+parent.children()[0].id).off();
            $('#'+parent.children()[1].id).off();
            $('#'+parent.children()[2].id).off();
            $('#'+parent.children()[3].id).off();
            $('#'+parent.children()[4].id).off();
            $('#'+parent.children()[5].id).off();
            $('#'+parent.children()[6].id).off();
            $('#'+parent.children()[7].id).off();
            $('#'+parent.children()[8].id).off();
            recursive(4);
        })
        $('#'+parent.children()[2].id).click(function(event){
            let temp = parent.children()[1];
            parent[1].append(parent.children()[2])
            parent[2].append(temp);
            $('#'+parent.children()[1].id).off();
            $('#'+parent.children()[5].id).off();
            recursive(2);
        })


    }if(i==2){
        $('#'+parent.children()[1].id).click(function(event){
            let temp = parent.children()[2];
            parent[2].append(parent.children()[1])
            parent[1].append(temp);
            $('#'+parent.children()[0].id).off();
            $('#'+parent.children()[1].id).off();
            $('#'+parent.children()[2].id).off();
            $('#'+parent.children()[3].id).off();
            $('#'+parent.children()[4].id).off();
            $('#'+parent.children()[5].id).off();
            $('#'+parent.children()[6].id).off();
            $('#'+parent.children()[7].id).off();
            $('#'+parent.children()[8].id).off();
            recursive(1);
        })
        $('#'+parent.children()[5].id).click(function(event){
            let temp = parent.children()[2];
            parent[2].append(parent.children()[5])
            parent[5].append(temp);
            $('#'+parent.children()[0].id).off();
            $('#'+parent.children()[1].id).off();
            $('#'+parent.children()[2].id).off();
            $('#'+parent.children()[3].id).off();
            $('#'+parent.children()[4].id).off();
            $('#'+parent.children()[5].id).off();
            $('#'+parent.children()[6].id).off();
            $('#'+parent.children()[7].id).off();
            $('#'+parent.children()[8].id).off();
            recursive(5);
        })

    }if(i==3){
        $('#'+parent.children()[0].id).click(function(event){
            let temp = parent.children()[3];
            parent[3].append(parent.children()[0])
            parent[0].append(temp);
            $('#'+parent.children()[0].id).off();
            $('#'+parent.children()[1].id).off();
            $('#'+parent.children()[2].id).off();
            $('#'+parent.children()[3].id).off();
            $('#'+parent.children()[4].id).off();
            $('#'+parent.children()[5].id).off();
            $('#'+parent.children()[6].id).off();
            $('#'+parent.children()[7].id).off();
            $('#'+parent.children()[8].id).off();
            recursive(0);
        })
        $('#'+parent.children()[4].id).click(function(event){
            let temp = parent.children()[3];
            parent[3].append(parent.children()[4])
            parent[4].append(temp);
            $('#'+parent.children()[0].id).off();
            $('#'+parent.children()[1].id).off();
            $('#'+parent.children()[2].id).off();
            $('#'+parent.children()[3].id).off();
            $('#'+parent.children()[4].id).off();
            $('#'+parent.children()[5].id).off();
            $('#'+parent.children()[6].id).off();
            $('#'+parent.children()[7].id).off();
            $('#'+parent.children()[8].id).off();
            recursive(4);
        })
        $('#'+parent.children()[6].id).click(function(event){
            let temp = parent.children()[3];
            parent[3].append(parent.children()[6])
            parent[6].append(temp);
            $('#'+parent.children()[0].id).off();
            $('#'+parent.children()[1].id).off();
            $('#'+parent.children()[2].id).off();
            $('#'+parent.children()[3].id).off();
            $('#'+parent.children()[4].id).off();
            $('#'+parent.children()[5].id).off();
            $('#'+parent.children()[6].id).off();
            $('#'+parent.children()[7].id).off();
            $('#'+parent.children()[8].id).off();
            recursive(6);
        })

    }if(i==4){

        $('#'+parent.children()[1].id).click(function(event){
            let temp = parent.children()[4];
            parent[4].append(parent.children()[1])
            parent[1].append(temp);
            $('#'+parent.children()[0].id).off();
            $('#'+parent.children()[1].id).off();
            $('#'+parent.children()[2].id).off();
            $('#'+parent.children()[3].id).off();
            $('#'+parent.children()[4].id).off();
            $('#'+parent.children()[5].id).off();
            $('#'+parent.children()[6].id).off();
            $('#'+parent.children()[7].id).off();
            $('#'+parent.children()[8].id).off();
            recursive(1);
        })
        $('#'+parent.children()[3].id).click(function(event){
            let temp = parent.children()[4];
            parent[4].append(parent.children()[3])
            parent[3].append(temp);
            $('#'+parent.children()[0].id).off();
            $('#'+parent.children()[1].id).off();
            $('#'+parent.children()[2].id).off();
            $('#'+parent.children()[3].id).off();
            $('#'+parent.children()[4].id).off();
            $('#'+parent.children()[5].id).off();
            $('#'+parent.children()[6].id).off();
            $('#'+parent.children()[7].id).off();
            $('#'+parent.children()[8].id).off();
            recursive(3);
        })
        $('#'+parent.children()[5].id).click(function(event){
            let temp = parent.children()[4];
            parent[4].append(parent.children()[5])
            parent[5].append(temp);
            $('#'+parent.children()[0].id).off();
            $('#'+parent.children()[1].id).off();
            $('#'+parent.children()[2].id).off();
            $('#'+parent.children()[3].id).off();
            $('#'+parent.children()[4].id).off();
            $('#'+parent.children()[5].id).off();
            $('#'+parent.children()[6].id).off();
            $('#'+parent.children()[7].id).off();
            $('#'+parent.children()[8].id).off();
            recursive(5);
        })
        $('#'+parent.children()[7].id).click(function(event){
            let temp = parent.children()[4];
            parent[4].append(parent.children()[7])
            parent[7].append(temp);
            $('#'+parent.children()[0].id).off();
            $('#'+parent.children()[1].id).off();
            $('#'+parent.children()[2].id).off();
            $('#'+parent.children()[3].id).off();
            $('#'+parent.children()[4].id).off();
            $('#'+parent.children()[5].id).off();
            $('#'+parent.children()[6].id).off();
            $('#'+parent.children()[7].id).off();
            $('#'+parent.children()[8].id).off();
            recursive(7);
        })
    }if(i==5){
        $('#'+parent.children()[2].id).click(function(event){
            let temp = parent.children()[5];
            parent[5].append(parent.children()[2])
            parent[2].append(temp);
            $('#'+parent.children()[0].id).off();
            $('#'+parent.children()[1].id).off();
            $('#'+parent.children()[2].id).off();
            $('#'+parent.children()[3].id).off();
            $('#'+parent.children()[4].id).off();
            $('#'+parent.children()[5].id).off();
            $('#'+parent.children()[6].id).off();
            $('#'+parent.children()[7].id).off();
            $('#'+parent.children()[8].id).off();
            recursive(2);
        })
        $('#'+parent.children()[4].id).click(function(event){
            let temp = parent.children()[5];
            parent[5].append(parent.children()[4])
            parent[4].append(temp);
            $('#'+parent.children()[0].id).off();
            $('#'+parent.children()[1].id).off();
            $('#'+parent.children()[2].id).off();
            $('#'+parent.children()[3].id).off();
            $('#'+parent.children()[4].id).off();
            $('#'+parent.children()[5].id).off();
            $('#'+parent.children()[6].id).off();
            $('#'+parent.children()[7].id).off();
            $('#'+parent.children()[8].id).off();
            recursive(4);
        })
        $('#'+parent.children()[8].id).click(function(event){
            let temp = parent.children()[5];
            parent[5].append(parent.children()[8])
            parent[8].append(temp);
            $('#'+parent.children()[0].id).off();
            $('#'+parent.children()[1].id).off();
            $('#'+parent.children()[2].id).off();
            $('#'+parent.children()[3].id).off();
            $('#'+parent.children()[4].id).off();
            $('#'+parent.children()[5].id).off();
            $('#'+parent.children()[6].id).off();
            $('#'+parent.children()[7].id).off();
            $('#'+parent.children()[8].id).off();
            recursive(8);
        })

    }if(i==6){
        $('#'+parent.children()[3].id).click(function(event){
            let temp = parent.children()[6];
            parent[6].append(parent.children()[3])
            parent[3].append(temp);
            $('#'+parent.children()[0].id).off();
            $('#'+parent.children()[1].id).off();
            $('#'+parent.children()[2].id).off();
            $('#'+parent.children()[3].id).off();
            $('#'+parent.children()[4].id).off();
            $('#'+parent.children()[5].id).off();
            $('#'+parent.children()[6].id).off();
            $('#'+parent.children()[7].id).off();
            $('#'+parent.children()[8].id).off();
            recursive(3);
        })
        $('#'+parent.children()[7].id).click(function(event){
            let temp = parent.children()[6];
            parent[6].append(parent.children()[7])
            parent[7].append(temp);
            $('#'+parent.children()[0].id).off();
            $('#'+parent.children()[1].id).off();
            $('#'+parent.children()[2].id).off();
            $('#'+parent.children()[3].id).off();
            $('#'+parent.children()[4].id).off();
            $('#'+parent.children()[5].id).off();
            $('#'+parent.children()[6].id).off();
            $('#'+parent.children()[7].id).off();
            $('#'+parent.children()[8].id).off();
            recursive(7);
        })

    }if(i==7){
        $('#'+parent.children()[6].id).click(function(event){
            let temp = parent.children()[7];
            parent[7].append(parent.children()[6])
            parent[6].append(temp);
            $('#'+parent.children()[0].id).off();
            $('#'+parent.children()[1].id).off();
            $('#'+parent.children()[2].id).off();
            $('#'+parent.children()[3].id).off();
            $('#'+parent.children()[4].id).off();
            $('#'+parent.children()[5].id).off();
            $('#'+parent.children()[6].id).off();
            $('#'+parent.children()[7].id).off();
            $('#'+parent.children()[8].id).off();
            recursive(6);
        })
        $('#'+parent.children()[4].id).click(function(event){
            let temp = parent.children()[7];
            parent[7].append(parent.children()[4])
            parent[4].append(temp);
            $('#'+parent.children()[0].id).off();
            $('#'+parent.children()[1].id).off();
            $('#'+parent.children()[2].id).off();
            $('#'+parent.children()[3].id).off();
            $('#'+parent.children()[4].id).off();
            $('#'+parent.children()[5].id).off();
            $('#'+parent.children()[6].id).off();
            $('#'+parent.children()[7].id).off();
            $('#'+parent.children()[8].id).off();
            recursive(4);
        })
        $('#'+parent.children()[8].id).click(function(event){
            let temp = parent.children()[7];
            parent[7].append(parent.children()[8])
            parent[8].append(temp);
            $('#'+parent.children()[0].id).off();
            $('#'+parent.children()[1].id).off();
            $('#'+parent.children()[2].id).off();
            $('#'+parent.children()[3].id).off();
            $('#'+parent.children()[4].id).off();
            $('#'+parent.children()[5].id).off();
            $('#'+parent.children()[6].id).off();
            $('#'+parent.children()[7].id).off();
            $('#'+parent.children()[8].id).off();
            recursive(8);
        })

    }if(i==8){
        $('#'+parent.children()[7].id).click(function(event){
            let temp = parent.children()[8];
            parent[8].append(parent.children()[7])
            parent[7].append(temp);
            $('#'+parent.children()[0].id).off();
            $('#'+parent.children()[1].id).off();
            $('#'+parent.children()[2].id).off();
            $('#'+parent.children()[3].id).off();
            $('#'+parent.children()[4].id).off();
            $('#'+parent.children()[5].id).off();
            $('#'+parent.children()[6].id).off();
            $('#'+parent.children()[7].id).off();
            $('#'+parent.children()[8].id).off();
            recursive(7);
        })

        $('#'+parent.children()[5].id).click(function(event){
            let temp = parent.children()[8];
            parent[8].append(parent.children()[5])
            parent[5].append(temp);
            $('#'+parent.children()[0].id).off();
            $('#'+parent.children()[1].id).off();
            $('#'+parent.children()[2].id).off();
            $('#'+parent.children()[3].id).off();
            $('#'+parent.children()[4].id).off();
            $('#'+parent.children()[5].id).off();
            $('#'+parent.children()[6].id).off();
            $('#'+parent.children()[7].id).off();
            $('#'+parent.children()[8].id).off();
            recursive(5);
        })
    }

}