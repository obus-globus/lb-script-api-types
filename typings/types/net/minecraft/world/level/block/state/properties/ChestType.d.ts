import type { Codec } from '../../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
import type { StringRepresentable } from '../../../../../../../net/minecraft/util/StringRepresentable.d.ts'
export class ChestType extends Enum<ChestType> implements StringRepresentable {
    static CODEC: Codec<ChestType>;
    static LEFT: ChestType;
    static PRE_BUILT_MAP_THRESHOLD: number;
    static RIGHT: ChestType;
    static SINGLE: ChestType;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): ChestType;
    static values(): ChestType[];
    private constructor(name: string)
    // private name: string;
    getOpposite(): ChestType;
    getSerializedName(): string;
    name(): "SINGLE" | "LEFT" | "RIGHT";
}