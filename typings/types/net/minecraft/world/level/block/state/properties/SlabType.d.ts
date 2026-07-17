import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
import type { StringRepresentable } from '../../../../../../../net/minecraft/util/StringRepresentable.d.ts'
export class SlabType extends Enum<SlabType> implements StringRepresentable {
    static BOTTOM: SlabType;
    static DOUBLE: SlabType;
    static PRE_BUILT_MAP_THRESHOLD: number;
    static TOP: SlabType;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): SlabType;
    static values(): SlabType[];
    private constructor(name: string)
    // private name: string;
    getSerializedName(): string;
    toString(): string;
    name(): "TOP" | "BOTTOM" | "DOUBLE";
}