import type { Class } from '../../../java/lang/Class.d.ts'
import type { LambdaForm$BasicType } from '../../../java/lang/invoke/LambdaForm$BasicType.d.ts'
import type { MemberName } from '../../../java/lang/invoke/MemberName.d.ts'
import type { MethodHandle } from '../../../java/lang/invoke/MethodHandle.d.ts'
import type { MethodHandleImpl$Intrinsic } from '../../../java/lang/invoke/MethodHandleImpl$Intrinsic.d.ts'
import type { MethodType } from '../../../java/lang/invoke/MethodType.d.ts'
import type { Method } from '../../../java/lang/reflect/Method.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class LambdaForm$NamedFunction extends Object {
    constructor(arg0: MemberName)
    constructor(arg0: MemberName, arg1: MethodHandle)
    constructor(arg0: MethodHandle)
    constructor(arg0: MethodType)
    constructor(arg0: Method)
    // private member: MemberName;
    // private resolvedHandle: MethodHandle;
    // private type: MethodType;
    arity(): number;
    // private assertMemberIsConsistent(): boolean;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    intrinsicData(): Object;
    intrinsicName(): MethodHandleImpl$Intrinsic;
    invokeWithArguments(...arg0: Object[]): Object;
    invokeWithArgumentsTracing(arg0: Object[]): Object;
    // private invoker(): MethodHandle;
    isIdentity(): boolean;
    member(): MemberName;
    memberDeclaringClassOrNull(): Class<Object>;
    methodType(): MethodType;
    parameterType(arg0: number): LambdaForm$BasicType;
    resolve(): void;
    resolvedHandle(): MethodHandle;
    returnType(): LambdaForm$BasicType;
    toString(): string;
}