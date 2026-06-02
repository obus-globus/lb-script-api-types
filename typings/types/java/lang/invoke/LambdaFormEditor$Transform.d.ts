import type { LambdaForm } from '../../../java/lang/invoke/LambdaForm.d.ts'
import type { LambdaFormEditor$TransformKey } from '../../../java/lang/invoke/LambdaFormEditor$TransformKey.d.ts'
import type { SoftReference } from '../../../java/lang/ref/SoftReference.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class LambdaFormEditor$Transform extends SoftReference<LambdaForm> {
    static reachabilityFence(paramarg0: Object): void;
    private constructor(arg0: number, arg1: number[], arg2: LambdaForm)
    // private fullBytes: number[];
    // private packedBytes: number;
    // private equals(arg0: LambdaFormEditor$Transform): boolean;
    // private equals(arg0: LambdaFormEditor$TransformKey): boolean;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}