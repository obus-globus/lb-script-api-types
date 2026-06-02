import type { Record } from '../../../java/lang/Record.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class GizmoStyle extends Record {
    static fill(paramargb: number): GizmoStyle;
    static stroke(paramargb: number): GizmoStyle;
    static stroke(paramargb: number, paramwidth: number): GizmoStyle;
    static strokeAndFill(paramstroke: number, paramstrokeWidth: number, paramfill: number): GizmoStyle;
    // private fill: number;
    // private stroke: number;
    // private strokeWidth: number;
    equals(o: Object | null): boolean;
    fill(): number;
    hasFill(): boolean;
    hasStroke(): boolean;
    hashCode(): number;
    multipliedFill(alphaMultiplier: number): number;
    multipliedStroke(alphaMultiplier: number): number;
    stroke(): number;
    strokeWidth(): number;
    toString(): string;
}