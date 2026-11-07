import extractSpecial from '../src/js/extractSpecial';

describe('extractSpecial', () => {
  const character = {
    name: 'Лучник',
    type: 'Bowman',
    health: 50,
    level: 3,
    attack: 40,
    defence: 10,
    special: [
      {
        id: 8,
        name: 'Двойной выстрел',
        icon: 'http://...',
        description: 'Двойной выстрел наносит двойной урон',
      },
      {
        id: 9,
        name: 'Нокаутирующий удар',
        icon: 'http://...',
      },
    ],
  };

  test('извлекает id, name, icon, description', () => {
    expect(extractSpecial(character)).toEqual([
      {
        id: 8,
        name: 'Двойной выстрел',
        icon: 'http://...',
        description: 'Двойной выстрел наносит двойной урон',
      },
      {
        id: 9,
        name: 'Нокаутирующий удар',
        icon: 'http://...',
        description: 'Описание недоступно',
      },
    ]);
  });

  test('подставляет "Описание недоступно", если description нет', () => {
    const result = extractSpecial(character);
    expect(result[1].description).toBe('Описание недоступно');
  });

  test('пустой массив special', () => {
    expect(extractSpecial({ special: [] })).toEqual([]);
  });
});