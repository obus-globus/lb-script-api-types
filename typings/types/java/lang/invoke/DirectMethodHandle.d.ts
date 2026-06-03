import type { BoundMethodHandle } from '../../../java/lang/invoke/BoundMethodHandle.d.ts'
import type { LambdaForm } from '../../../java/lang/invoke/LambdaForm.d.ts'
import type { MemberName } from '../../../java/lang/invoke/MemberName.d.ts'
import type { MethodHandle } from '../../../java/lang/invoke/MethodHandle.d.ts'
import type { MethodType } from '../../../java/lang/invoke/MethodType.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class DirectMethodHandle extends MethodHandle {
    private constructor(arg0: MethodType, arg1: LambdaForm, arg2: MemberName, arg3: boolean)
    // private crackable: boolean;
    // private member: MemberName;
    checkCast(arg0: Object): Object;
    checkReceiver(arg0: Object): Object;
    copyWith(arg0: MethodType, arg1: LambdaForm): MethodHandle;
    // private ensureInitialized(): void;
    internalMemberName(): MemberName;
    internalProperties(): Object;
    internalProperties(arg0: number): string;
    isCrackable(): boolean;
    rebind(): BoundMethodHandle;
    viewAsType(arg0: MethodType, arg1: boolean): MethodHandle;
}