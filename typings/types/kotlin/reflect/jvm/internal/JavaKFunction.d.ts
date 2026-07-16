import type { Class } from '../../../../java/lang/Class.d.ts'
import type { GenericDeclaration } from '../../../../java/lang/reflect/GenericDeclaration.d.ts'
import type { Member } from '../../../../java/lang/reflect/Member.d.ts'
import type { Type } from '../../../../java/lang/reflect/Type.d.ts'
import type { TypeVariable } from '../../../../java/lang/reflect/TypeVariable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { FunctionBase } from '../../../../kotlin/jvm/internal/FunctionBase.d.ts'
import type { KParameter } from '../../../../kotlin/reflect/KParameter.d.ts'
import type { KTypeParameter } from '../../../../kotlin/reflect/KTypeParameter.d.ts'
import type { FunctionWithAllInvokes } from '../../../../kotlin/reflect/jvm/internal/FunctionWithAllInvokes.d.ts'
import type { JavaKCallable } from '../../../../kotlin/reflect/jvm/internal/JavaKCallable.d.ts'
import type { KCallableOverriddenStorage } from '../../../../kotlin/reflect/jvm/internal/KCallableOverriddenStorage.d.ts'
import type { KDeclarationContainerImpl } from '../../../../kotlin/reflect/jvm/internal/KDeclarationContainerImpl.d.ts'
import type { ReflectKFunction } from '../../../../kotlin/reflect/jvm/internal/ReflectKFunction.d.ts'
export abstract class JavaKFunction extends JavaKCallable<Object> implements FunctionBase<Object>, FunctionWithAllInvokes, ReflectKFunction {
    constructor(container: KDeclarationContainerImpl, member: Member, rawBoundReceiver: Object | null, overriddenStorage: KCallableOverriddenStorage)
    readonly allParameters: KParameter[];
    readonly arity: number;
    readonly genericParameterTypes: Type[];
    /*not mapped: */ isExternal(): boolean;
    /*not mapped: */ isInfix(): boolean;
    /*not mapped: */ isInline(): boolean;
    /*not mapped: */ isOperator(): boolean;
    /*not mapped: */ isPrimaryConstructor(): boolean;
    /*not mapped: */ isVararg(): boolean;
    readonly javaTypeParameters: TypeVariable<any>[];
    readonly parameterTypes: Class<Object>[];
    readonly parameters: KParameter[];
    /*not mapped: */ getSignature(): string;
    readonly typeParameters: KTypeParameter[];
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
    toString(): string;
}