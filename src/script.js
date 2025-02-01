
// Variáveis para armazenar o nome e a quantidade de XP do herói
const nome_Heroi = "Richard Love";
const xp_Heroi = 10000;   // Altere o valor de XP para testar diferentes níveis


// Variável para armazenar o nível do herói
let nivel_Heroi ;


//laço de repetição para xp_Heroi
for(let xp = 1; xp <= xp_Heroi; xp++){
    if(xp >= 1 && xp <= 1000){
        nivel_Heroi = "FERRO";
    } else if(xp >= 1001 && xp <= 2000){
        nivel_Heroi = "BRONZE";
    } else if(xp >= 2001 && xp <= 5000){
        nivel_Heroi = "PRATA";
    } else if(xp >= 5001 && xp <= 6000){
        nivel_Heroi = "OURO";
    } else if(xp >= 6001 && xp <= 7000){
        nivel_Heroi = "PRATINA";
    } else if(xp >= 7001 && xp <= 8000){
        nivel_Heroi = "ASCENDENTE";
    } else if(xp >= 8001 && xp <= 9000){
        nivel_Heroi = "CHANCELLOR";
    } else if(xp >= 9001 && xp <= 10000){    
        nivel_Heroi = "IMORTAL";
    } else {
        nivel_Heroi = "RADIANTE";
    } 
    
}

// Mostrando o resultado
console.log(`O Herói de nome ${nome_Heroi} está no nível ${nivel_Heroi}`);