var app = angular.module("app",[])

const Tamaño = document.getElementById('InputsTamaño')
const ContenedorTablas = document.getElementById('ContenedorTablas')
const contenedorMuestra = document.getElementById('contenedorMuestra')
const botones = document.getElementsByTagName('button')
const header = document.getElementById('header')
const h3 = document.getElementById('h3')
const operaciones = document.getElementById('operaciones')
const inputTabla = document.getElementById('inputTabla')

let ListaInputs = []
let Datos = []

let Oscuro = false;


app.controller('Controlador',['$scope',function($scope){


    $scope.GenerarTabla=()=>{
        if (inputTabla.value>0 && inputTabla.value<11){
            console.log(inputTabla.value)
            contenedorMuestra.innerHTML=''
            ContenedorTablas.setAttribute('id','ContenedorTablaActivo')
        
                for (let i = 0 ; i<parseFloat($scope.NumeroDatos) ; i++){
                    const NuevoInput = document.createElement('input')
                    ListaInputs.push(NuevoInput)
                    contenedorMuestra.append(NuevoInput)

                    if (Oscuro) {
                        NuevoInput.setAttribute('class','inputOscuro')
                    }

                    
                }
        }
            
        else {
            alert('Introduzca un número entre 1 y 10')
        }
        
    }

    $scope.Calcular=()=>{
    
        Suma = 0
        CantidadDatos=0

        ListaInputs.forEach(dato=>{

            //SUMA PARA CALCULAR MEDIA
            Suma += parseFloat(dato.value)
            CantidadDatos++


        })
        $scope.Media = Suma/CantidadDatos
        
        let CuadradosAMedia = 0

        ListaInputs.forEach(dato=>{
            //Diferencia del cuadrado de cada dato con la media, para el cálculo de la varianza
            CuadradosAMedia+=Math.pow((parseFloat(dato.value)-$scope.Media),2)
        })
        
        $scope.Varianza = CuadradosAMedia/(CantidadDatos-1)
        $scope.Desvio = Math.sqrt(CuadradosAMedia/(CantidadDatos-1))
    
        
    }

    $scope.ModoOscuro=()=>{
        if (!Oscuro) {
            header.children[1].textContent='Desactivar modo oscuro' 
            header.setAttribute('class','HeaderOscuro')

            document.children[0].children[1].setAttribute('class','bodyOscuro')
             
            inputTabla.setAttribute('class','inputOscuro')
            
            botones[0].setAttribute('class','botonOscuro')
            botones[1].setAttribute('class','botonOscuro')
            botones[2].setAttribute('class','botonOscuro')
            
            
            contenedorMuestra.setAttribute('class','Oscuro')
            ContenedorTablas.setAttribute('class','Oscuro')
            
            ListaInputs.forEach(input=>{
                input.setAttribute('class','inputOscuro')
            })

            operaciones.setAttribute('class','operacionesOscuro')
            /* 
            operaciones.children[0].setAttribute('class','Oscuro')
            operaciones.children[1].setAttribute('class','Oscuro')
            operaciones.children[2].setAttribute('class','Oscuro') */

            Oscuro=true
        }
        else if (Oscuro) {
            header.children[1].textContent='Activar modo oscuro'
            header.removeAttribute('class')
            
            document.children[0].children[1].removeAttribute('class')
            
            inputTabla.removeAttribute('class')
            
            botones[0].removeAttribute('class')
            botones[1].removeAttribute('class')
            botones[2].removeAttribute('class')
            
            contenedorMuestra.removeAttribute('class')
            ContenedorTablas.removeAttribute('class')
            ListaInputs.forEach(input=>{
                input.removeAttribute('class')
            })

            operaciones.removeAttribute('class')
            
            Oscuro=false

        }
    }


}])