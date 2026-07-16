import type { ClassDesc } from '../../../java/lang/constant/ClassDesc.d.ts'
import type { ConstantDesc } from '../../../java/lang/constant/ConstantDesc.d.ts'
import type { DirectMethodHandleDesc } from '../../../java/lang/constant/DirectMethodHandleDesc.d.ts'
import type { DynamicConstantDesc } from '../../../java/lang/constant/DynamicConstantDesc.d.ts'
import type { MethodHandles$Lookup } from '../../../java/lang/invoke/MethodHandles$Lookup.d.ts'
import type { VarHandle } from '../../../java/lang/invoke/VarHandle.d.ts'
import type { VarHandle$VarHandleDesc$Kind } from '../../../java/lang/invoke/VarHandle$VarHandleDesc$Kind.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class VarHandle$VarHandleDesc extends DynamicConstantDesc<VarHandle> {
    static of<T extends unknown>(paramarg0: DirectMethodHandleDesc): DynamicConstantDesc<T>;
    static of<T extends unknown>(paramarg0: DirectMethodHandleDesc, ...paramarg1: ConstantDesc[]): DynamicConstantDesc<T>;
    static ofArray(paramarg0: ClassDesc): VarHandle$VarHandleDesc;
    static ofCanonical<T extends unknown>(paramarg0: DirectMethodHandleDesc, paramarg1: string, paramarg2: ClassDesc, paramarg3: ConstantDesc[]): ConstantDesc;
    static ofField(paramarg0: ClassDesc, paramarg1: string, paramarg2: ClassDesc): VarHandle$VarHandleDesc;
    static ofNamed<T extends unknown>(paramarg0: DirectMethodHandleDesc, paramarg1: string, paramarg2: ClassDesc, ...paramarg3: ConstantDesc[]): DynamicConstantDesc<T>;
    static ofStaticField(paramarg0: ClassDesc, paramarg1: string, paramarg2: ClassDesc): VarHandle$VarHandleDesc;
    private constructor(arg0: VarHandle$VarHandleDesc$Kind, arg1: string, arg2: ClassDesc, arg3: ClassDesc)
    // private declaringClass: ClassDesc;
    // private kind: VarHandle$VarHandleDesc$Kind;
    // private varType: ClassDesc;
    resolveConstantDesc(arg0: MethodHandles$Lookup): VarHandle;
    toString(): string;
    varType(): ClassDesc;
}