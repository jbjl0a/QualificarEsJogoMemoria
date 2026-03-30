import * as Icons from './icons';

export type CardType = 'icon' | 'text';

export interface CardData {
  id: string;
  pairId: string;
  type: CardType;
  content: string;
  icon?: any;
}

const logisticsSymbols = [
  { id: '1', name: 'Frágil', icon: Icons.Fragil },
  { id: '2', name: 'Este lado para cima', icon: Icons.EsteLadoParaCima },
  { id: '3', name: 'Mantenha seco', icon: Icons.MantenhaSeco },
  { id: '4', name: 'Proteger do calor', icon: Icons.ProtegerCalor },
  { id: '5', name: 'Não usar ganchos', icon: Icons.NaoUsarGanchos },
  { id: '6', name: 'Não rolar', icon: Icons.NaoRolar },
  { id: '7', name: 'Centro de gravidade', icon: Icons.CentroGravidade },
  { id: '8', name: 'Não empilhar', icon: Icons.NaoEmpilhar },
];

export const generateDeck = (): CardData[] => {
  const deck: CardData[] = [];

  logisticsSymbols.forEach((symbol) => {
    // Generate Icon Card
    deck.push({
      id: `${symbol.id}-icon`,
      pairId: symbol.id,
      type: 'icon',
      content: symbol.name,
      icon: symbol.icon,
    });

    // Generate Text Card
    deck.push({
      id: `${symbol.id}-text`,
      pairId: symbol.id,
      type: 'text',
      content: symbol.name,
    });
  });

  // Shuffle array
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }

  return deck;
};
