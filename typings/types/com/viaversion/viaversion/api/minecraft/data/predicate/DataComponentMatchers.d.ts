import type { StructuredData } from '../../../../../../../com/viaversion/viaversion/api/minecraft/data/StructuredData.d.ts'
import type { DataComponentPredicate } from '../../../../../../../com/viaversion/viaversion/api/minecraft/data/predicate/DataComponentPredicate.d.ts'
import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class DataComponentMatchers extends Record {
    constructor(exactPredicates: StructuredData<Object>[], predicates: DataComponentPredicate[])
    // private exactPredicates: StructuredData<Object>[];
    // private predicates: DataComponentPredicate[];
    equals(arg0: Object | null): boolean;
    exactPredicates(): StructuredData<Object>[];
    hashCode(): number;
    predicates(): DataComponentPredicate[];
    toString(): string;
}