let piece = 'Tower';

switch (piece.toLocaleLowerCase()) {
    case 'pawn':
        console.log('Peão: anda somente 1 casa e somente para frente, come outra peça apenas na diagonal');
        break;
    case 'bishop':
        console.log('Bispo: anda quantas casa quiser, se move e come apenas na diagonal');
        break;
    case 'tower':
        console.log('Torre: anda quantas casas quiser, se move e come na horizontal e vertical');
        break;
    case 'horse':
        console.log('Cavalo: se move em L(3 por 2), come a peça que cair em cima');
        break;
    case 'queen':
        console.log('Rainha: anda quantas casa quiser, se move e come em qualquer direção');
        break;
    case 'king':
        console.log('Rei: anda somente uma casa, se move e come em qualquer direção');
        break;    
}