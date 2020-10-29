const { Copiar } = require('./Copiar.ts');
    const btnCopy = document.getElementById('btnCopy');
      
    let arquivo;
    let destino;
  
    document.getElementById('i_file').onchange = function(event){
      var result = event.target.files[0];
        return arquivo = result;
    }
    document.getElementById('i_file2').onchange = function(event){
      var result = event.target.files[0];
        return destino = result;
    }
    
    //Copia estática, passando o path da pasta
    //const arquivo = "./src/myArchive"
    //const destino = "./src/teste"
  btnCopy.onclick = function(){
   Copiar(arquivo,destino)
  }


  
  