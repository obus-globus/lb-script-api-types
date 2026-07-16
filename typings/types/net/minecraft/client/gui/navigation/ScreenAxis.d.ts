import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
import type { ScreenDirection } from '../../../../../net/minecraft/client/gui/navigation/ScreenDirection.d.ts'
export class ScreenAxis extends Enum<ScreenAxis> {
    static HORIZONTAL: ScreenAxis;
    static VERTICAL: ScreenAxis;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): ScreenAxis;
    static values(): ScreenAxis[];
    private constructor()
    getDirection(positive: boolean): ScreenDirection;
    getNegative(): ScreenDirection;
    getPositive(): ScreenDirection;
    orthogonal(): ScreenAxis;
    name(): "HORIZONTAL" | "VERTICAL";
}