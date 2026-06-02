import type { LambdaForm } from '../../../java/lang/invoke/LambdaForm.d.ts'
import type { MemberName } from '../../../java/lang/invoke/MemberName.d.ts'
import type { MethodHandle } from '../../../java/lang/invoke/MethodHandle.d.ts'
import type { MethodType } from '../../../java/lang/invoke/MethodType.d.ts'
import type { SoftReference } from '../../../java/lang/ref/SoftReference.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class MethodTypeForm extends Object {
    static ERASE: number;
    static UNWRAP: number;
    static WRAP: number;
    static canonicalize(paramarg0: MethodType, paramarg1: number): MethodType;
    constructor(arg0: MethodType)
    // private basicType: MethodType;
    // private erasedType: MethodType;
    // private interpretEntry: SoftReference<MemberName>;
    // private lambdaForms: SoftReference<LambdaForm>[];
    // private methodHandles: SoftReference<MethodHandle>[];
    // private parameterSlotCount: number;
    // private primitiveCount: number;
    basicType(): MethodType;
    cachedInterpretEntry(): MemberName;
    cachedLambdaForm(arg0: number): LambdaForm;
    cachedMethodHandle(arg0: number): MethodHandle;
    erasedType(): MethodType;
    hasPrimitives(): boolean;
    parameterCount(): number;
    parameterSlotCount(): number;
    setCachedInterpretEntry(arg0: MemberName): MemberName;
    setCachedLambdaForm(arg0: number, arg1: LambdaForm): LambdaForm;
    setCachedMethodHandle(arg0: number, arg1: MethodHandle): MethodHandle;
    toString(): string;
}