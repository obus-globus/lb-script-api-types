import type { Class } from '../../../java/lang/Class.d.ts'
import type { Constable } from '../../../java/lang/constant/Constable.d.ts'
import type { MethodHandleDesc } from '../../../java/lang/constant/MethodHandleDesc.d.ts'
import type { BoundMethodHandle } from '../../../java/lang/invoke/BoundMethodHandle.d.ts'
import type { LambdaForm } from '../../../java/lang/invoke/LambdaForm.d.ts'
import type { MemberName } from '../../../java/lang/invoke/MemberName.d.ts'
import type { MethodHandleImpl$Intrinsic } from '../../../java/lang/invoke/MethodHandleImpl$Intrinsic.d.ts'
import type { MethodType } from '../../../java/lang/invoke/MethodType.d.ts'
import type { SoftReference } from '../../../java/lang/ref/SoftReference.d.ts'
import type { Optional } from '../../../java/util/Optional.d.ts'
import type { Function } from '../../../java/util/function/Function.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class MethodHandle extends Object implements Constable {
    constructor(arg0: MethodType, arg1: LambdaForm)
    // private asTypeCache: MethodHandle;
    // private asTypeSoftCache: SoftReference<MethodHandle>;
    // private customizationCount: number;
    // private form: LambdaForm;
    // private type: MethodType;
    // private updateInProgress: boolean;
    asCollector(arg0: Class<Object>, arg1: number): MethodHandle;
    asCollector(arg0: number, arg1: Class<Object>, arg2: number): MethodHandle;
    asCollectorChecks(arg0: Class<Object>, arg1: number, arg2: number): boolean;
    asFixedArity(): MethodHandle;
    asSpreader(arg0: Class<Object>, arg1: number): MethodHandle;
    asSpreader(arg0: number, arg1: Class<Object>, arg2: number): MethodHandle;
    // private asSpreaderChecks(arg0: Class<Object>, arg1: number, arg2: number): MethodType;
    asType(arg0: MethodType): MethodHandle;
    // private asTypeCached(arg0: MethodType): MethodHandle;
    asTypeUncached(arg0: MethodType): MethodHandle;
    asVarargsCollector(arg0: Class<Object>): MethodHandle;
    bindArgumentL(arg0: number, arg1: Object): BoundMethodHandle;
    bindTo(arg0: Object): MethodHandle;
    copyWith(arg0: MethodType, arg1: LambdaForm): MethodHandle;
    customize(): void;
    debugString(): string;
    debugString(arg0: number): string;
    describeConstable(): Optional<MethodHandleDesc>;
    internalCallerClass(): Class<Object>;
    internalForm(): LambdaForm;
    internalMemberName(): MemberName;
    internalProperties(): Object;
    internalProperties(arg0: number): Object;
    internalValues(arg0: number): Object;
    intrinsicData(): Object;
    intrinsicName(): MethodHandleImpl$Intrinsic;
    invoke(arg0: Object[]): Object;
    invokeBasic(arg0: Object[]): Object;
    invokeExact(arg0: Object[]): Object;
    invokeWithArguments(arg0: Object[]): Object;
    invokeWithArguments(arg0: (Object | null)[]): Object;
    isCrackable(): boolean;
    isInvokeSpecial(): boolean;
    // private isSafeToCache(arg0: MethodType): boolean;
    isVarargsCollector(): boolean;
    maybeCustomize(): void;
    rebind(): BoundMethodHandle;
    // private setAsTypeCache(arg0: MethodType): MethodHandle;
    setVarargs(arg0: MemberName): MethodHandle;
    // private spreadArrayChecks(arg0: Class<Object>, arg1: number): void;
    standardString(): string;
    toString(): string;
    type(): MethodType;
    updateForm(arg0: (param0: LambdaForm) => LambdaForm): void;
    viewAsType(arg0: MethodType, arg1: boolean): MethodHandle;
    viewAsTypeChecks(arg0: MethodType, arg1: boolean): boolean;
    withInternalMemberName(arg0: MemberName, arg1: boolean): MethodHandle;
    withVarargs(arg0: boolean): MethodHandle;
}