import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
import type { StringRepresentable } from '../../../../net/minecraft/util/StringRepresentable.d.ts'
export class CrossbowItem$ChargeType extends Enum<CrossbowItem$ChargeType> implements StringRepresentable {
    static ARROW: CrossbowItem$ChargeType;
    static CODEC: Codec<CrossbowItem$ChargeType>;
    static NONE: CrossbowItem$ChargeType;
    static PRE_BUILT_MAP_THRESHOLD: number;
    static ROCKET: CrossbowItem$ChargeType;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): CrossbowItem$ChargeType;
    static values(): CrossbowItem$ChargeType[];
    private constructor(name: string)
    // private name: string;
    getSerializedName(): string;
    name(): "NONE" | "ARROW" | "ROCKET";
}