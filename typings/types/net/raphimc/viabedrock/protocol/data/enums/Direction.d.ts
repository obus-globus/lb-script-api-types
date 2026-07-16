import type { BlockFace } from '../../../../../../com/viaversion/viaversion/api/minecraft/BlockFace.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class Direction extends Enum<Direction> {
    static DOWN: Direction;
    static EAST: Direction;
    static NORTH: Direction;
    static SOUTH: Direction;
    static UP: Direction;
    static WEST: Direction;
    static getFromHorizontalId(paramarg0: number): Direction;
    static getFromHorizontalId(paramarg0: number, paramarg1: Direction): Direction;
    static getFromVerticalId(paramarg0: number): Direction;
    static getFromVerticalId(paramarg0: number, paramarg1: Direction): Direction;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): Direction;
    static values(): Direction[];
    private constructor(arg2: number, arg3: number, arg4: BlockFace)
    // private blockFace: BlockFace;
    // private horizontalId: number;
    // private verticalId: number;
    blockFace(): BlockFace;
    horizontalId(): number;
    isHorizontal(): boolean;
    verticalId(): number;
    name(): "DOWN" | "UP" | "NORTH" | "SOUTH" | "WEST" | "EAST";
}