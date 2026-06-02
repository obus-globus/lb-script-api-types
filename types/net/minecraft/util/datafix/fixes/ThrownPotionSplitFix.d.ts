import type { RewriteResult } from '../../../../../com/mojang/datafixers/RewriteResult.d.ts'
import type { Typed } from '../../../../../com/mojang/datafixers/Typed.d.ts'
import type { Schema } from '../../../../../com/mojang/datafixers/schemas/Schema.d.ts'
import type { Type } from '../../../../../com/mojang/datafixers/types/Type.d.ts'
import type { Pair } from '../../../../../com/mojang/datafixers/util/Pair.d.ts'
import type { BitSet } from '../../../../../java/util/BitSet.d.ts'
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Supplier } from '../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { EntityRenameFix } from '../../../../../net/minecraft/util/datafix/fixes/EntityRenameFix.d.ts'
import type { ThrownPotionSplitFix$ItemIdFinder } from '../../../../../net/minecraft/util/datafix/fixes/ThrownPotionSplitFix$ItemIdFinder.d.ts'
export class ThrownPotionSplitFix extends EntityRenameFix {
    static checked(paramarg0: string, paramarg1: Type<Object>, paramarg2: Type<Object>, paramarg3: (param0: Object | null) => Object | null, paramarg4: BitSet): RewriteResult<Object, Object>;
    constructor(outputSchema: Schema)
    // private itemIdFinder: () => ThrownPotionSplitFix$ItemIdFinder;
    fix(name: string, entity: Typed<Object>): Pair<string, Typed<Object>>;
}