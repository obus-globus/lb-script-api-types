import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
import type { StringRepresentable } from '../../../../../../../net/minecraft/util/StringRepresentable.d.ts'
export class BellAttachType extends Enum<BellAttachType> implements StringRepresentable {
    static CEILING: BellAttachType;
    static DOUBLE_WALL: BellAttachType;
    static FLOOR: BellAttachType;
    static PRE_BUILT_MAP_THRESHOLD: number;
    static SINGLE_WALL: BellAttachType;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): BellAttachType;
    static values(): BellAttachType[];
    private constructor(name: string)
    // private name: string;
    getSerializedName(): string;
    name(): "FLOOR" | "CEILING" | "SINGLE_WALL" | "DOUBLE_WALL";
}