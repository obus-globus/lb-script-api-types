import type { Mapping } from '../../../io/netty/util/Mapping.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class DomainWildcardMappingBuilder$ImmutableDomainWildcardMapping<V extends Object | number | string | boolean> extends Object implements Mapping<string, V> {
    constructor(arg0: V, arg1: { [key: string]: V })
    // private defaultValue: V;
    // private map: { [key: string]: V };
    map(arg0: string): V;
    toString(): string;
}