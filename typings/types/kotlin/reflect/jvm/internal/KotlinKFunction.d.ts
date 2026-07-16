import type { Constructor } from '../../../../java/lang/reflect/Constructor.d.ts'
import type { GenericDeclaration } from '../../../../java/lang/reflect/GenericDeclaration.d.ts'
import type { Method } from '../../../../java/lang/reflect/Method.d.ts'
import type { Annotation } from '../../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { FunctionBase } from '../../../../kotlin/jvm/internal/FunctionBase.d.ts'
import type { KParameter } from '../../../../kotlin/reflect/KParameter.d.ts'
import type { KTypeParameter } from '../../../../kotlin/reflect/KTypeParameter.d.ts'
import type { FunctionWithAllInvokes } from '../../../../kotlin/reflect/jvm/internal/FunctionWithAllInvokes.d.ts'
import type { KCallableOverriddenStorage } from '../../../../kotlin/reflect/jvm/internal/KCallableOverriddenStorage.d.ts'
import type { KDeclarationContainerImpl } from '../../../../kotlin/reflect/jvm/internal/KDeclarationContainerImpl.d.ts'
import type { KotlinKCallable } from '../../../../kotlin/reflect/jvm/internal/KotlinKCallable.d.ts'
import type { KotlinKConstructor } from '../../../../kotlin/reflect/jvm/internal/KotlinKConstructor.d.ts'
import type { ReflectKFunction } from '../../../../kotlin/reflect/jvm/internal/ReflectKFunction.d.ts'
import type { TypeParameterTable } from '../../../../kotlin/reflect/jvm/internal/TypeParameterTable.d.ts'
import type { Caller } from '../../../../kotlin/reflect/jvm/internal/calls/Caller.d.ts'
import type { CallerImpl } from '../../../../kotlin/reflect/jvm/internal/calls/CallerImpl.d.ts'
import type { KmType } from '../../../../kotlin/reflect/jvm/internal/impl/km/KmType.d.ts'
import type { KmValueParameter } from '../../../../kotlin/reflect/jvm/internal/impl/km/KmValueParameter.d.ts'
import type { JvmMethodSignature } from '../../../../kotlin/reflect/jvm/internal/impl/km/jvm/JvmMethodSignature.d.ts'
export abstract class KotlinKFunction extends KotlinKCallable<Object> implements FunctionBase<Object>, FunctionWithAllInvokes, ReflectKFunction {
    constructor(container: KDeclarationContainerImpl, signature: string, rawBoundReceiver: Object | null, overriddenStorage: KCallableOverriddenStorage)
    readonly allParameters: KParameter[];
    readonly annotations: Annotation[];
    readonly arity: number;
    readonly caller: Caller<any>;
    readonly callerWithDefaults: Caller<any> | null;
    readonly container: KDeclarationContainerImpl;
    // private /*not mapped: */ getContextParameters(): KmValueParameter[];
    // private /*not mapped: */ getExtensionReceiverType(): KmType | null;
    /*not mapped: */ isPrimaryConstructor(): boolean;
    // private /*not mapped: */ getJvmSignature(): JvmMethodSignature;
    readonly overridden: ReflectKFunction[];
    readonly parameters: KParameter[];
    readonly rawBoundReceiver: Object | null;
    readonly signature: string;
    // private /*not mapped: */ getTypeParameterTable(): TypeParameterTable;
    readonly typeParameters: KTypeParameter[];
    // private /*not mapped: */ getValueParameters(): KmValueParameter[];
    // private createConstructorCaller(member: Constructor<Object>, isDefault: boolean): CallerImpl<Constructor<Object>>;
    // private createStaticMethodCaller(member: Method, isCallByToValueClassMangledMethod: boolean): Caller<any>;
    equals(other: Object | null): boolean;
    findJavaDeclaration(): GenericDeclaration | null;
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
    // private shouldHideConstructorDueToValueClassTypeValueParameters(constructor: KotlinKConstructor): boolean;
    toString(): string;
    // private useBoxedBoundReceiver(member: Method): boolean;
}