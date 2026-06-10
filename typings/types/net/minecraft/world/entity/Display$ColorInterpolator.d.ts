import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Display$IntInterpolator } from '../../../../net/minecraft/world/entity/Display$IntInterpolator.d.ts'
export class Display$ColorInterpolator extends Record implements Display$IntInterpolator {
    static constant(paramvalue: number): (param0: number) => number;
    // private current: number;
    // private previous: number;
    current(): number;
    equals(o: Object | null): boolean;
    get(progress: number): number;
    hashCode(): number;
    previous(): number;
    toString(): string;
}