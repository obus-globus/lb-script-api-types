import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
import type { StringRepresentable } from '../../../../../../../net/minecraft/util/StringRepresentable.d.ts'
export class StairsShape extends Enum<StairsShape> implements StringRepresentable {
    static INNER_LEFT: StairsShape;
    static INNER_RIGHT: StairsShape;
    static OUTER_LEFT: StairsShape;
    static OUTER_RIGHT: StairsShape;
    static PRE_BUILT_MAP_THRESHOLD: number;
    static STRAIGHT: StairsShape;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): StairsShape;
    static values(): StairsShape[];
    private constructor(name: string)
    // private name: string;
    getSerializedName(): string;
    toString(): string;
    name(): "STRAIGHT" | "INNER_LEFT" | "INNER_RIGHT" | "OUTER_LEFT" | "OUTER_RIGHT";
}