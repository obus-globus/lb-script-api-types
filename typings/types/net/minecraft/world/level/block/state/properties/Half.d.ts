import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
import type { StringRepresentable } from '../../../../../../../net/minecraft/util/StringRepresentable.d.ts'
export class Half extends Enum<Half> implements StringRepresentable {
    static BOTTOM: Half;
    static PRE_BUILT_MAP_THRESHOLD: number;
    static TOP: Half;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): Half;
    static values(): Half[];
    private constructor(name: string)
    // private name: string;
    getSerializedName(): string;
    toString(): string;
    name(): "TOP" | "BOTTOM";
}