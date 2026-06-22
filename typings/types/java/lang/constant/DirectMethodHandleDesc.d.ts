import type { ClassDesc } from '../../../java/lang/constant/ClassDesc.d.ts'
import type { DirectMethodHandleDesc$Kind } from '../../../java/lang/constant/DirectMethodHandleDesc$Kind.d.ts'
import type { MethodHandleDesc } from '../../../java/lang/constant/MethodHandleDesc.d.ts'
import type { MethodTypeDesc } from '../../../java/lang/constant/MethodTypeDesc.d.ts'
import type { MethodHandle } from '../../../java/lang/invoke/MethodHandle.d.ts'
import type { MethodHandles$Lookup } from '../../../java/lang/invoke/MethodHandles$Lookup.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface DirectMethodHandleDesc extends MethodHandleDesc, Object{
    asType(arg0: MethodTypeDesc): MethodHandleDesc;
    invocationType(): MethodTypeDesc;
    isOwnerInterface(): boolean;
    kind(): DirectMethodHandleDesc$Kind;
    lookupDescriptor(): string;
    methodName(): string;
    owner(): ClassDesc;
    refKind(): number;
    resolveConstantDesc(arg0: MethodHandles$Lookup): Object;
    resolveConstantDesc(arg0: MethodHandles$Lookup): MethodHandle;
}