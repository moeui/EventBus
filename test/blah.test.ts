import { eventBus } from '../src';

describe('on', () => {
  it('测试回调', done => {
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
