import type { Codec } from '../../../com/mojang/serialization/Codec.d.ts'
import type { DataResult } from '../../../com/mojang/serialization/DataResult.d.ts'
import type { Record } from '../../../java/lang/Record.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class EasingType$CubicBezierControls extends Record {
    static CODEC: Codec<EasingType$CubicBezierControls>;
    // private x1: number;
    // private x2: number;
    // private y1: number;
    // private y2: number;
    equals(o: Object | null): boolean;
    hashCode(): number;
    toString(): string;
    // private validate(): DataResult<EasingType$CubicBezierControls>;
    x1(): number;
    x2(): number;
    y1(): number;
    y2(): number;
}