import type { GenericDeclaration } from '../../../../java/lang/reflect/GenericDeclaration.d.ts'
import type { Method } from '../../../../java/lang/reflect/Method.d.ts'
import type { Annotation } from '../../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { FunctionBase } from '../../../../kotlin/jvm/internal/FunctionBase.d.ts'
import type { KParameter } from '../../../../kotlin/reflect/KParameter.d.ts'
import type { KType } from '../../../../kotlin/reflect/KType.d.ts'
import type { KTypeParameter } from '../../../../kotlin/reflect/KTypeParameter.d.ts'
import type { KVisibility } from '../../../../kotlin/reflect/KVisibility.d.ts'
import type { FunctionWithAllInvokes } from '../../../../kotlin/reflect/jvm/internal/FunctionWithAllInvokes.d.ts'
import type { KCallableOverriddenStorage } from '../../../../kotlin/reflect/jvm/internal/KCallableOverriddenStorage.d.ts'
import type { KClassImpl } from '../../../../kotlin/reflect/jvm/internal/KClassImpl.d.ts'
import type { KDeclarationContainerImpl } from '../../../../kotlin/reflect/jvm/internal/KDeclarationContainerImpl.d.ts'
import type { ReflectKCallable } from '../../../../kotlin/reflect/jvm/internal/ReflectKCallable.d.ts'
import type { ReflectKCallableImpl } from '../../../../kotlin/reflect/jvm/internal/ReflectKCallableImpl.d.ts'
import type { ReflectKFunction } from '../../../../kotlin/reflect/jvm/internal/ReflectKFunction.d.ts'
import type { Caller } from '../../../../kotlin/reflect/jvm/internal/calls/Caller.d.ts'
import type { Modality } from '../../../../kotlin/reflect/jvm/internal/impl/km/Modality.d.ts'
export class JavaAnnotationConstructor extends ReflectKCallableImpl<Object> implements FunctionBase<Object>, FunctionWithAllInvokes, ReflectKFunction {
    constructor(klass: KClassImpl<Object>)
    readonly allParameters: KParameter[];
    readonly annotations: Annotation[];
    readonly arity: number;
    readonly caller: Caller<any>;
    readonly callerWithDefaults: Caller<any>;
    readonly container: KDeclarationContainerImpl;
    /*not mapped: */ isExternal(): boolean;
    /*not mapped: */ isInfix(): boolean;
    /*not mapped: */ isInline(): boolean;
    /*not mapped: */ isOperator(): boolean;
    /*not mapped: */ isPackagePrivate(): boolean;
    /*not mapped: */ isPrimaryConstructor(): boolean;
    /*not mapped: */ isSuspend(): boolean;
    // private klass: KClassImpl<Object>;
    // private methods: Method[];
    readonly modality: Modality;
    readonly name: string;
    readonly overridden: ReflectKFunction[];
    readonly parameters: KParameter[];
    readonly rawBoundReceiver: Object | null;
    readonly returnType: KType;
    readonly signature: string;
    readonly typeParameters: KTypeParameter[];
    readonly visibility: KVisibility | null;
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
    shallowCopy(container: KDeclarationContainerImpl, overriddenStorage: KCallableOverriddenStorage): ReflectKCallable<Object>;
    toString(): string;
}