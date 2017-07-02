window.onload = function(){
/*============================================ Объявление объекта с настройками ==============================================================*/
	var _settings = {
		players: ['X', 'O'],
		winCombinations : [[1,2,3], [1,4,7], [1,5,9], [2,5,8], [3,5,7], [3,6,9], [4,5,6], [7,8,9]],
		posX : [],
		posO : [],
		headerMainPlayerTextPosition : document.querySelector('.header__game-Player'),
		gameClickableArea : document.querySelectorAll('.gameArea__placeForClickResult'),
		gameIterator : 0,
		winnerArea : document.querySelector('.winner-table__winnerArea'),
		clearButton : document.querySelector('.clearButton'),
	};
	_settings.startedPlayer = _settings.players[0];
	_settings.mainPlayer = _settings.startedPlayer;
	var t = 0;
	var n = 0;
	var winner = '';
/*============================================ Объявление переменных и функций ==============================================================*/
	function initialize(){
		// console.log(_settings.headerMainPlayerTextPosition);
		_settings.headerMainPlayerTextPosition.innerHTML = _settings.startedPlayer; // Инициализирую начало игры
	};
	function clearGameArea(){
		if(winner === _settings.players[0]){
			_settings.startedPlayer = _settings.players[1];
		}
		// initialize();
		for(l in _settings.gameClickableArea){
			_settings.gameClickableArea[l].innerHTML = '';
		}
		_settings.winnerArea.parentNode.classList.remove('active');
	};
	function mainGameLogic(){
		if(this.innerHTML !== '')//Делаю проверку на наличие данных в ячейке
			return
		else{
			this.innerHTML = _settings.mainPlayer; // записываю в ячейку ход игрока
			_settings.mainPlayer == _settings.players[0] ? _settings.posX.push(parseInt(this.getAttribute('data-gameAreaNumber'))) : _settings.posO.push(parseInt(this.getAttribute('data-gameAreaNumber')));
			// console.log(this.getAttribute('data-gameAreaNumber'));
			// console.log(_settings.posX);
			// console.log(_settings.posO);
			_settings.mainPlayer = _settings.mainPlayer == _settings.players[0] ? _settings.players[1] : _settings.players[0]; // изменяю игрока на другого
			_settings.headerMainPlayerTextPosition.innerHTML = _settings.mainPlayer; // записываю нового игрока в Header
			_settings.gameIterator++;// Изменяю количество совершённых ходов
			if(_settings.gameIterator >= 1){//Задаю событие, когда есть возможность победы одного игрока
				for(var k in _settings.winCombinations){
					_settings.gameClickableArea = document.querySelectorAll('.gameArea__placeForClickResult');
					// console.log(_settings.gameClickableArea);
					// console.log(_settings.winCombinations[k][1]);
					// console.log(_settings.gameClickableArea[_settings.winCombinations[k][n] - 1].innerHTML);
					// console.log(_settings.gameClickableArea[_settings.winCombinations[k][n + 1] - 1].innerHTML);
					// console.log(_settings.gameClickableArea[_settings.winCombinations[k][n + 2] - 1].innerHTML);
					if(_settings.gameClickableArea[_settings.winCombinations[k][n] - 1].innerHTML === _settings.gameClickableArea[_settings.winCombinations[k][n + 1] - 1].innerHTML){
						if(_settings.gameClickableArea[_settings.winCombinations[k][n] - 1].innerHTML === _settings.gameClickableArea[_settings.winCombinations[k][n + 2] - 1].innerHTML){
							if(_settings.gameClickableArea[_settings.winCombinations[k][n] - 1].innerHTML != ''){
								if(_settings.gameClickableArea[_settings.winCombinations[k][n] - 1].innerHTML != undefined){
									var winner = _settings.gameClickableArea[_settings.winCombinations[k][n] - 1].innerHTML;
									_settings.winnerArea.innerHTML = winner;
									_settings.winnerArea.parentNode.classList.add('active');
								}
							}
						}
					}
					// console.log(_settings.winCombinations[k]);
					n = 0;
					// console.log(_settings.winCombinations[k][n]);
					// console.log(_settings.winCombinations[k][++n]);
					// console.log(_settings.winCombinations[k][++n]);
					// console.log(_settings.gameClickableArea[_settings.winCombinations[k][n] - 1].innerHTML);
					// console.log(_settings.gameClickableArea[_settings.winCombinations[k][++n] - 1].innerHTML);
					// console.log(_settings.gameClickableArea[_settings.winCombinations[k][++n] - 1].innerHTML);
						// console.log(_settings.gameClickableArea[_settings.winCombinations[k][n] - 1].innerHTML);
						// console.log(n);
						// console.log(_settings.gameClickableArea[_settings.winCombinations[k][++n] - 1].innerHTML);
						// console.log(n);
						// console.log(_settings.gameClickableArea[_settings.winCombinations[k][++n] - 1].innerHTML);
						// console.log(n);
						// n = 0;
						// console.log(_settings.gameClickableArea[_settings.winCombinations[k][n] - 1].innerHTML === _settings.gameClickableArea[_settings.winCombinations[k][++n] - 1].innerHTML /*=== _settings.gameClickableArea[_settings.winCombinations[k][++n] - 1].innerHTML != undefined*/);
						// console.log('X' === 'O');
						// console.log(_settings.gameClickableArea[parseInt(_settings.winCombinations[k][n]) - 1].innnerHTML);
						// console.log(_settings.gameClickableArea[parseInt(_settings.winCombinations[k][n + 1]) - 1].innnerHTML);
						// console.log(_settings.gameClickableArea[parseInt(_settings.winCombinations[k][n + 2]) - 1].innnerHTML);
						// if(_settings.gameClickableArea[parseInt(_settings.winCombinations[k][n]) - 1].innnerHTML === _settings.gameClickableArea[parseInt(_settings.winCombinations[k][n + 1]) - 1].innnerHTML && _settings.gameClickableArea[parseInt(_settings.winCombinations[k][n + 1]) - 1].innnerHTML === _settings.gameClickableArea[parseInt(_settings.winCombinations[k][n + 2]) - 1].innnerHTML && _settings.gameClickableArea[parseInt(_settings.winCombinations[k][n]) - 1].innnerHTML != ''){
						// 	console.log(122);
						// 	// return;
						// }
						// else{
						// 	return;
						// }
				}
			}
			// console.log(_settings.gameIterator);
			// _settings.mainPlayer = _settings.players[1]
		}
		// console.log(this.innerHTML === '');
	}
/*============================================ Вызов функций ==============================================================*/
	initialize(); // Инициализирую игровое пространство
	for(var i in _settings.gameClickableArea){
		_settings.gameClickableArea[i].onclick = mainGameLogic; // задаю событие на клик по игровой области
	}
	_settings.clearButton.onclick = clearGameArea;
};