import type { JavaMap } from '../../../JavaMap.d.ts'
import type { Mapping } from '../../../io/netty/util/Mapping.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class DomainWildcardMappingBuilder$ImmutableDomainWildcardMapping<V extends unknown> extends Object implements Mapping<string, V> {
    constructor(arg0: V, arg1: JavaMap<string, V>)
    // private defaultValue: V;
    // private map: JavaMap<string, V>;
    map(arg0: string): V;
    toString(): string;
}