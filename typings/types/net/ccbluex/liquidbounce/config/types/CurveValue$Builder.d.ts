import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CurveValue } from '../../../../../net/ccbluex/liquidbounce/config/types/CurveValue.d.ts'
import type { CurveValue$Axis } from '../../../../../net/ccbluex/liquidbounce/config/types/CurveValue$Axis.d.ts'
import type { Vector2f } from '../../../../../org/joml/Vector2f.d.ts'
export class CurveValue$Builder extends Object {
    constructor()
    name: string | null;
    tension: number;
    xAxis: CurveValue$Axis | null;
    yAxis: CurveValue$Axis | null;
    build(): CurveValue;
    points(values: Vector2f[]): CurveValue$Builder;
}