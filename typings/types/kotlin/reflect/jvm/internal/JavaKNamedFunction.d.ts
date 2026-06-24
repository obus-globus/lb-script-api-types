import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Method } from '../../../../java/lang/reflect/Method.d.ts'
import type { Type } from '../../../../java/lang/reflect/Type.d.ts'
import type { TypeVariable } from '../../../../java/lang/reflect/TypeVariable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { KType } from '../../../../kotlin/reflect/KType.d.ts'
import type { JavaKFunction } from '../../../../kotlin/reflect/jvm/internal/JavaKFunction.d.ts'
import type { KCallableOverriddenStorage } from '../../../../kotlin/reflect/jvm/internal/KCallableOverriddenStorage.d.ts'
import type { KDeclarationContainerImpl } from '../../../../kotlin/reflect/jvm/internal/KDeclarationContainerImpl.d.ts'
import type { ReflectKCallable } from '../../../../kotlin/reflect/jvm/internal/ReflectKCallable.d.ts'
import type { ReflectKFunction } from '../../../../kotlin/reflect/jvm/internal/ReflectKFunction.d.ts'
import type { Caller } from '../../../../kotlin/reflect/jvm/internal/calls/Caller.d.ts'
export class JavaKNamedFunction extends JavaKFunction {
    constructor(container: KDeclarationContainerImpl, method: Method, rawBoundReceiver: Object | null, overriddenStorage: KCallableOverriddenStorage)
    readonly caller: Caller<any>;
    readonly callerWithDefaults: Caller<any> | null;
    readonly genericParameterTypes: Type[];
    /*not mapped: */ isPrimaryConstructor(): boolean;
    /*not mapped: */ isVararg(): boolean;
    /*not mapped: */ getJMethod(): Method;
    readonly javaTypeParameters: TypeVariable<any>[];
    readonly name: string;
    readonly overridden: ReflectKFunction[];
    readonly parameterTypes: Class<Object>[];
    readonly returnType: KType;
    readonly signature: string;
    // private createStaticMethodCaller(member: Method): Caller<any>;
    shallowCopy(container: KDeclarationContainerImpl, overriddenStorage: KCallableOverriddenStorage): ReflectKCallable<Object>;
}