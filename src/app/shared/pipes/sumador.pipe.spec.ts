import { SumadorPipe } from './sumador.pipe';

describe('SumadorPipe', () => {
  it('create an instance', () => {
    const pipe = new SumadorPipe();
    expect(pipe).toBeTruthy();
  });
});
