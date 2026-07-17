import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Entry } from '../../../../../net/irisshaders/iris/shaderpack/materialmap/Entry.d.ts'
import type { NamespacedId } from '../../../../../net/irisshaders/iris/shaderpack/materialmap/NamespacedId.d.ts'
export class BlockEntry extends Record implements Entry {
    static parse(paramarg0: string): Entry;
    constructor(id: NamespacedId, propertyPredicates: JavaMap<string, string>)
    // private id: NamespacedId;
    // private propertyPredicates: JavaMap<string, string>;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    id(): NamespacedId;
    propertyPredicates(): JavaMap<string, string>;
    toString(): string;
}