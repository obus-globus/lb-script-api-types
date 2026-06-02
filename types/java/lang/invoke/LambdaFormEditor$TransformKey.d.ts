import type { LambdaForm } from '../../../java/lang/invoke/LambdaForm.d.ts'
import type { LambdaFormEditor$Transform } from '../../../java/lang/invoke/LambdaFormEditor$Transform.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class LambdaFormEditor$TransformKey extends Object {
    private constructor(arg0: number[])
    private constructor(arg0: number)
    private constructor(arg0: number, arg1: number[])
    // private fullBytes: number[];
    // private packedBytes: number;
    // private equals(arg0: LambdaFormEditor$Transform): boolean;
    // private equals(arg0: LambdaFormEditor$TransformKey): boolean;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    toString(): string;
    withResult(arg0: LambdaForm): LambdaFormEditor$Transform;
}