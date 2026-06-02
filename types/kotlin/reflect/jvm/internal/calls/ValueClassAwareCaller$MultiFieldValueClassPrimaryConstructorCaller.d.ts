import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Method } from '../../../../../java/lang/reflect/Method.d.ts'
import type { Type } from '../../../../../java/lang/reflect/Type.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { KDeclarationContainerImpl } from '../../../../../kotlin/reflect/jvm/internal/KDeclarationContainerImpl.d.ts'
import type { Caller } from '../../../../../kotlin/reflect/jvm/internal/calls/Caller.d.ts'
import type { FunctionDescriptor } from '../../../../../kotlin/reflect/jvm/internal/impl/descriptors/FunctionDescriptor.d.ts'
import type { ParameterDescriptor } from '../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ParameterDescriptor.d.ts'
export class ValueClassAwareCaller$MultiFieldValueClassPrimaryConstructorCaller extends Object implements Caller<void> {
    constructor(descriptor: FunctionDescriptor, container: KDeclarationContainerImpl, constructorDesc: string, originalParameters: ParameterDescriptor[])
    // private boxMethod: Method;
    // private constructorImpl: Method;
    readonly member: void | null;
    readonly originalParametersGroups: Class<Object>[][];
    readonly parameterTypes: Type[];
    // private parameterUnboxMethods: (Method[] | null)[];
    readonly returnType: Type;
    call(args: (Object | null)[]): Object | null;
    checkArguments(args: (Object | null)[]): void;
}