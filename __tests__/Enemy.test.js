const Enemy = require('../lib/Enemy.js');
const Potion = require('../lib/Potion.js');

jest.mock('../lib/Potion.js');

test('creates an enemy object', () => {
  const enemy = new Enemy('Goblin', 'sword');

  expect(enemy.name).toBe('Goblin');
  expect(enemy.weapon).toBe('sword');
  expect(enemy.health).toEqual(expect.any(Number));
  expect(enemy.strength).toEqual(expect.any(Number));
  expect(enemy.agility).toEqual(expect.any(Number));
  expect(enemy.potion).toEqual(expect.any(Object));
});

test('Gets enemys health value', () => {
  const enemy = new Enemy('Goblin', 'sword');

  expect(enemy.getHealth()).toEqual(expect.stringContaining(enemy.health.toString()));
});

test('Check if player is alive or not', () => {
  const enemy = new Enemy('Goblin', 'sword');

  expect(enemy.isAlive()).toBeTruthy();

  enemy.health = 0;

  expect(enemy.isAlive()).toBeFalsy();
});

test('Subtracts from enemy health', () => {
  const enemy = new Enemy('Goblin', 'sword');
  const oldHealth = enemy.health;

  enemy.reduceHealth(5);

  expect(enemy.health).toBe(oldHealth - 5);

  enemy.reduceHealth(99999);

  expect(enemy.health).toBe(0);
});

test('Gets enemy attack value', () => {
  const enemy = new Enemy('Goblin', 'sword');

  enemy.strength = 10;

  expect(enemy.getAttackValue()).toBeGreaterThanOrEqual(5);
  expect(enemy.getAttackValue()).toBeLessThanOrEqual(15);
});

test('Gets a description of the enemy', () => {
  const enemy = new Enemy('Goblin', 'sword');

  expect(enemy.getDescription()).toEqual(expect.stringContaining('Goblin'));
  expect(enemy.getDescription()).toEqual(expect.stringContaining('sword'));
});
