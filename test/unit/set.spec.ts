import { assoc, lens, prop, set } from '@apestaartje/lens/lens';

describe('set', (): void => {
    it('create a setter from a lens', (): void => {
        type Foo = {
            foo: string;
        };

        const a = {
            foo: 'bar',
        };

        const getter = prop<Foo>('foo');
        const setter = assoc<Foo>('foo');
        const l = lens<Foo>(getter, setter);
        const s = set(l, 'test', a);

        expect(a.foo).toBe('bar');
        expect(s.foo).toBe('test');
    });
});
