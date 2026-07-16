import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class Direction extends Enum<Direction> {
    static DOWN: Direction;
    static EAST: Direction;
    static NORTH: Direction;
    static SOUTH: Direction;
    static UP: Direction;
    static WEST: Direction;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): Direction;
    static values(): Direction[];
    private constructor()
    name(): "DOWN" | "UP" | "NORTH" | "SOUTH" | "WEST" | "EAST";
}