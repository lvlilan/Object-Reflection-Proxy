import orderByProps from '../src/js/orderByProps';

describe('orderByProps', () => {
  const obj = {
    name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
  };

  test('сортирует по order, остальные — по алфавиту', () => {
    expect(orderByProps(obj, ['name', 'level'])).toEqual([
      { key: 'name', value: 'мечник' },
      { key: 'level', value: 2 },
      { key: 'attack', value: 80 },
      { key: 'defence', value: 40 },
      { key: 'health', value: 10 },
    ]);
  });

  test('пустой массив order — всё по алфавиту', () => {
    expect(orderByProps(obj, [])).toEqual([
      { key: 'attack', value: 80 },
      { key: 'defence', value: 40 },
      { key: 'health', value: 10 },
      { key: 'level', value: 2 },
      { key: 'name', value: 'мечник' },
    ]);
  });

  test('order содержит ключ, которого нет в объекте — он игнорируется', () => {
    expect(orderByProps(obj, ['name', 'unknown'])).toEqual([
      { key: 'name', value: 'мечник' },
      { key: 'attack', value: 80 },
      { key: 'defence', value: 40 },
      { key: 'health', value: 10 },
      { key: 'level', value: 2 },
    ]);
  });

  test('пустой объект', () => {
    expect(orderByProps({}, ['name'])).toEqual([]);
  });
});