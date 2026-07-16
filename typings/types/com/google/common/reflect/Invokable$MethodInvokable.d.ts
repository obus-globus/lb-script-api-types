import type { Invokable } from '../../../../com/google/common/reflect/Invokable.d.ts'
import type { AnnotatedType } from '../../../../java/lang/reflect/AnnotatedType.d.ts'
import type { Constructor } from '../../../../java/lang/reflect/Constructor.d.ts'
import type { Method } from '../../../../java/lang/reflect/Method.d.ts'
import type { Type } from '../../../../java/lang/reflect/Type.d.ts'
import type { TypeVariable } from '../../../../java/lang/reflect/TypeVariable.d.ts'
import type { Annotation } from '../../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Invokable$MethodInvokable<T extends unknown> extends Invokable<T, Object> {
    static DECLARED: number;
    static PUBLIC: number;
    static from<T extends unknown>(paramconstructor: Constructor<T>): Invokable<T, T>;
    static from(parammethod: Method): Invokable<Object, Object>;
    constructor(method: Method)
    // private method: Method;
    getAnnotatedParameterTypes(): AnnotatedType[];
    getAnnotatedReturnType(): AnnotatedType;
    getGenericExceptionTypes(): Type[];
    getGenericParameterTypes(): Type[];
    getGenericReturnType(): Type;
    getParameterAnnotations(): Annotation[][];
    getTypeParameters(): TypeVariable<any>[];
    invokeInternal(receiver: Object, args: Object[]): Object;
    isOverridable(): boolean;
    isVarArgs(): boolean;
}