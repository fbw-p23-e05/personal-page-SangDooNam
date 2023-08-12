
                const konamiCode = ['ArrowUp', 'ArrowUp'];
                const endGameEvent= new Event('endGame');
                let konamiIndex = 0;
                let moveInterval;

                document.addEventListener('keydown', (event) => {
                    event.code === konamiCode[konamiIndex] ? konamiIndex++ : konamiIndex = 0;

                    if (konamiIndex === konamiCode.length) {
                        startGame(); disappearInstruction(); displayButton();
                    }

                });
                
                document.addEventListener('endGame', () => {
                    document.getElementById('instruction').style.display = 'block';
                    document.getElementById('stopbutton').style.display = 'none';

                });
            


                function startGame() {
                    document.getElementById('game').style.display = 'block';

                    let block = document.getElementById('block');
                    let position = 350;

                    moveInterval = setInterval(() => {
                        position -= 5;
                        block.style.top = position + 'px';

                        if (position < 0) {
                            position = 350;
                        }
                    }, 100); 
                }    

                function disappearInstruction() {
                    console.log('disappearInstruction function is called');
                    document.getElementById('instruction').style.display ='none';
                }
                
                function stopGame() {
                    document.getElementById('game').style.display = 'none';
                    if (moveInterval) {
                        clearInterval(moveInterval);
                    }
                    document.dispatchEvent(endGameEvent);
                }
                
                function displayButton() {
                    document.getElementById('stopbutton').style.display = 'flex';
                }

                
                    
                
           