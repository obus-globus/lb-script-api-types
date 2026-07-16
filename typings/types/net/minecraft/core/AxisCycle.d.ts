import type { Class } from '../../../java/lang/Class.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
import type { Direction$Axis } from '../../../net/minecraft/core/Direction$Axis.d.ts'
export class AxisCycle extends Enum<AxisCycle> {
    static AXIS_VALUES: Direction$Axis[];
    static BACKWARD: AxisCycle;
    static FORWARD: AxisCycle;
    static NONE: AxisCycle;
    static VALUES: AxisCycle[];
    static between(paramfrom: Direction$Axis, paramto: Direction$Axis): AxisCycle;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): AxisCycle;
    static values(): AxisCycle[];
    private constructor()
    cycle(x: number, y: number, z: number, axis: Direction$Axis): number;
    cycle(axis: Direction$Axis): Direction$Axis;
    inverse(): AxisCycle;
    name(): "NONE" | "FORWARD" | "BACKWARD";
}