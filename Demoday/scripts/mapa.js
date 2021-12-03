var geocoder;
var map;
var aplicar;
// var teste

map = new google.maps.Map(document.getElementById('map'),mapOptions) 
function initMap() {
    var latlng = new google.maps.LatLng(-26.7694400,-48.6458300);
    var mapOptions = {
            center:latlng,
            zoom:11,
            styles: [
                {
                  "featureType": "administrative.country",
                  "elementType": "geometry.fill",
                  "stylers": [
                    {
                      "color": "#00265c"
                    },
                    {
                      "weight": 1
                    }
                  ]
                },
                {
                  "featureType": "administrative.country",
                  "elementType": "geometry.stroke",
                  "stylers": [
                    {
                      "color": "#00265c"
                    }
                  ]
                },
                {
                  "featureType": "administrative.locality",
                  "elementType": "geometry",
                  "stylers": [
                    {
                      "color": "#f25a00"
                    }
                  ]
                },
                {
                  "featureType": "administrative.locality",
                  "elementType": "geometry.fill",
                  "stylers": [
                    {
                      "color": "#f25a00"
                    }
                  ]
                },
                {
                  "featureType": "administrative.locality",
                  "elementType": "geometry.stroke",
                  "stylers": [
                    {
                      "color": "#f25a00"
                    }
                  ]
                },
                {
                  "featureType": "administrative.province",
                  "elementType": "geometry.fill",
                  "stylers": [
                    {
                      "color": "#00265c"
                    }
                  ]
                },
                {
                  "featureType": "administrative.province",
                  "elementType": "geometry.stroke",
                  "stylers": [
                    {
                      "color": "#00265c"
                    }
                  ]
                },
                {
                  "featureType": "landscape",
                  "elementType": "geometry",
                  "stylers": [
                    {
                      "color": "#fbf9ee"
                    }
                  ]
                },
                {
                  "featureType": "landscape",
                  "elementType": "geometry.fill",
                  "stylers": [
                    {
                      "weight": 1
                    }
                  ]
                },
                {
                  "featureType": "road.highway",
                  "elementType": "geometry.fill",
                  "stylers": [
                    {
                      "color": "#fec88b"
                    }
                  ]
                },
                {
                  "featureType": "road.highway",
                  "elementType": "geometry.stroke",
                  "stylers": [
                    {
                      "color": "#ffb057"
                    }
                  ]
                },
                {
                  "featureType": "road.local",
                  "elementType": "geometry.stroke",
                  "stylers": [
                    {
                      "color": "#bbece2"
                    }
                  ]
                },
                {
                  "featureType": "transit.station.airport",
                  "elementType": "geometry.fill",
                  "stylers": [
                    {
                      "color": "#fbe6da"
                    }
                  ]
                },
                {
                  "featureType": "transit.station.bus",
                  "stylers": [
                    {
                      "color": "#f25a00"
                    }
                  ]
                }
              ],
            disableDefaultUI: true,
    }
    map = new google.maps.Map(document.getElementById('map'),mapOptions) 
    
    geocoder = new google.maps.Geocoder();


    
    var marker = new google.maps.Marker({
        map: map,
        title: 'Sua atual localização',
        icon: href="../_img/preto.png",
        animation:google.maps.Animation.BOUNCE,
        // ou DROP
    })

    var marker1 = new google.maps.Marker({
        position: {lat: -26.7999400,lng: -48.6478300},
        map: map,
        title: 'Encanador',
        icon: href="../_img/1.png",
        animation:google.maps.Animation.DROP,
        // ou DROP
    })

    var marker2 = new google.maps.Marker({
        position: {lat: -26.9009400,lng: -48.6678300},
        map: map,
        title: 'Encanador',
        icon: href="../_img/1.png",
        animation:google.maps.Animation.DROP,
        // ou DROP
    })

    var marker3 = new google.maps.Marker({
        position: {lat: -26.7910400,lng: -48.6478900},
        map: map,
        title: 'Encanador',
        icon: href="../_img/1.png",
        animation:google.maps.Animation.DROP,
        // ou DROP
    })

    var marker4 = new google.maps.Marker({
        position: {lat: -26.7999400,lng: -48.6478300},
        map: map,
        title: 'Encanador',
        icon: href="../_img/1.png",
        animation:google.maps.Animation.DROP,
        // ou DROP
    })

    var marker5 = new google.maps.Marker({
        position: {lat: -26.8200450,lng: -48.6487090},
        map: map,
        title: 'Encanador',
        icon: href="../_img/1.png",
        animation:google.maps.Animation.DROP,
        // ou DROP
    })

    var marker6 = new google.maps.Marker({
        position: {lat: -26.8234567,lng: -48.7078300},
        map: map,
        title: 'Eletricista',
        icon: href="../_img/1.png",
        animation:google.maps.Animation.DROP,
        // ou DROP
    })

    var marker7 = new google.maps.Marker({
        position: {lat: -26.8344567,lng: -48.7098300},
        map: map,
        title: 'Eletricista',
        icon: href="../_img/1.png",
        animation:google.maps.Animation.DROP,
        // ou DROP
    })

    var marker8 = new google.maps.Marker({
        position: {lat: -26.7999400,lng: -48.7060300},
        map: map,
        title: 'Eletricista',
        icon: href="../_img/1.png",
        animation:google.maps.Animation.DROP,
        // ou DROP
    })

    var marker9 = new google.maps.Marker({
        position: {lat: -26.7009400,lng: -48.7050300},
        map: map,
        title: 'Eletricista',
        icon: href="../_img/1.png",
        animation:google.maps.Animation.DROP,
        // ou DROP
    })

    var marker10 = new google.maps.Marker({
        position: {lat: -26.7029400,lng: -48.7080300},
        map: map,
        title: 'Eletricista',
        icon: href="../_img/1.png",
        animation:google.maps.Animation.DROP,
        // ou DROP
    })

    var marker11 = new google.maps.Marker({
        position: {lat: -26.7500400,lng: -48.7080350},
        map: map,
        title: 'Mecanico',
        icon: href="../_img/1.png",
        animation:google.maps.Animation.DROP,
        // ou DROP
    })

    var marker12 = new google.maps.Marker({
        position: {lat: -26.7815490,lng: -48.5998300},
        map: map,
        title: 'Mecanico',
        icon: href="../_img/1.png",
        animation:google.maps.Animation.DROP,
        // ou DROP
    })

    var marker13 = new google.maps.Marker({
        position: {lat: -26.7900490,lng: -48.5999800},
        map: map,
        title: 'Mecanico',
        icon: href="../_img/1.png",
        animation:google.maps.Animation.DROP,
        // ou DROP
    })

    var marker14 = new google.maps.Marker({
        position: {lat: -26.8087400,lng: -48.6908300},
        map: map,
        title: 'Mecanico',
        icon: href="../_img/1.png",
        animation:google.maps.Animation.DROP,
        // ou DROP
    })

    var marker15 = new google.maps.Marker({
        position: {lat: -26.8010000,lng: -48.6990300},
        map: map,
        title: 'Mecanico',
        icon: href="../_img/1.png",
        animation:google.maps.Animation.DROP,
        // ou DROP
    })
    var marker16 = new google.maps.Marker({
        position: {lat: -26.8799400,lng: -48.6478300},
        map: map,
        title: 'Diarista',
        icon: href="../_img/1.png",
        animation:google.maps.Animation.DROP,
        // ou DROP
    })

    var marker17 = new google.maps.Marker({
        position: {lat: -26.7001000,lng: -48.7660300},
        map: map,
        title: 'Diarista',
        icon: href="../_img/1.png",
        animation:google.maps.Animation.DROP,
        // ou DROP
    })

    var marker18 = new google.maps.Marker({
        position: {lat: -26.8000700,lng: -48.6429000},
        map: map,
        title: 'Diarista',
        icon: href="../_img/1.png",
        animation:google.maps.Animation.DROP,
        // ou DROP
    })

    var marker19 = new google.maps.Marker({
        position: {lat: -26.7299400,lng: -48.6988900},
        map: map,
        title: 'Diarista',
        icon: href="../_img/1.png",
        animation:google.maps.Animation.DROP,
        // ou DROP
    })

    var marker20 = new google.maps.Marker({
        position: {lat: -26.7399400,lng: -48.6990900},
        map: map,
        title: 'Diarista',
        icon: href="../_img/1.png",
        animation:google.maps.Animation.DROP,
        // ou DROP
    })
    
    marker.setPosition(latlng);
    
    const circle = new google.maps.Circle({
        strokeColor:'#2ED9B8',
        strokeWeight:2,
        strokeOpacity:1,
        fillColor:'#F25A00',
        fillOpacity:'.10',
        center: latlng,
        radius: 10000,
        map:map,
    })

    
    marker6.addListener('click', ()=> {
        infoWindow6.open(map, marker6)
    }) 
    
    marker7.addListener('click', ()=> {
        infoWindow7.open(map, marker7)
    })
    
    marker8.addListener('click', ()=> {
        infoWindow8.open(map, marker8)
    })
    
    marker9.addListener('click', ()=> {
        infoWindow9.open(map, marker9)
    })
    
    marker10.addListener('click', ()=> {
        infoWindow10.open(map, marker10)
    })
    
    // Demarcando distancia entre os marcadores
    
    var rad = function(x) {
        return x * Math.PI / 180;
    };
    
    
    var getDistance = function(marker, marker8) {
        var R = 6378137; // Earth’s mean radius in meter
        var dLat = rad(-26.7999400 - -26.7694400);
        var dLong = rad(-48.7060300 - -48.6458300);
        var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(rad(-26.7694400)) * Math.cos(rad(-26.7999400)) *
        Math.sin(dLong / 2) * Math.sin(dLong / 2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        var d = R * c;
        d = (d / 1000).toFixed(0)
        return d // returns the distance in meter
    };


    var infoWindow6 = new google.maps.InfoWindow({
        content: `<div class="prestador"><i id="heart" class="bi bi-heart"></i>Wesley Silva<i class="bi bi-star-fill star"></i><i class="bi bi-star-fill star"></i><i class="bi bi-star-fill star"></i><i class="bi bi-star-fill star"></i><i class="bi bi-star-fill star"></i><i>4,9</i></div> <div class="d-flex distance infos"> <img src="../_img/maps.png" alt=""><p>Wesley está à <span> 2km </span> de você</p></div>  <button id="weswes" onclick= mudarWesley> Mudar para esse prestador</button>`,
        // maxWidth: 200,
    })

    var infoWindow7 = new google.maps.InfoWindow({
        content:`<div class="prestador"><i id="heart" class="bi bi-heart"></i>Guilherme Broba<i class="bi bi-star-fill star"></i><i class="bi bi-star-fill star"></i><i class="bi bi-star-fill star"></i><i class="bi bi-star-fill star"></i><i class="bi bi-star-fill star"></i><i>4,9</i></div> <div class="d-flex distance infos"> <img src="../_img/maps.png" alt=""><p>Guilherme está à <span> 2km </span> de você</p></div> <button onclick= mudarGui> Mudar para esse prestador</button>`,
        // maxWidth: 200,
    })

    var infoWindow8 = new google.maps.InfoWindow({
        content:'<div class="prestador"><i id="heart" class="bi bi-heart"></i>Railson Costa Leite<i class="bi bi-star-fill star"></i><i class="bi bi-star-fill star"></i><i class="bi bi-star-fill star"></i><i class="bi bi-star-fill star"></i><i class="bi bi-star-fill star"></i><i>4,9</i></div> <div class="d-flex distance infos"> <img src="../_img/maps.png" alt=""><p>Railson está à <span id="railson"> 7km </span> de você</p></div> <button> Mudar para esse prestador</button>',
        // maxWidth: 200,
    })

    var infoWindow9 = new google.maps.InfoWindow({
        content:'<div class="prestador"><i id="heart" class="bi bi-heart"></i>Carlos Felipe<i class="bi bi-star-fill star"></i><i class="bi bi-star-fill star"></i><i class="bi bi-star-fill star"></i><i class="bi bi-star-fill star"></i><i class="bi bi-star-fill star"></i><i>4,9</i></div> <div class="d-flex distance infos"> <img src="../_img/maps.png" alt=""><p>Carlos está à <span> 2km </span> de você</p></div> <button> Mudar para esse prestador</button>',

        // maxWidth: 200,
    })

    var infoWindow10 = new google.maps.InfoWindow({
        content:'<div class="prestador"><i id="heart" class="bi bi-heart"></i>Ramos Barboza<i class="bi bi-star-fill star"></i><i class="bi bi-star-fill star"></i><i class="bi bi-star-fill star"></i><i class="bi bi-star-fill star"></i><i class="bi bi-star-fill star"></i><i>4,9</i></div> <div class="d-flex distance infos"> <img src="../_img/maps.png" alt=""><p>Ramos está à <span> 2km </span> de você</p></div> <button> Mudar para esse prestador</button>',
        // maxWidth: 200,
    })
    
    function filtroEletricista() {

        if(marker1.title != 'Eletricista') {
            marker1.setMap(null)
            console.log(marker1)   
        }
         if(marker2.title != 'Eletricista') {
            marker2.setMap(null)
            console.log(marker2)   
        }
         if(marker3.title != 'Eletricista') {
            marker3.setMap(null)
            console.log(marker3)   
        }
         if(marker4.title != 'Eletricista') {
            marker4.setMap(null)
            console.log(marker4)   
        }
         if(marker5.title != 'Eletricista') {
            marker5.setMap(null)
            console.log(marker5)   
        }
         if(marker6.title != 'Eletricista') {
            marker6.setMap(null)
            console.log(marker6)   
        }
         if(marker7.title != 'Eletricista') {
            marker7.setMap(null)
            console.log(marker7)   
        }
         if(marker8.title != 'Eletricista') {
            marker8.setMap(null)
            console.log(marker8)   
        }
         if(marker9.title != 'Eletricista') {
            marker9.setMap(null)
            console.log(marker9)   
        }
         if(marker10.title != 'Eletricista') {
            marker10.setMap(null)
            console.log(marker10)   
        } if(marker11.title != 'Eletricista') {
            marker11.setMap(null)
            console.log(marker11)   
        } if(marker12.title != 'Eletricista') {
            marker12.setMap(null)
            console.log(marker12)   
        } if(marker13.title != 'Eletricista') {
            marker13.setMap(null)
            console.log(marker13)   
        } if(marker14.title != 'Eletricista') {
            marker14.setMap(null)
            console.log(marker14)   
        } if(marker15.title != 'Eletricista') {
            marker15.setMap(null)
            console.log(marker15)   
        } if(marker16.title != 'Eletricista') {
            marker16.setMap(null)
            console.log(marker16)   
        } if(marker17.title != 'Eletricista') {
            marker17.setMap(null)
            console.log(marker17)   
        } if(marker18.title != 'Eletricista') {
            marker18.setMap(null)
            console.log(marker18)   
        } if(marker19.title != 'Eletricista') {
            marker19.setMap(null)
            console.log(marker19)   
        } if(marker20.title != 'Eletricista') {
            marker20.setMap(null)
            console.log(marker20)   
        } if(marker6.title != 'Eletricista') {
            marker6.setMap(null)
            console.log(marker6)   
        } 


    }

    // teste = new google.maps.geometry.spherical.computeDistanceBetween(marker1.getPosition(), geometryForms.circle.getCenter())


    const penhaCoords = [
        { lat: -23.5489, lng:  -48.6458300  },
      ];
    
      const bermudaTriangle = new google.maps.Polygon({ paths: penhaCoords });
    
      google.maps.event.addListener(map, "click", (e) => {
        const filtros = google.maps.geometry.poly.containsLocation(
            e.latLng,
            bermudaTriangle,
            filtroEletricista(),
            console.log(getDistance()),
            console.log("Ramon"),
            document.getElementById("distancia").innerHTML=getDistance()+"km",
        )
    
      
      });
    }
    
        map.addListener('zoom_changed', function() {
            const circle = new google.maps.Circle({
                strokeColor:'#2ED9B8',
                strokeWeight:2,
                strokeOpacity:0,
                fillColor:'#ffffff',
                fillOpacity:'.01',
                center: latlng,
                radius: 10000,
                map:map,
            })

        })
    

if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position){ // callback de sucesso
        // ajusta a posição do marker para a localização do usuário
        marker.setPosition(new google.maps.LatLng(position.coords.latitude, position.coords.longitude));
    }, 
    function(error){ // callback de erro
       alert('Erro ao obter localização!');
       console.log('Erro ao obter localização.', error);
    });
} else {
    console.log('Navegador não suporta Geolocalização!');
}
$(document).ready(function () {
    initMap();
});