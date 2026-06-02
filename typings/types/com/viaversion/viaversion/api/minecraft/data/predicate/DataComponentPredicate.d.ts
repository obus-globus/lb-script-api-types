import type { Tag } from '../../../../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { DataComponentPredicate$PredicateType } from '../../../../../../../com/viaversion/viaversion/api/minecraft/data/predicate/DataComponentPredicate$PredicateType.d.ts'
import type { Type } from '../../../../../../../com/viaversion/viaversion/api/type/Type.d.ts'
import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class DataComponentPredicate extends Record {
    static ARRAY_TYPE1_21_11: Type<(Object | null)[]>;
    static ARRAY_TYPE1_21_5: Type<(Object | null)[]>;
    static TYPE1_21_11: Type<DataComponentPredicate>;
    static TYPE1_21_5: Type<DataComponentPredicate>;
    constructor(type: DataComponentPredicate$PredicateType, predicate: Tag)
    constructor(arg0: number, arg1: Tag)
    // private predicate: Tag;
    // private type: DataComponentPredicate$PredicateType;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    predicate(): Tag;
    toString(): string;
    type(): DataComponentPredicate$PredicateType;
}