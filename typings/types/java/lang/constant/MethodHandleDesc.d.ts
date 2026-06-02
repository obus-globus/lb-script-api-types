import type { ConstantDesc } from '../../../java/lang/constant/ConstantDesc.d.ts'
import type { MethodTypeDesc } from '../../../java/lang/constant/MethodTypeDesc.d.ts'
import type { MethodHandle } from '../../../java/lang/invoke/MethodHandle.d.ts'
import type { MethodHandles$Lookup } from '../../../java/lang/invoke/MethodHandles$Lookup.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface MethodHandleDesc extends ConstantDesc, Object{
    asType(arg0: MethodTypeDesc): MethodHandleDesc;
    invocationType(): MethodTypeDesc;
    resolveConstantDesc(arg0: MethodHandles$Lookup): MethodHandle;
}