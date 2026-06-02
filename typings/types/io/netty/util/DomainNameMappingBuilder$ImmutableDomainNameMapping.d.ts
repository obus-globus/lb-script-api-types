import type { DomainNameMapping } from '../../../io/netty/util/DomainNameMapping.d.ts'
import type { StringBuilder } from '../../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class DomainNameMappingBuilder$ImmutableDomainNameMapping<V extends Object | number | string | boolean> extends DomainNameMapping<V> {
    private constructor(arg0: V, arg1: { [key: string]: V })
    // private domainNamePatterns: string[];
    // private map: { [key: string]: V };
    // private values: V[];
    add(arg0: string, arg1: V): DomainNameMapping<V>;
    // private appendMapping(arg0: StringBuilder, arg1: number): StringBuilder;
    asMap(): { [key: string]: V };
    map(arg0: string): V;
    toString(): string;
}