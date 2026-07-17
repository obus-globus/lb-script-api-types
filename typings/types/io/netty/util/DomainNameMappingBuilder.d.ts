import type { JavaMap } from '../../../JavaMap.d.ts'
import type { DomainNameMapping } from '../../../io/netty/util/DomainNameMapping.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class DomainNameMappingBuilder<V extends unknown> extends Object {
    constructor(arg0: V)
    constructor(arg0: number, arg1: V)
    // private defaultValue: V;
    // private map: JavaMap<string, V>;
    add(arg0: string, arg1: V): DomainNameMappingBuilder<V>;
    build(): DomainNameMapping<V>;
}