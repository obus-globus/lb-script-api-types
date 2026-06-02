import type { Mapping } from '../../../io/netty/util/Mapping.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class DomainNameMapping<V extends Object | number | string | boolean> extends Object implements Mapping<string, V> {
    constructor(arg0: V)
    constructor(arg0: number, arg1: V)
    constructor(arg0: { [key: string]: V }, arg1: V)
    // private defaultValue: V;
    // private map: { [key: string]: V };
    // private unmodifiableMap: { [key: string]: V };
    add(arg0: string, arg1: V): DomainNameMapping<V>;
    asMap(): { [key: string]: V };
    map(arg0: string): V;
    toString(): string;
}