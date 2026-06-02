import type { DataFix } from '../../../../../com/mojang/datafixers/DataFix.d.ts'
import type { RewriteResult } from '../../../../../com/mojang/datafixers/RewriteResult.d.ts'
import type { TypeRewriteRule } from '../../../../../com/mojang/datafixers/TypeRewriteRule.d.ts'
import type { Schema } from '../../../../../com/mojang/datafixers/schemas/Schema.d.ts'
import type { Type } from '../../../../../com/mojang/datafixers/types/Type.d.ts'
import type { BitSet } from '../../../../../java/util/BitSet.d.ts'
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class LeavesFix extends DataFix {
    static checked(paramarg0: string, paramarg1: Type<Object>, paramarg2: Type<Object>, paramarg3: (param0: Object | null) => Object | null, paramarg4: BitSet): RewriteResult<Object, Object>;
    static getIndex(paramx: number, paramy: number, paramz: number): number;
    static getSideMask(paramwest: boolean, parameast: boolean, paramnorth: boolean, paramsouth: boolean): number;
    constructor(outputSchema: Schema, changesType: boolean)
    // private getX(index: number): number;
    // private getY(index: number): number;
    // private getZ(index: number): number;
    makeRule(): TypeRewriteRule;
}