import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
import type { StringRepresentable } from '../../../../../../../net/minecraft/util/StringRepresentable.d.ts'
export class BambooLeaves extends Enum<BambooLeaves> implements StringRepresentable {
    static LARGE: BambooLeaves;
    static NONE: BambooLeaves;
    static PRE_BUILT_MAP_THRESHOLD: number;
    static SMALL: BambooLeaves;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): BambooLeaves;
    static values(): BambooLeaves[];
    private constructor(name: string)
    // private name: string;
    getSerializedName(): string;
    toString(): string;
    name(): "NONE" | "SMALL" | "LARGE";
}