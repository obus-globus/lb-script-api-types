import type { Record } from '../../../java/lang/Record.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class EasingType$CubicBezier$CubicCurve extends Record {
    private constructor(a: number, b: number, c: number)
    // private a: number;
    // private b: number;
    // private c: number;
    a(): number;
    b(): number;
    c(): number;
    equals(o: Object | null): boolean;
    hashCode(): number;
    sample(t: number): number;
    sampleGradient(t: number): number;
    toString(): string;
}