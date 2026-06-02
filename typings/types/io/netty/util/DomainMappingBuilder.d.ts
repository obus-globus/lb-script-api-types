import type { DomainNameMapping } from '../../../io/netty/util/DomainNameMapping.d.ts'
import type { DomainNameMappingBuilder } from '../../../io/netty/util/DomainNameMappingBuilder.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class DomainMappingBuilder<V extends Object | number | string | boolean> extends Object {
    constructor(arg0: V)
    constructor(arg0: number, arg1: V)
    // private builder: DomainNameMappingBuilder<V>;
    add(arg0: string, arg1: V): DomainMappingBuilder<V>;
    build(): DomainNameMapping<V>;
}