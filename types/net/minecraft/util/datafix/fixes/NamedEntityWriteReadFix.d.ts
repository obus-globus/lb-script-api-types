import type { DSL$TypeReference } from '../../../../../com/mojang/datafixers/DSL$TypeReference.d.ts'
import type { DataFix } from '../../../../../com/mojang/datafixers/DataFix.d.ts'
import type { OpticFinder } from '../../../../../com/mojang/datafixers/OpticFinder.d.ts'
import type { RewriteResult } from '../../../../../com/mojang/datafixers/RewriteResult.d.ts'
import type { TypeRewriteRule } from '../../../../../com/mojang/datafixers/TypeRewriteRule.d.ts'
import type { Schema } from '../../../../../com/mojang/datafixers/schemas/Schema.d.ts'
import type { Type } from '../../../../../com/mojang/datafixers/types/Type.d.ts'
import type { Dynamic } from '../../../../../com/mojang/serialization/Dynamic.d.ts'
import type { BitSet } from '../../../../../java/util/BitSet.d.ts'
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class NamedEntityWriteReadFix extends DataFix {
    static checked(paramarg0: string, paramarg1: Type<Object>, paramarg2: Type<Object>, paramarg3: (param0: Object | null) => Object | null, paramarg4: BitSet): RewriteResult<Object, Object>;
    constructor(outputSchema: Schema, changesType: boolean, name: string, type: DSL$TypeReference, entityName: string)
    // private entityName: string;
    // private name: string;
    // private type: DSL$TypeReference;
    // private fix(inputEntityType: Type<S>, outputEntityType: Type<T>, patchedEntityType: Type<Object>, choiceFinder: OpticFinder<A>): TypeRewriteRule;
    fix(input: Dynamic<T>): Dynamic<T>;
    makeRule(): TypeRewriteRule;
}