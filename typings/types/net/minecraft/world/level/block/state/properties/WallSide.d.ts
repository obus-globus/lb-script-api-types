import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
import type { StringRepresentable } from '../../../../../../../net/minecraft/util/StringRepresentable.d.ts'
export class WallSide extends Enum<WallSide> implements StringRepresentable {
    static LOW: WallSide;
    static NONE: WallSide;
    static PRE_BUILT_MAP_THRESHOLD: number;
    static TALL: WallSide;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): WallSide;
    static values(): WallSide[];
    private constructor(name: string)
    // private name: string;
    getSerializedName(): string;
    toString(): string;
    name(): "NONE" | "LOW" | "TALL";
}