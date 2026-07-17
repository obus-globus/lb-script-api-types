import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { IntFunction } from '../../../../java/util/function/IntFunction.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
import type { StringRepresentable } from '../../../../net/minecraft/util/StringRepresentable.d.ts'
export class Display$BillboardConstraints extends Enum<Display$BillboardConstraints> implements StringRepresentable {
    static BY_ID: (param0: number) => Display$BillboardConstraints;
    static CENTER: Display$BillboardConstraints;
    static CODEC: Codec<Display$BillboardConstraints>;
    static FIXED: Display$BillboardConstraints;
    static HORIZONTAL: Display$BillboardConstraints;
    static PRE_BUILT_MAP_THRESHOLD: number;
    static VERTICAL: Display$BillboardConstraints;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): Display$BillboardConstraints;
    static values(): Display$BillboardConstraints[];
    private constructor(id: number, name: string)
    // private id: number;
    // private name: string;
    // private getId(): number;
    getSerializedName(): string;
    name(): "FIXED" | "VERTICAL" | "HORIZONTAL" | "CENTER";
}