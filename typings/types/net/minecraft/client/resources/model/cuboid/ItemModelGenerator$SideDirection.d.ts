import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
import type { Direction } from '../../../../../../net/minecraft/core/Direction.d.ts'
export class ItemModelGenerator$SideDirection extends Enum<ItemModelGenerator$SideDirection> {
    static DOWN: ItemModelGenerator$SideDirection;
    static LEFT: ItemModelGenerator$SideDirection;
    static RIGHT: ItemModelGenerator$SideDirection;
    static UP: ItemModelGenerator$SideDirection;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): ItemModelGenerator$SideDirection;
    static values(): ItemModelGenerator$SideDirection[];
    private constructor(direction: Direction)
    readonly direction: Direction;
    getDirection(): Direction;
    isHorizontal(): boolean;
    name(): "UP" | "DOWN" | "LEFT" | "RIGHT";
}