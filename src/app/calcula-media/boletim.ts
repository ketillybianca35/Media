export class Boletim{
    private bim1:number
    private bim2: number
    private bim3: number
    private bim4: number


    constructor(b1:number , b2:number,  b3:number,b4:number){
        this.bim1 = b1
        this.bim2 = b2
        this.bim3 = b3
        this.bim4 = b4
        this.calcularMediaParcial= this.calcularMediaParcial
        this.alterarSituacao= alterar
    }

    calcularMediaParcial(b1:number,b2:number,
                         b3:number, b4:number){
      this.mediaParcial=
      (b1 * 2 + b2 * 2 +b3 * 3 + b4 * 3)/10

      this.alterarSituacao(this.mediaParcial)

     }

     alterarSituacao(mp:number){
        if ( mp >= 60){
            this.situacao = 'Aprovado'
        }
        else if(mp >= 10){
           this.situacao = 'Avaliação Final'
        }
        else{
          this.situacao = 'Reprovado'
        }

     }
}