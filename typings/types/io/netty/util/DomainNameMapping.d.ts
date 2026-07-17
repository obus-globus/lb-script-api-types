import type { JavaMap } from '../../../JavaMap.d.ts'
import type { Mapping } from '../../../io/netty/util/Mapping.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class DomainNameMapping<V extends unknown> extends Object implements Mapping<string, V> {
    constructor(arg0: V)
    constructor(arg0: number, arg1: V)
    constructor(arg0: JavaMap<string, V>, arg1: V)
    // private defaultValue: V;
    // private map: JavaMap<string, V>;
    // private unmodifiableMap: JavaMap<string, V>;
    add(arg0: string, arg1: V): DomainNameMapping<V>;
    asMap(): JavaMap<string, V>;
    map(arg0: string): V;
    toString(): string;
}