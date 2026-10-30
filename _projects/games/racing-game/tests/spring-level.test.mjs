import test from 'node:test';
import assert from 'node:assert/strict';
import GameLevelSpring from '../levels/spring-level.js';

test('spring level includes a stationary flower beside the track', () => {
  const level = new GameLevelSpring({
    path: '',
    innerWidth: 740,
    innerHeight: 585,
  });
  const flowers = level.classes.filter(({ class: ObjectType }) => ObjectType.name === 'FlowerNpc');
  const tracksideFlower = flowers.find(({ data }) => data.id === 'flower-trackside');

  assert.equal(flowers.length, 2);
  assert.ok(tracksideFlower);
  assert.deepEqual(tracksideFlower.data.INIT_POSITION, { x: 0.69, y: 0.36 });
  assert.equal(tracksideFlower.data.walkingArea, null);
});
