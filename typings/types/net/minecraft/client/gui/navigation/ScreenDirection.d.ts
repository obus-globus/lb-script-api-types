import type { IntComparator } from '../../../../../it/unimi/dsi/fastutil/ints/IntComparator.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
import type { ScreenAxis } from '../../../../../net/minecraft/client/gui/navigation/ScreenAxis.d.ts'
export class ScreenDirection extends Enum<ScreenDirection> {
    static DOWN: ScreenDirection;
    static LEFT: ScreenDirection;
    static RIGHT: ScreenDirection;
    static UP: ScreenDirection;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): ScreenDirection;
    static values(): ScreenDirection[];
    private constructor()
    // private coordinateValueComparator: (param0: number, param1: number) => number;
    coordinateValueComparator(): (param0: number, param1: number) => number;
    getAxis(): ScreenAxis;
    getOpposite(): ScreenDirection;
    isAfter(a: number, b: number): boolean;
    isBefore(a: number, b: number): boolean;
    isPositive(): boolean;
    name(): "UP" | "DOWN" | "LEFT" | "RIGHT";
}