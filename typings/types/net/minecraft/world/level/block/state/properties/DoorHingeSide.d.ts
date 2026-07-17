import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
import type { StringRepresentable } from '../../../../../../../net/minecraft/util/StringRepresentable.d.ts'
export class DoorHingeSide extends Enum<DoorHingeSide> implements StringRepresentable {
    static LEFT: DoorHingeSide;
    static PRE_BUILT_MAP_THRESHOLD: number;
    static RIGHT: DoorHingeSide;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): DoorHingeSide;
    static values(): DoorHingeSide[];
    private constructor()
    getSerializedName(): string;
    toString(): string;
    name(): "LEFT" | "RIGHT";
}