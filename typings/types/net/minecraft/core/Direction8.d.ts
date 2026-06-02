import type { Class } from '../../../java/lang/Class.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
import type { Direction } from '../../../net/minecraft/core/Direction.d.ts'
import type { Vec3i } from '../../../net/minecraft/core/Vec3i.d.ts'
export class Direction8 extends Enum<Direction8> {
    static EAST: Direction8;
    static NORTH: Direction8;
    static NORTH_EAST: Direction8;
    static NORTH_WEST: Direction8;
    static SOUTH: Direction8;
    static SOUTH_EAST: Direction8;
    static SOUTH_WEST: Direction8;
    static WEST: Direction8;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): Direction8;
    static values(): (Object | null)[];
    private constructor(directions: Direction[])
    readonly directions: Direction[];
    // private step: Vec3i;
    getDirections(): Direction[];
    getStepX(): number;
    getStepZ(): number;
    name(): "NORTH" | "NORTH_EAST" | "EAST" | "SOUTH_EAST" | "SOUTH" | "SOUTH_WEST" | "WEST" | "NORTH_WEST";
}