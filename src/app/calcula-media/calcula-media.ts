import { Component } from '@angular/core';
import { Boletim } from './boletim';

@Component({
  selector: 'app-calcula-media',
  standalone: false,
  templateUrl: './calcula-media.html',
  styleUrl: './calcula-media.css'
})
export class CalculaMedia {
  mediaParcial:number| undefined
  situacao: string
  boletim:Boletim

  constructor(){
    this.boletim = new Boletim (0,0,0,0)
    this.mediaParcial= undefined
    this.situacao ='Cursando'
    
  }
  alterarNotas(b1:number , b2:number ,
              b3: number , b4:number){
    this.boletim.alterarBim1(b1)
    this.boletim.alterarBim2(b2)
    this.boletim.alterarBim2(b3)
    this.boletim.alterarBim2(b4)
  }



  
    calcularMediaParcial(b1:number,b2:number,
                         b3:number, b4:number){
      
      
      this.mediaParcial = this.boletim.calcularMediaParcial(b1, b2, b3, b4)

    
}
}