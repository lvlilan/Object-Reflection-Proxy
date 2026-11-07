import orderByProps from './js/orderByProps';
import extractSpecial from './js/extractSpecial';

const obj = { name: 'мечник', health: 10, level: 2, attack: 80, defence: 40 };
console.log(orderByProps(obj, ['name', 'level']));

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
console.log(extractSpecial(character));