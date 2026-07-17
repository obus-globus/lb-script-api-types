import type { Class } from '../../../java/lang/Class.d.ts'
import type { Predicate } from '../../../java/util/function/Predicate.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
import type { Direction } from '../../../net/minecraft/core/Direction.d.ts'
import type { RandomSource } from '../../../net/minecraft/util/RandomSource.d.ts'
import type { StringRepresentable } from '../../../net/minecraft/util/StringRepresentable.d.ts'
import type { StringRepresentable$EnumCodec } from '../../../net/minecraft/util/StringRepresentable$EnumCodec.d.ts'
export class Direction$Axis extends Enum<Direction$Axis> implements Predicate<Direction>, StringRepresentable {
    static CODEC: StringRepresentable$EnumCodec<Direction$Axis>;
    static PRE_BUILT_MAP_THRESHOLD: number;
    static VALUES: Direction$Axis[];
    static X: Direction$Axis;
    static Y: Direction$Axis;
    static Z: Direction$Axis;
    static byName(paramname: string): Direction$Axis;
    static getRandom(paramrandom: RandomSource): Direction$Axis;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): Direction$Axis;
    static values(): Direction$Axis[];
    private constructor(name: string)
    and(arg0: (param0: Direction) => boolean): (param0: Direction) => boolean;
    choose(x: boolean, y: boolean, z: boolean): boolean;
    choose(x: number, y: number, z: number): number;
    getDirections(): Direction[];
    getName(): string;
    getNegative(): Direction;
    getPlane(): Direction[];
    getPositive(): Direction;
    getSerializedName(): string;
    isHorizontal(): boolean;
    isVertical(): boolean;
    negate(): (param0: Direction) => boolean;
    or(arg0: (param0: Direction) => boolean): (param0: Direction) => boolean;
    test(input: Direction): boolean;
    toString(): string;
    name(): "X" | "Y" | "Z";
}