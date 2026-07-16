import type { OpticFinder } from '../../../../com/mojang/datafixers/OpticFinder.d.ts'
import type { Typed } from '../../../../com/mojang/datafixers/Typed.d.ts'
import type { Type } from '../../../../com/mojang/datafixers/types/Type.d.ts'
import type { Dynamic } from '../../../../com/mojang/serialization/Dynamic.d.ts'
import type { DynamicOps } from '../../../../com/mojang/serialization/DynamicOps.d.ts'
import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { UnaryOperator } from '../../../../java/util/function/UnaryOperator.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ExtraDataFixUtils extends Object {
    static blockState(paramid: string): Dynamic<Object>;
    static blockState(paramid: string, paramproperties: { [key: string]: string }): Dynamic<Object>;
    static cast(paramtype: Type<Object>, paramtyped: Typed<Object>): Typed<Object>;
    static cast(paramtype: Type<Object>, paramvalue: Object, paramops: DynamicOps<Object>): Typed<Object>;
    static chainAllFilters(paramfixers: (param0: Typed<Object>) => Typed<Object>[]): (param0: Typed<Object>) => Typed<Object>;
    static createBlockPos(paramdynamic: Dynamic<Object>, paramx: number, paramy: number, paramz: number): Dynamic<Object>;
    static dyeColorIdToName(paramid: number): string;
    static fixBlockPos(parampos: Dynamic<Object>): Dynamic<Object>;
    static fixInlineBlockPos(paraminput: Dynamic<Object>, paramfieldX: string, paramfieldY: string, paramfieldZ: string, paramnewField: string): Dynamic<Object>;
    static fixStringField(paramdynamic: Dynamic<Object>, paramfieldName: string, paramfix: (param0: string) => Object | null): Dynamic<Object>;
    static patchSubType(paramtype: Type<Object>, paramfind: Type<Object>, paramreplace: Type<Object>): Type<Object>;
    static readAndSet(paramtarget: Typed<Object>, paramoptic: OpticFinder<Object>, paramvalue: Dynamic<Object>): Typed<Object>;
    constructor()
}