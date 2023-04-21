import React from 'react'

export const ArraysGame = () => {
    const jugadoresTotal=[
        {player:1, puntaje:0, movimientos:0, activo:false, avatar:"https://images.wikidexcdn.net/mwuploads/wikidex/thumb/0/02/latest/20221113131941/Ash_%28Viajes_Pok%C3%A9mon%29_2.png/250px-Ash_%28Viajes_Pok%C3%A9mon%29_2.png"},
        {player:2, puntaje:0, movimientos:0, activo:false, avatar:"https://images.wikidexcdn.net/mwuploads/wikidex/thumb/f/fd/latest/20180812024731/Misty_LGPE.png/250px-Misty_LGPE.png"},
        {player:3, puntaje:0, movimientos:0, activo:false, avatar:"https://images.wikidexcdn.net/mwuploads/wikidex/thumb/3/3b/latest/20180812021535/Brock_LGPE.png/250px-Brock_LGPE.png"},
        {player:4, puntaje:0, movimientos:0, activo:false, avatar:"https://images.wikidexcdn.net/mwuploads/wikidex/thumb/e/e6/latest/20110804040442/Ilustraciones_de_Jessie_y_James.png/220px-Ilustraciones_de_Jessie_y_James.png"}
    ];

    const iconsSmall=[
            {activo:false, boton:"boton-inactivo", icon:"https://cdn-icons-png.flaticon.com/512/188/188987.png",  id:1, valor:1},
            {activo:false, boton:"boton-inactivo", icon:"https://cdn-icons-png.flaticon.com/512/188/188995.png",             id:2, valor:2},
            {activo:false, boton:"boton-inactivo", icon:"https://cdn-icons-png.flaticon.com/512/188/188992.png",                  id:3, valor:3},
            {activo:false, boton:"boton-inactivo", icon:"https://cdn-icons-png.flaticon.com/512/189/189001.png",              id:4, valor:4},
            {activo:false, boton:"boton-inactivo", icon:"https://cdn-icons-png.flaticon.com/512/1752/1752681.png",               id:5, valor:5},
            {activo:false, boton:"boton-inactivo", icon:"https://cdn-icons-png.flaticon.com/512/188/188990.png",         id:6, valor:6},
            {activo:false, boton:"boton-inactivo", icon:"https://cdn-icons-png.flaticon.com/512/188/188996.png",           id:7, valor:7},
            {activo:false, boton:"boton-inactivo", icon:"https://cdn-icons-png.flaticon.com/512/188/188997.png",      id:8, valor:8},
            {activo:false, boton:"boton-inactivo", icon:"https://cdn-icons-png.flaticon.com/512/188/188987.png",  id:9, valor:1},
            {activo:false, boton:"boton-inactivo", icon:"https://cdn-icons-png.flaticon.com/512/188/188995.png",             id:10, valor:2},
            {activo:false, boton:"boton-inactivo", icon:"https://cdn-icons-png.flaticon.com/512/188/188992.png",                  id:11, valor:3},
            {activo:false, boton:"boton-inactivo", icon:"https://cdn-icons-png.flaticon.com/512/189/189001.png",              id:12, valor:4},
            {activo:false, boton:"boton-inactivo", icon:"https://cdn-icons-png.flaticon.com/512/1752/1752681.png",               id:13, valor:5},
            {activo:false, boton:"boton-inactivo", icon:"https://cdn-icons-png.flaticon.com/512/188/188990.png",         id:14, valor:6},
            {activo:false, boton:"boton-inactivo", icon:"https://cdn-icons-png.flaticon.com/512/188/188996.png",           id:15, valor:7},
            {activo:false, boton:"boton-inactivo", icon:"https://cdn-icons-png.flaticon.com/512/188/188997.png",      id:16, valor:8}
    ];

    const iconsLarge=[
            {activo:false, boton:"boton-inactivo", icon:"https://cdn-icons-png.flaticon.com/512/188/188987.png",          id:1, valor:1},
            {activo:false, boton:"boton-inactivo", icon:"https://cdn-icons-png.flaticon.com/512/188/188995.png",                     id:2, valor:2},
            {activo:false, boton:"boton-inactivo", icon:"https://cdn-icons-png.flaticon.com/512/188/188992.png",                          id:3, valor:3},
            {activo:false, boton:"boton-inactivo", icon:"https://cdn-icons-png.flaticon.com/512/189/189001.png",                      id:4, valor:4},
            {activo:false, boton:"boton-inactivo", icon:"https://cdn-icons-png.flaticon.com/512/1752/1752681.png",                       id:5, valor:5},
            {activo:false, boton:"boton-inactivo", icon:"https://cdn-icons-png.flaticon.com/512/188/188990.png",                 id:6, valor:6},
            {activo:false, boton:"boton-inactivo", icon:"https://cdn-icons-png.flaticon.com/512/188/188996.png",                   id:7, valor:7},
            {activo:false, boton:"boton-inactivo", icon:"https://cdn-icons-png.flaticon.com/512/188/188997.png",              id:8, valor:8},   
            {activo:false, boton:"boton-inactivo", icon:"https://cdn-icons-png.flaticon.com/512/188/188994.png",                        id:9, valor:9},   
            {activo:false, boton:"boton-inactivo", icon:"https://cdn-icons-png.flaticon.com/512/188/188991.png",                 id:10, valor:10},  
            {activo:false, boton:"boton-inactivo", icon:"https://cdn-icons-png.flaticon.com/512/189/189005.png",                      id:11, valor:11},  
            {activo:false, boton:"boton-inactivo", icon:"https://cdn-icons-png.flaticon.com/512/189/189003.png",                 id:12, valor:12},  
            {activo:false, boton:"boton-inactivo", icon:"https://cdn-icons-png.flaticon.com/512/1752/1752682.png",             id:13, valor:13},  
            {activo:false, boton:"boton-inactivo", icon:"https://cdn-icons-png.flaticon.com/512/1752/1752719.png",              id:14, valor:14},   
            {activo:false, boton:"boton-inactivo", icon:"https://cdn-icons-png.flaticon.com/512/1752/1752816.png",                   id:15, valor:15},  
            {activo:false, boton:"boton-inactivo", icon:"https://cdn-icons-png.flaticon.com/512/1752/1752828.png",             id:16, valor:16}, 
            {activo:false, boton:"boton-inactivo", icon:"https://cdn-icons-png.flaticon.com/512/188/188998.png",          id:17, valor:17},  
            {activo:false, boton:"boton-inactivo", icon:"https://cdn-icons-png.flaticon.com/512/1752/1752753.png",   id:18, valor:18},
            {activo:false, boton:"boton-inactivo", icon:"https://cdn-icons-png.flaticon.com/512/188/188987.png",          id:19, valor:1},
            {activo:false, boton:"boton-inactivo", icon:"https://cdn-icons-png.flaticon.com/512/188/188995.png",                     id:20, valor:2},
            {activo:false, boton:"boton-inactivo", icon:"https://cdn-icons-png.flaticon.com/512/188/188992.png",                          id:21, valor:3},
            {activo:false, boton:"boton-inactivo", icon:"https://cdn-icons-png.flaticon.com/512/189/189001.png",                      id:22, valor:4},
            {activo:false, boton:"boton-inactivo", icon:"https://cdn-icons-png.flaticon.com/512/1752/1752681.png",                       id:23, valor:5},
            {activo:false, boton:"boton-inactivo", icon:"https://cdn-icons-png.flaticon.com/512/188/188990.png",                 id:24, valor:6},
            {activo:false, boton:"boton-inactivo", icon:"https://cdn-icons-png.flaticon.com/512/188/188996.png",                   id:25, valor:7},
            {activo:false, boton:"boton-inactivo", icon:"https://cdn-icons-png.flaticon.com/512/188/188997.png",              id:26, valor:8},   
            {activo:false, boton:"boton-inactivo", icon:"https://cdn-icons-png.flaticon.com/512/188/188994.png",                        id:27, valor:9},   
            {activo:false, boton:"boton-inactivo", icon:"https://cdn-icons-png.flaticon.com/512/188/188991.png",                 id:28, valor:10},  
            {activo:false, boton:"boton-inactivo", icon:"https://cdn-icons-png.flaticon.com/512/189/189005.png",                      id:29, valor:11},  
            {activo:false, boton:"boton-inactivo", icon:"https://cdn-icons-png.flaticon.com/512/189/189003.png",                 id:30, valor:12},  
            {activo:false, boton:"boton-inactivo", icon:"https://cdn-icons-png.flaticon.com/512/1752/1752682.png",             id:31, valor:13},  
            {activo:false, boton:"boton-inactivo", icon:"https://cdn-icons-png.flaticon.com/512/1752/1752719.png",              id:32, valor:14},   
            {activo:false, boton:"boton-inactivo", icon:"https://cdn-icons-png.flaticon.com/512/1752/1752816.png",                   id:33, valor:15},  
            {activo:false, boton:"boton-inactivo", icon:"https://cdn-icons-png.flaticon.com/512/1752/1752828.png",             id:34, valor:16}, 
            {activo:false, boton:"boton-inactivo", icon:"https://cdn-icons-png.flaticon.com/512/188/188998.png",          id:35, valor:17},  
            {activo:false, boton:"boton-inactivo", icon:"https://cdn-icons-png.flaticon.com/512/1752/1752753.png",   id:36, valor:18},
    ];

    const numbersSmall =[
        {activo:false, boton:"boton-inactivo", number:1, id:1, valor:1},
        {activo:false, boton:"boton-inactivo", number:2, id:2, valor:2},
        {activo:false, boton:"boton-inactivo", number:3, id:3, valor:3},
        {activo:false, boton:"boton-inactivo", number:4, id:4, valor:4},
        {activo:false, boton:"boton-inactivo", number:5, id:5, valor:5},
        {activo:false, boton:"boton-inactivo", number:6, id:6, valor:6},
        {activo:false, boton:"boton-inactivo", number:7, id:7, valor:7},
        {activo:false, boton:"boton-inactivo", number:8, id:8, valor:8},
        {activo:false, boton:"boton-inactivo", number:1, id:9,  valor:1},
        {activo:false, boton:"boton-inactivo", number:2, id:10, valor:2},
        {activo:false, boton:"boton-inactivo", number:3, id:11, valor:3},
        {activo:false, boton:"boton-inactivo", number:4, id:12, valor:4},
        {activo:false, boton:"boton-inactivo", number:5, id:13, valor:5},
        {activo:false, boton:"boton-inactivo", number:6, id:14, valor:6},
        {activo:false, boton:"boton-inactivo", number:7, id:15, valor:7},
        {activo:false, boton:"boton-inactivo", number:8, id:16, valor:8},
    ];


    const numbersLarge=[
        {activo:false, boton:"boton-inactivo", number:1, id:1, valor:1},
        {activo:false, boton:"boton-inactivo", number:2, id:2, valor:2},
        {activo:false, boton:"boton-inactivo", number:3, id:3, valor:3},
        {activo:false, boton:"boton-inactivo", number:4, id:4, valor:4},
        {activo:false, boton:"boton-inactivo", number:5, id:5, valor:5},
        {activo:false, boton:"boton-inactivo", number:6, id:6, valor:6},
        {activo:false, boton:"boton-inactivo", number:7, id:7, valor:7},
        {activo:false, boton:"boton-inactivo", number:8, id:8, valor:8},         
        {activo:false, boton:"boton-inactivo", number:9, id:9, valor:9},         
        {activo:false, boton:"boton-inactivo", number:10,id:10, valor:10},
        {activo:false, boton:"boton-inactivo", number:11,id:11, valor:11},
        {activo:false, boton:"boton-inactivo", number:12,id:12, valor:12},
        {activo:false, boton:"boton-inactivo", number:13,id:13, valor:13},
        {activo:false, boton:"boton-inactivo", number:14,id:14, valor:14},
        {activo:false, boton:"boton-inactivo", number:15,id:15, valor:15},
        {activo:false, boton:"boton-inactivo", number:16,id:16, valor:16},
        {activo:false, boton:"boton-inactivo", number:17,id:17, valor:17},
        {activo:false, boton:"boton-inactivo", number:18,id:18, valor:18},
        {activo:false, boton:"boton-inactivo", number:19, id:19, valor:1},
        {activo:false, boton:"boton-inactivo", number:20, id:20, valor:2},
        {activo:false, boton:"boton-inactivo", number:21, id:21, valor:3},
        {activo:false, boton:"boton-inactivo", number:22, id:22, valor:4},
        {activo:false, boton:"boton-inactivo", number:23, id:23, valor:5},
        {activo:false, boton:"boton-inactivo", number:24, id:24, valor:6},
        {activo:false, boton:"boton-inactivo", number:25, id:25, valor:7},
        {activo:false, boton:"boton-inactivo", number:26, id:26, valor:8},         
        {activo:false, boton:"boton-inactivo", number:27, id:27, valor:9},         
        {activo:false, boton:"boton-inactivo", number:28, id:28,  valor:10},
        {activo:false, boton:"boton-inactivo", number:29, id:29,  valor:11},
        {activo:false, boton:"boton-inactivo", number:30, id:30,  valor:12},
        {activo:false, boton:"boton-inactivo", number:31, id:31,  valor:13},
        {activo:false, boton:"boton-inactivo", number:32, id:32,  valor:14},
        {activo:false, boton:"boton-inactivo", number:33, id:33,  valor:15},
        {activo:false, boton:"boton-inactivo", number:34, id:34,  valor:16},
        {activo:false, boton:"boton-inactivo", number:35, id:35,  valor:17},
        {activo:false, boton:"boton-inactivo", number:36, id:36,  valor:18}

    ];

  return [jugadoresTotal, iconsSmall, iconsLarge, numbersSmall, numbersLarge]
}

