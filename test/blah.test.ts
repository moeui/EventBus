import { eventBus } from '../src';

describe('eventBus on', () => {
  it('works', done => {
    eventBus.on('change', (res: string) => {
      console.log(res);
      try {
        expect(res).toBe('test');
        done();
      } catch (error) {
        done(error);
      }
    });
    eventBus.emit('change', 'test');
  });
});
