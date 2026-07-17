import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
import type { Direction } from '../../../../../../../net/minecraft/core/Direction.d.ts'
import type { StringRepresentable } from '../../../../../../../net/minecraft/util/StringRepresentable.d.ts'
export class DoubleBlockHalf extends Enum<DoubleBlockHalf> implements StringRepresentable {
    static LOWER: DoubleBlockHalf;
    static PRE_BUILT_MAP_THRESHOLD: number;
    static UPPER: DoubleBlockHalf;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): DoubleBlockHalf;
    static values(): DoubleBlockHalf[];
    private constructor(directionToOther: Direction)
    readonly directionToOther: Direction;
    getDirectionToOther(): Direction;
    getOtherHalf(): DoubleBlockHalf;
    getSerializedName(): string;
    toString(): string;
    name(): "UPPER" | "LOWER";
}