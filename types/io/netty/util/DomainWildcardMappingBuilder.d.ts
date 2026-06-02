import type { Mapping } from '../../../io/netty/util/Mapping.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class DomainWildcardMappingBuilder<V extends Object | number | string | boolean> extends Object {
    constructor(arg0: V)
    constructor(arg0: number, arg1: V)
    // private defaultValue: V;
    // private map: { [key: string]: V };
    add(arg0: string, arg1: V): DomainWildcardMappingBuilder<V>;
    build(): Mapping<string, V>;
    // private normalizeHostName(arg0: string): string;
}