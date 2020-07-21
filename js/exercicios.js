      
      
      /*
      const numeros = [2, 3, 6, 5, 10];
      let novoArrayNumeros = []

      const novoArrayMap = numeros.map(function(numero){
        return numero * 2;
      });

      console.log('novoArrayMap', novoArrayMap);

      const nomes = ['Ayrton', 'Teshima', 'Teste', 'Fulano'];

      const nomeMinusculos = nomes.map(function(nome){
        return nome.toLowerCase();
      })

      console.log(nomeMinusculos);
      */



      
      const numeros = [2, 3, 6, 5, 10];
      let mult2 = [];


      for(let i = 0; i < numeros.length; i++){
        if (numeros[i] % 2 === 0){
          mult2.push(numeros[i]);
        }
      }
      

      const numerosFiltrados = numeros.filter(function(numero){
        return numero % 2 === 0;
      })

      //console.log('numerosFiltrados', numerosFiltrados);
    
      const arrayMapFilter = numeros
      .filter(numero => numero % 2 === 0)
      .map(numero => numero * 2);

      //console.log('arrayMapFilter', arrayMapFilter);

    
      let soma = 0;

      for(let i = 0; i < numeros.length; i++){
        soma = soma + numeros[i];
      }
      console.log('for normal', soma);

      const somaReduce = numeros.reduce(function(valorAcumulador, valorArray) {
        return valorAcumulador + valorArray;
      }, 0)

      console.log('somaReduce', somaReduce);



      const pessoas = [
        {
          nome: 'Ayrton',
          idade: 27
        },

        {
          nome: 'João',
          idade: 14
        },

        {
          nome: 'Maria',
          idade: 23
        },

        {
          nome: 'Joana',
          idade: 21
        },

        {
          nome: 'Lucas',
          idade: 32
        },

        {
          nome: 'Mateus',
          idade: 15
        },

        {
          nome: 'Isa',
          idade: 23
        },

        {
          nome: 'Luiza',
          idade: 17
        }
      ];

      const pessoasAgrupadas = pessoas.reduce(function(valorAcumulador, valorArray) {
        const propMaiorOuMenor = valorArray.idade >= 18 ? 'maiores' : 'menores';
        console.log(propMaiorOuMenor);
        
        valorAcumulador[propMaiorOuMenor].push(valorArray)
        return valorAcumulador;

      }, { maiores: [], menores: []})

      console.log('pessoasAgrupadas', pessoasAgrupadas);