import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
import type { StringRepresentable } from '../../../../../../../net/minecraft/util/StringRepresentable.d.ts'
export class AttachFace extends Enum<AttachFace> implements StringRepresentable {
    static CEILING: AttachFace;
    static FLOOR: AttachFace;
    static PRE_BUILT_MAP_THRESHOLD: number;
    static WALL: AttachFace;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): AttachFace;
    static values(): AttachFace[];
    private constructor(name: string)
    // private name: string;
    getSerializedName(): string;
    name(): "FLOOR" | "WALL" | "CEILING";
}