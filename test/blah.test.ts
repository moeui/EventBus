import { eventBus } from '../src';

describe('eventBus on', () => {
  it('works', done => {
    eventBus.on('change', (res: {type: string, target: string}) => {
      try {
        expect(res).toStrictEqual({type: 'change', target: 'test'});
        done();
      } catch (error) {
        done(error);
      }
    });
    eventBus.emit('change', 'test');
  });
  it('has true', done => {
    const fn =  () => {}
    eventBus.on('off', fn);
    const n = eventBus.has('off', fn);
    expect(n).toBeTruthy();
    done()
  });
  it('off false', done => {
    const fn =  () => {}
    eventBus.on('off', fn);
    eventBus.off('off', fn)
    const n = eventBus.has('off', fn);
    expect(n).toBeFalsy();
    done()
  });
  it('once', done => {
    let n = 0
    const fn =  (res: {type: string, target: number}) => {
      n = res.target
    }
    eventBus.once('off', fn);
    eventBus.emit('off', 1)
    expect(n).toBe(1);
    done()
    eventBus.emit('off', 2)
    expect(n).toBe(1);
    done()
  });
});
