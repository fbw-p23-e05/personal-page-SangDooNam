
                const konamiCode = ['ArrowUp', 'ArrowUp'];
                let konamiIndex = 0;
                let moveInterval;

                document.addEventListener('keydown', (event) => {
                    event.code === konamiCode[konamiIndex] ? konamiIndex++ : konamiIndex = 0;

                    if (konamiIndex === konamiCode.length) {
                        startGame();
                    }
                });

                function startGame() {
                    document.getElementById('game').style.display = 'block';

                    let block = document.getElementById('block');
                    let position = 0;

                    moveInterval = setInterval(() => {
                        position += 5;
                        block.style.top = position + 'px';

                        if (position > 350) {
                            position = 0;
                        }
                    }, 100); 
                }    
                
                function stopGame() {
                    document.getElementById('game').style.display = 'none';
                    if (moveInterval) {
                        clearInterval(moveInterval);
                    }
                }
                
           