import { useState, useEffect } from 'react';
import { generateDeck, type CardData } from './data';
import { Package } from 'lucide-react';

function App() {
  const [cards, setCards] = useState<CardData[]>([]);
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [matchedPairs, setMatchedPairs] = useState<string[]>([]);
  const [moves, setMoves] = useState(0);

  // Initialize game
  useEffect(() => {
    startNewGame();
  }, []);

  const startNewGame = () => {
    setCards(generateDeck());
    setFlippedCards([]);
    setMatchedPairs([]);
    setMoves(0);
  };

  const handleCardClick = (index: number) => {
    // Prevent clicking if 2 cards are already flipped, or if card is already matched/flipped
    if (flippedCards.length === 2) return;
    if (flippedCards.includes(index) || matchedPairs.includes(cards[index].pairId)) return;

    const newFlipped = [...flippedCards, index];
    setFlippedCards(newFlipped);

    if (newFlipped.length === 2) {
      setMoves((m) => m + 1);
      const [firstIndex, secondIndex] = newFlipped;
      const firstCard = cards[firstIndex];
      const secondCard = cards[secondIndex];

      if (firstCard.pairId === secondCard.pairId) {
        // Match found!
        setTimeout(() => {
          setMatchedPairs((prev) => [...prev, firstCard.pairId]);
          setFlippedCards([]);
        }, 500); // Small delay to let user see the match
      } else {
        // No match
        setTimeout(() => {
          setFlippedCards([]);
        }, 1200); // Delay before flipping back
      }
    }
  };

  const isFlipped = (index: number) => {
    return flippedCards.includes(index) || matchedPairs.includes(cards[index].pairId);
  };

  const isMatched = (index: number) => {
    return matchedPairs.includes(cards[index].pairId);
  };

  const isGameWon = matchedPairs.length === 8 && cards.length > 0;

  return (
    <div className="app-container">
      <header className="header">
        <h1>Qualificar ES - Logística</h1>
        <p>Encontre os 8 símbolos de manuseio e seus significados!</p>
      </header>

      <div className="stats">
        <div>Movimentos: <span>{moves}</span></div>
        <div>Pares: <span>{matchedPairs.length} / 8</span></div>
      </div>

      <div className="grid-container">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`card-wrapper ${isFlipped(index) ? 'flipped' : ''} ${isMatched(index) ? 'matched' : ''}`}
            onClick={() => handleCardClick(index)}
          >
            <div className="card-inner">
              <div className="card-back">
                <Package size={80} color="#F58220" />
              </div>

              <div className="card-front">
                <div className="card-content">
                  {card.type === 'icon' ? (
                    <card.icon size={160} className="card-icon" />
                  ) : (
                    <span className="card-text">{card.content}</span>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {isGameWon && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>🎉 Parabéns! 🎉</h2>
            <p>Você completou o jogo com {moves} movimentos.</p>
            <button className="reset-btn" onClick={startNewGame}>
              Jogar Novamente
            </button>
          </div>
        </div>
      )}

      {/* Show reset button only if not won, just in case they want to restart */}
      {!isGameWon && (
        <button className="reset-btn" onClick={startNewGame}>
          Reiniciar Jogo
        </button>
      )}
    </div>
  );
}

export default App;
