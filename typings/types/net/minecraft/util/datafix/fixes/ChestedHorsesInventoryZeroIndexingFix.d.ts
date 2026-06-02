import type { DataFix } from '../../../../../com/mojang/datafixers/DataFix.d.ts'
import type { OpticFinder } from '../../../../../com/mojang/datafixers/OpticFinder.d.ts'
import type { RewriteResult } from '../../../../../com/mojang/datafixers/RewriteResult.d.ts'
import type { TypeRewriteRule } from '../../../../../com/mojang/datafixers/TypeRewriteRule.d.ts'
import type { Schema } from '../../../../../com/mojang/datafixers/schemas/Schema.d.ts'
import type { Type } from '../../../../../com/mojang/datafixers/types/Type.d.ts'
import type { Either } from '../../../../../com/mojang/datafixers/util/Either.d.ts'
import type { Pair } from '../../../../../com/mojang/datafixers/util/Pair.d.ts'
import type { Unit } from '../../../../../com/mojang/datafixers/util/Unit.d.ts'
import type { Dynamic } from '../../../../../com/mojang/serialization/Dynamic.d.ts'
import type { BitSet } from '../../../../../java/util/BitSet.d.ts'
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ChestedHorsesInventoryZeroIndexingFix extends DataFix {
    static checked(paramarg0: string, paramarg1: Type<Object>, paramarg2: Type<Object>, paramarg3: (param0: Object | null) => Object | null, paramarg4: BitSet): RewriteResult<Object, Object>;
    constructor(v3807: Schema)
    // private horseLikeInventoryIndexingFixer(itemStackFinder: OpticFinder<Pair<string, Pair<Either<Pair<string, string>, Unit>, Pair<Either<Object, Unit>, Dynamic<Object>>>>>, schema: Type<Object>, horseId: string): TypeRewriteRule;
    makeRule(): TypeRewriteRule;
}