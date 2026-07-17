import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
import type { StringRepresentable } from '../../../../../../../net/minecraft/util/StringRepresentable.d.ts'
export class RedstoneSide extends Enum<RedstoneSide> implements StringRepresentable {
    static NONE: RedstoneSide;
    static PRE_BUILT_MAP_THRESHOLD: number;
    static SIDE: RedstoneSide;
    static UP: RedstoneSide;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): RedstoneSide;
    static values(): RedstoneSide[];
    private constructor(name: string)
    // private name: string;
    getSerializedName(): string;
    isConnected(): boolean;
    toString(): string;
    name(): "UP" | "SIDE" | "NONE";
}