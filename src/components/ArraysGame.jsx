import React from 'react'

export const ArraysGame = () => {
    const jugadoresTotal=[
        {player:1, puntaje:0, movimientos:0, activo:false},
        {player:2, puntaje:0, movimientos:0, activo:false},
        {player:3, puntaje:0, movimientos:0, activo:false},
        {player:4, puntaje:0, movimientos:0, activo:false}
    ];

    const iconsSmall=[
            {activo:false, boton:"boton-inactivo", icon:"bi bi-airplane-engines-fill",  id:1, valor:1},
            {activo:false, boton:"boton-inactivo", icon:"bi bi-alarm-fill",             id:2, valor:2},
            {activo:false, boton:"boton-inactivo", icon:"bi bi-apple",                  id:3, valor:3},
            {activo:false, boton:"boton-inactivo", icon:"bi bi-bell-fill",              id:4, valor:4},
            {activo:false, boton:"boton-inactivo", icon:"bi bi-box-fill",               id:5, valor:5},
            {activo:false, boton:"boton-inactivo", icon:"bi bi-bootstrap-fill",         id:6, valor:6},
            {activo:false, boton:"boton-inactivo", icon:"bi bi-browser-edge",           id:7, valor:7},
            {activo:false, boton:"boton-inactivo", icon:"bi bi-camera-reels-fill",      id:8, valor:8},
            {activo:false, boton:"boton-inactivo", icon:"bi bi-airplane-engines-fill",  id:9, valor:1},
            {activo:false, boton:"boton-inactivo", icon:"bi bi-alarm-fill",             id:10, valor:2},
            {activo:false, boton:"boton-inactivo", icon:"bi bi-apple",                  id:11, valor:3},
            {activo:false, boton:"boton-inactivo", icon:"bi bi-bell-fill",              id:12, valor:4},
            {activo:false, boton:"boton-inactivo", icon:"bi bi-box-fill",               id:13, valor:5},
            {activo:false, boton:"boton-inactivo", icon:"bi bi-bootstrap-fill",         id:14, valor:6},
            {activo:false, boton:"boton-inactivo", icon:"bi bi-browser-edge",           id:15, valor:7},
            {activo:false, boton:"boton-inactivo", icon:"bi bi-camera-reels-fill",      id:16, valor:8}
    ];

    const iconsLarge=[
            {activo:false, boton:"boton-inactivo", icon:"bi bi-airplane-engines-fill",          id:1, valor:1},
            {activo:false, boton:"boton-inactivo", icon:"bi bi-alarm-fill",                     id:2, valor:2},
            {activo:false, boton:"boton-inactivo", icon:"bi bi-apple",                          id:3, valor:3},
            {activo:false, boton:"boton-inactivo", icon:"bi bi-bell-fill",                      id:4, valor:4},
            {activo:false, boton:"boton-inactivo", icon:"bi bi-box-fill",                       id:5, valor:5},
            {activo:false, boton:"boton-inactivo", icon:"bi bi-bootstrap-fill",                 id:6, valor:6},
            {activo:false, boton:"boton-inactivo", icon:"bi bi-browser-edge",                   id:7, valor:7},
            {activo:false, boton:"boton-inactivo", icon:"bi bi-camera-reels-fill",              id:8, valor:8},   
            {activo:false, boton:"boton-inactivo", icon:"bi bi-capsule",                        id:9, valor:9},   
            {activo:false, boton:"boton-inactivo", icon:"bi bi-car-front-fill",                 id:10, valor:10},  
            {activo:false, boton:"boton-inactivo", icon:"bi bi-chat-fill",                      id:11, valor:11},  
            {activo:false, boton:"boton-inactivo", icon:"bi bi-clipboard-fill",                 id:12, valor:12},  
            {activo:false, boton:"boton-inactivo", icon:"bi bi-cloud-drizzle-fill",             id:13, valor:13},  
            {activo:false, boton:"boton-inactivo", icon:"bi bi-currency-exchange",              id:14, valor:14},   
            {activo:false, boton:"boton-inactivo", icon:"bi bi-droplet-half",                   id:15, valor:15},  
            {activo:false, boton:"boton-inactivo", icon:"bi bi-emoji-neutral-fill",             id:16, valor:16}, 
            {activo:false, boton:"boton-inactivo", icon:"bi bi-emoji-sunglasses-fill",          id:17, valor:17},  
            {activo:false, boton:"boton-inactivo", icon:"bi bi-emoji-smile-upside-down-fill",   id:18, valor:18},
            {activo:false, boton:"boton-inactivo", icon:"bi bi-airplane-engines-fill",          id:19, valor:1},
            {activo:false, boton:"boton-inactivo", icon:"bi bi-alarm-fill",                     id:20, valor:2},
            {activo:false, boton:"boton-inactivo", icon:"bi bi-apple",                          id:21, valor:3},
            {activo:false, boton:"boton-inactivo", icon:"bi bi-bell-fill",                      id:22, valor:4},
            {activo:false, boton:"boton-inactivo", icon:"bi bi-box-fill",                       id:23, valor:5},
            {activo:false, boton:"boton-inactivo", icon:"bi bi-bootstrap-fill",                 id:24, valor:6},
            {activo:false, boton:"boton-inactivo", icon:"bi bi-browser-edge",                   id:25, valor:7},
            {activo:false, boton:"boton-inactivo", icon:"bi bi-camera-reels-fill",              id:26, valor:8},   
            {activo:false, boton:"boton-inactivo", icon:"bi bi-capsule",                        id:27, valor:9},   
            {activo:false, boton:"boton-inactivo", icon:"bi bi-car-front-fill",                 id:28, valor:10},  
            {activo:false, boton:"boton-inactivo", icon:"bi bi-chat-fill",                      id:29, valor:11},  
            {activo:false, boton:"boton-inactivo", icon:"bi bi-clipboard-fill",                 id:30, valor:12},  
            {activo:false, boton:"boton-inactivo", icon:"bi bi-cloud-drizzle-fill",             id:31, valor:13},  
            {activo:false, boton:"boton-inactivo", icon:"bi bi-currency-exchange",              id:32, valor:14},   
            {activo:false, boton:"boton-inactivo", icon:"bi bi-droplet-half",                   id:33, valor:15},  
            {activo:false, boton:"boton-inactivo", icon:"bi bi-emoji-neutral-fill",             id:34, valor:16}, 
            {activo:false, boton:"boton-inactivo", icon:"bi bi-emoji-sunglasses-fill",          id:35, valor:17},  
            {activo:false, boton:"boton-inactivo", icon:"bi bi-emoji-smile-upside-down-fill",   id:36, valor:18},
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

