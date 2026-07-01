import type { Constructor } from '../../../../java/lang/reflect/Constructor.d.ts'
import type { GenericDeclaration } from '../../../../java/lang/reflect/GenericDeclaration.d.ts'
import type { Method } from '../../../../java/lang/reflect/Method.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { FunctionBase } from '../../../../kotlin/jvm/internal/FunctionBase.d.ts'
import type { DescriptorKCallable } from '../../../../kotlin/reflect/jvm/internal/DescriptorKCallable.d.ts'
import type { FunctionWithAllInvokes } from '../../../../kotlin/reflect/jvm/internal/FunctionWithAllInvokes.d.ts'
import type { KCallableOverriddenStorage } from '../../../../kotlin/reflect/jvm/internal/KCallableOverriddenStorage.d.ts'
import type { KDeclarationContainerImpl } from '../../../../kotlin/reflect/jvm/internal/KDeclarationContainerImpl.d.ts'
import type { ReflectKFunction } from '../../../../kotlin/reflect/jvm/internal/ReflectKFunction.d.ts'
import type { Caller } from '../../../../kotlin/reflect/jvm/internal/calls/Caller.d.ts'
import type { CallerImpl } from '../../../../kotlin/reflect/jvm/internal/calls/CallerImpl.d.ts'
import type { CallerImpl$Method } from '../../../../kotlin/reflect/jvm/internal/calls/CallerImpl$Method.d.ts'
import type { FunctionDescriptor } from '../../../../kotlin/reflect/jvm/internal/impl/descriptors/FunctionDescriptor.d.ts'
import type { DescriptorKType } from '../../../../kotlin/reflect/jvm/internal/types/DescriptorKType.d.ts'
export class DescriptorKFunction extends DescriptorKCallable<Object> implements FunctionBase<Object>, FunctionWithAllInvokes, ReflectKFunction {
    constructor(container: KDeclarationContainerImpl, name: string, signature: string, boundReceiver: Object | null)
    constructor(container: KDeclarationContainerImpl, descriptor: FunctionDescriptor, overriddenStorage: KCallableOverriddenStorage)
    readonly arity: number;
    readonly caller: Caller<any>;
    readonly callerWithDefaults: Caller<any> | null;
    readonly container: KDeclarationContainerImpl;
    readonly descriptor: FunctionDescriptor;
    /*not mapped: */ isExternal(): boolean;
    /*not mapped: */ isInfix(): boolean;
    /*not mapped: */ isInline(): boolean;
    /*not mapped: */ isOperator(): boolean;
    /*not mapped: */ isPrimaryConstructor(): boolean;
    /*not mapped: */ isSuspend(): boolean;
    readonly name: string;
    readonly overridden: ReflectKFunction[];
    readonly rawBoundReceiver: Object | null;
    readonly signature: string;
    protected computeReturnType(): DescriptorKType;
    // private createConstructorCaller(member: Constructor<Object>, descriptor: FunctionDescriptor, isDefault: boolean): CallerImpl<Constructor<Object>>;
    // private createInstanceMethodCaller(member: Method): CallerImpl$Method;
    // private createJvmStaticInObjectCaller(member: Method): CallerImpl$Method;
    // private createStaticMethodCaller(member: Method, isCallByToValueClassMangledMethod: boolean): Caller<any>;
    equals(other: Object | null): boolean;
    findJavaDeclaration(): GenericDeclaration | null;
    // private getFunctionWithDefaultParametersForValueClassOverride(function_: ReflectKFunction): ReflectKFunction | null;
    hashCode(): number;
    invoke(): Object | null;
    invoke(p1: Object | null): Object | null;
    invoke(p1: Object | null, p2: Object | null): Object | null;
    invoke(p1: Object | null, p2: Object | null, p3: Object | null): Object | null;
    invoke(p1: Object | null, p2: Object | null, p3: Object | null, p4: Object | null): Object | null;
    invoke(p1: Object | null, p2: Object | null, p3: Object | null, p4: Object | null, p5: Object | null): Object | null;
    invoke(p1: Object | null, p2: Object | null, p3: Object | null, p4: Object | null, p5: Object | null, p6: Object | null): Object | null;
    invoke(p1: Object | null, p2: Object | null, p3: Object | null, p4: Object | null, p5: Object | null, p6: Object | null, p7: Object | null): Object | null;
    invoke(p1: Object | null, p2: Object | null, p3: Object | null, p4: Object | null, p5: Object | null, p6: Object | null, p7: Object | null, p8: Object | null): Object | null;
    invoke(p1: Object | null, p2: Object | null, p3: Object | null, p4: Object | null, p5: Object | null, p6: Object | null, p7: Object | null, p8: Object | null, p9: Object | null): Object | null;
    invoke(p1: Object | null, p2: Object | null, p3: Object | null, p4: Object | null, p5: Object | null, p6: Object | null, p7: Object | null, p8: Object | null, p9: Object | null, p10: Object | null): Object | null;
    invoke(p1: Object | null, p2: Object | null, p3: Object | null, p4: Object | null, p5: Object | null, p6: Object | null, p7: Object | null, p8: Object | null, p9: Object | null, p10: Object | null, p11: Object | null): Object | null;
    invoke(p1: Object | null, p2: Object | null, p3: Object | null, p4: Object | null, p5: Object | null, p6: Object | null, p7: Object | null, p8: Object | null, p9: Object | null, p10: Object | null, p11: Object | null, p12: Object | null): Object | null;
    invoke(p1: Object | null, p2: Object | null, p3: Object | null, p4: Object | null, p5: Object | null, p6: Object | null, p7: Object | null, p8: Object | null, p9: Object | null, p10: Object | null, p11: Object | null, p12: Object | null, p13: Object | null): Object | null;
    invoke(p1: Object | null, p2: Object | null, p3: Object | null, p4: Object | null, p5: Object | null, p6: Object | null, p7: Object | null, p8: Object | null, p9: Object | null, p10: Object | null, p11: Object | null, p12: Object | null, p13: Object | null, p14: Object | null): Object | null;
    invoke(p1: Object | null, p2: Object | null, p3: Object | null, p4: Object | null, p5: Object | null, p6: Object | null, p7: Object | null, p8: Object | null, p9: Object | null, p10: Object | null, p11: Object | null, p12: Object | null, p13: Object | null, p14: Object | null, p15: Object | null): Object | null;
    invoke(p1: Object | null, p2: Object | null, p3: Object | null, p4: Object | null, p5: Object | null, p6: Object | null, p7: Object | null, p8: Object | null, p9: Object | null, p10: Object | null, p11: Object | null, p12: Object | null, p13: Object | null, p14: Object | null, p15: Object | null, p16: Object | null): Object | null;
    invoke(p1: Object | null, p2: Object | null, p3: Object | null, p4: Object | null, p5: Object | null, p6: Object | null, p7: Object | null, p8: Object | null, p9: Object | null, p10: Object | null, p11: Object | null, p12: Object | null, p13: Object | null, p14: Object | null, p15: Object | null, p16: Object | null, p17: Object | null): Object | null;
    invoke(p1: Object | null, p2: Object | null, p3: Object | null, p4: Object | null, p5: Object | null, p6: Object | null, p7: Object | null, p8: Object | null, p9: Object | null, p10: Object | null, p11: Object | null, p12: Object | null, p13: Object | null, p14: Object | null, p15: Object | null, p16: Object | null, p17: Object | null, p18: Object | null): Object | null;
    invoke(p1: Object | null, p2: Object | null, p3: Object | null, p4: Object | null, p5: Object | null, p6: Object | null, p7: Object | null, p8: Object | null, p9: Object | null, p10: Object | null, p11: Object | null, p12: Object | null, p13: Object | null, p14: Object | null, p15: Object | null, p16: Object | null, p17: Object | null, p18: Object | null, p19: Object | null): Object | null;
    invoke(p1: Object | null, p2: Object | null, p3: Object | null, p4: Object | null, p5: Object | null, p6: Object | null, p7: Object | null, p8: Object | null, p9: Object | null, p10: Object | null, p11: Object | null, p12: Object | null, p13: Object | null, p14: Object | null, p15: Object | null, p16: Object | null, p17: Object | null, p18: Object | null, p19: Object | null, p20: Object | null): Object | null;
    invoke(p1: Object | null, p2: Object | null, p3: Object | null, p4: Object | null, p5: Object | null, p6: Object | null, p7: Object | null, p8: Object | null, p9: Object | null, p10: Object | null, p11: Object | null, p12: Object | null, p13: Object | null, p14: Object | null, p15: Object | null, p16: Object | null, p17: Object | null, p18: Object | null, p19: Object | null, p20: Object | null, p21: Object | null): Object | null;
    invoke(p1: Object | null, p2: Object | null, p3: Object | null, p4: Object | null, p5: Object | null, p6: Object | null, p7: Object | null, p8: Object | null, p9: Object | null, p10: Object | null, p11: Object | null, p12: Object | null, p13: Object | null, p14: Object | null, p15: Object | null, p16: Object | null, p17: Object | null, p18: Object | null, p19: Object | null, p20: Object | null, p21: Object | null, p22: Object | null): Object | null;
    shallowCopy(container: KDeclarationContainerImpl, overriddenStorage: KCallableOverriddenStorage): DescriptorKFunction;
    toString(): string;
    // private useBoxedBoundReceiver(member: Method): boolean;
}