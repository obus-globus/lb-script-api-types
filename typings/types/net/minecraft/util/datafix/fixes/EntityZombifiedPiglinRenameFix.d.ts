import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { RewriteResult } from '../../../../../com/mojang/datafixers/RewriteResult.d.ts'
import type { Typed } from '../../../../../com/mojang/datafixers/Typed.d.ts'
import type { Schema } from '../../../../../com/mojang/datafixers/schemas/Schema.d.ts'
import type { Type } from '../../../../../com/mojang/datafixers/types/Type.d.ts'
import type { BitSet } from '../../../../../java/util/BitSet.d.ts'
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { SimplestEntityRenameFix } from '../../../../../net/minecraft/util/datafix/fixes/SimplestEntityRenameFix.d.ts'
export class EntityZombifiedPiglinRenameFix extends SimplestEntityRenameFix {
    static RENAMED_IDS: JavaMap<string, string>;
    static checked<A extends unknown, B extends unknown>(paramarg0: string, paramarg1: Type<A>, paramarg2: Type<B>, paramarg3: (param0: Typed<Object>) => Typed<Object>, paramarg4: BitSet): RewriteResult<A, B>;
    constructor(outputSchema: Schema)
    rename(name: string): string;
}