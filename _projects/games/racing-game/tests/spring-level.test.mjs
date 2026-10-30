import test from 'node:test';
import assert from 'node:assert/strict';
import GameLevelSpring from '../levels/spring-level.js';
import { createKeyboardPlayer } from '@assets/js/GameEnginev1.1/test/keyboard-test-helper.mjs';

test('spring level includes a stationary flower beside the track', () => {
  const level = new GameLevelSpring({
    path: '',
    innerWidth: 740,
    innerHeight: 585,
  });
  assert.equal(level.classes.filter(({ class: ObjectType }) => ObjectType.name === 'Player').length, 2);

  const flowers = level.classes.filter(({ class: ObjectType }) => ObjectType.name === 'FlowerNpc');
  const tracksideFlower = flowers.find(({ data }) => data.id === 'flower-trackside');

  assert.equal(flowers.length, 2);
  assert.ok(tracksideFlower);
  assert.deepEqual(tracksideFlower.data.INIT_POSITION, { x: 0.69, y: 0.36 });
  assert.equal(tracksideFlower.data.walkingArea, null);
});

test('the spring car slowdown expires after five seconds', () => {
  const level = new GameLevelSpring({ path: '', innerWidth: 740, innerHeight: 585 });
  const SpringPlayer = level.classes.find(({ class: ObjectType }) => ObjectType.name === 'Player').class;
  const player = createKeyboardPlayer(SpringPlayer);
  player.applyTemporarySlowdown();

  assert.equal(player.getSlowdownMultiplier(player.slowdownUntil - 1), 0.65);
  assert.equal(player.getSlowdownMultiplier(player.slowdownUntil), 1);
});

test('the spring-only slowdown scales movement without changing car velocity', () => {
  const level = new GameLevelSpring({ path: '', innerWidth: 740, innerHeight: 585 });
  const SpringPlayer = level.classes.find(({ class: ObjectType }) => ObjectType.name === 'Player').class;
  const player = createKeyboardPlayer(SpringPlayer);
  Object.assign(player.gameEnv, { innerWidth: 100, innerHeight: 100 });
  player.position = { x: 10, y: 10 };
  player.velocity = { x: 4, y: 0 };
  player.applyTemporarySlowdown();

  player.move();

  assert.ok(Math.abs(player.position.x - 12.6) < 1e-9);
  assert.equal(player.velocity.x, 4);
});
