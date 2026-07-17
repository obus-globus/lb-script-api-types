import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
import type { StringRepresentable } from '../../../../../../../net/minecraft/util/StringRepresentable.d.ts'
export class ComparatorMode extends Enum<ComparatorMode> implements StringRepresentable {
    static COMPARE: ComparatorMode;
    static PRE_BUILT_MAP_THRESHOLD: number;
    static SUBTRACT: ComparatorMode;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): ComparatorMode;
    static values(): ComparatorMode[];
    private constructor(name: string)
    // private name: string;
    getSerializedName(): string;
    toString(): string;
    name(): "COMPARE" | "SUBTRACT";
}