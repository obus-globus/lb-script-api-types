import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { Vector2fc } from '../../../../../org/joml/Vector2fc.d.ts'
export class CurveUtil$OnOutOfBounds extends Enum<CurveUtil$OnOutOfBounds> implements Tagged {
    static CLAMP: CurveUtil$OnOutOfBounds;
    static Companion: Tagged$Companion;
    static EXTEND: CurveUtil$OnOutOfBounds;
    static getEntries(): CurveUtil$OnOutOfBounds[];
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): CurveUtil$OnOutOfBounds;
    static values(): CurveUtil$OnOutOfBounds[];
    private constructor(tag: string)
    readonly tag: string;
    resolveOutOfBoundsY(data: Vector2fc[], xPos: number, isLeftSide: boolean): number;
    name(): "CLAMP" | "EXTEND";
}