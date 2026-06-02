import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Display$FloatInterpolator } from '../../../../net/minecraft/world/entity/Display$FloatInterpolator.d.ts'
export class Display$LinearFloatInterpolator extends Record implements Display$FloatInterpolator {
    static constant(paramvalue: number): (param0: number) => kotlin.Float;
    // private current: number;
    // private previous: number;
    current(): number;
    equals(o: Object | null): boolean;
    get(progress: number): number;
    hashCode(): number;
    previous(): number;
    toString(): string;
}