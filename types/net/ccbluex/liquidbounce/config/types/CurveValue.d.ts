import type { CurveValue$Axis } from '../../../../../net/ccbluex/liquidbounce/config/types/CurveValue$Axis.d.ts'
import type { CurveValue$Companion } from '../../../../../net/ccbluex/liquidbounce/config/types/CurveValue$Companion.d.ts'
import type { ListValue } from '../../../../../net/ccbluex/liquidbounce/config/types/list/ListValue.d.ts'
import type { Vector2f } from '../../../../../org/joml/Vector2f.d.ts'
export class CurveValue extends ListValue<Vector2f[], Vector2f> {
    static Companion: CurveValue$Companion;
    static DEFAULT_TENSION: number;
    constructor(name: string, value: Vector2f[], xAxis: CurveValue$Axis, yAxis: CurveValue$Axis, tension: number)
    readonly tension: number;
    // private xAxis: CurveValue$Axis;
    /*not mapped: */ getXAxis(): CurveValue$Axis;
    // private yAxis: CurveValue$Axis;
    /*not mapped: */ getYAxis(): CurveValue$Axis;
    transform(x: number): number;
}