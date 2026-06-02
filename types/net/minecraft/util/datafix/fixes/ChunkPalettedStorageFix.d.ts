import type { DataFix } from '../../../../../com/mojang/datafixers/DataFix.d.ts'
import type { RewriteResult } from '../../../../../com/mojang/datafixers/RewriteResult.d.ts'
import type { TypeRewriteRule } from '../../../../../com/mojang/datafixers/TypeRewriteRule.d.ts'
import type { Schema } from '../../../../../com/mojang/datafixers/schemas/Schema.d.ts'
import type { Type } from '../../../../../com/mojang/datafixers/types/Type.d.ts'
import type { Dynamic } from '../../../../../com/mojang/serialization/Dynamic.d.ts'
import type { BitSet } from '../../../../../java/util/BitSet.d.ts'
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ChunkPalettedStorageFix extends DataFix {
    static checked(paramarg0: string, paramarg1: Type<Object>, paramarg2: Type<Object>, paramarg3: (param0: Object | null) => Object | null, paramarg4: BitSet): RewriteResult<Object, Object>;
    static getName(paramstate: Dynamic<Object>): string;
    static getProperty(paramstate: Dynamic<Object>, paramproperty: string): string;
    static getSideMask(paramwest: boolean, parameast: boolean, paramnorth: boolean, paramsouth: boolean): number;
    static idFor(paramstates: (Object | null)[], paramstate: Dynamic<Object>): number;
    constructor(outputSchema: Schema, changesType: boolean)
    // private fix(input: Dynamic<Object>): Dynamic<Object>;
    makeRule(): TypeRewriteRule;
}