import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Value } from '../../../../org/graalvm/polyglot/Value.d.ts'
import type { ProxyIterable } from '../../../../org/graalvm/polyglot/proxy/ProxyIterable.d.ts'
export interface ProxyArray extends Object, ProxyIterable{
    get(index: number): Object;
    getIterator(): Object;
    getSize(): number;
    remove(index: number): boolean;
    set(index: number, value: Value): void;
}