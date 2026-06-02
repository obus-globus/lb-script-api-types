import type { ClassDesc } from '../../../java/lang/constant/ClassDesc.d.ts'
import type { DirectMethodHandleDesc$Kind } from '../../../java/lang/constant/DirectMethodHandleDesc$Kind.d.ts'
import type { MethodHandleDesc } from '../../../java/lang/constant/MethodHandleDesc.d.ts'
import type { MethodTypeDesc } from '../../../java/lang/constant/MethodTypeDesc.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface DirectMethodHandleDesc extends MethodHandleDesc, Object{
    asType(arg0: MethodTypeDesc): MethodHandleDesc;
    isOwnerInterface(): boolean;
    kind(): DirectMethodHandleDesc$Kind;
    lookupDescriptor(): string;
    methodName(): string;
    owner(): ClassDesc;
    refKind(): number;
}