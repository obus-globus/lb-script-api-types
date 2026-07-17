import type { Class } from '../../../java/lang/Class.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
import type { Direction } from '../../../net/minecraft/core/Direction.d.ts'
import type { StringRepresentable } from '../../../net/minecraft/util/StringRepresentable.d.ts'
export class FrontAndTop extends Enum<FrontAndTop> implements StringRepresentable {
    static DOWN_EAST: FrontAndTop;
    static DOWN_NORTH: FrontAndTop;
    static DOWN_SOUTH: FrontAndTop;
    static DOWN_WEST: FrontAndTop;
    static EAST_UP: FrontAndTop;
    static NORTH_UP: FrontAndTop;
    static PRE_BUILT_MAP_THRESHOLD: number;
    static SOUTH_UP: FrontAndTop;
    static UP_EAST: FrontAndTop;
    static UP_NORTH: FrontAndTop;
    static UP_SOUTH: FrontAndTop;
    static UP_WEST: FrontAndTop;
    static WEST_UP: FrontAndTop;
    static fromFrontAndTop(paramfront: Direction, paramtop: Direction): FrontAndTop;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): FrontAndTop;
    static values(): FrontAndTop[];
    private constructor(name: string, front: Direction, top: Direction)
    // private front: Direction;
    // private name: string;
    // private top: Direction;
    front(): Direction;
    getSerializedName(): string;
    top(): Direction;
    name(): "DOWN_EAST" | "DOWN_NORTH" | "DOWN_SOUTH" | "DOWN_WEST" | "UP_EAST" | "UP_NORTH" | "UP_SOUTH" | "UP_WEST" | "WEST_UP" | "EAST_UP" | "NORTH_UP" | "SOUTH_UP";
}