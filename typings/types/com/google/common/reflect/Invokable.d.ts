import type { Parameter } from '../../../../com/google/common/reflect/Parameter.d.ts'
import type { TypeToken } from '../../../../com/google/common/reflect/TypeToken.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { AccessFlag } from '../../../../java/lang/reflect/AccessFlag.d.ts'
import type { AccessibleObject } from '../../../../java/lang/reflect/AccessibleObject.d.ts'
import type { AnnotatedElement } from '../../../../java/lang/reflect/AnnotatedElement.d.ts'
import type { AnnotatedType } from '../../../../java/lang/reflect/AnnotatedType.d.ts'
import type { Constructor } from '../../../../java/lang/reflect/Constructor.d.ts'
import type { Member } from '../../../../java/lang/reflect/Member.d.ts'
import type { Method } from '../../../../java/lang/reflect/Method.d.ts'
import type { Type } from '../../../../java/lang/reflect/Type.d.ts'
import type { TypeVariable } from '../../../../java/lang/reflect/TypeVariable.d.ts'
import type { Annotation } from '../../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
export abstract class Invokable<T extends unknown, R extends unknown> extends Object implements AnnotatedElement, Member {
    static DECLARED: number;
    static PUBLIC: number;
    static from(paramconstructor: Constructor<Object>): Invokable<Object, Object>;
    static from(parammethod: Method): Invokable<Object, Object>;
    constructor(member: AccessibleObject)
    // private accessibleObject: AccessibleObject;
    // private member: Member;
    accessFlags(): AccessFlag[];
    equals(obj: Object | null): boolean;
    getAnnotatedParameterTypes(): AnnotatedType[];
    getAnnotatedReturnType(): AnnotatedType;
    getAnnotation<A extends Annotation>(annotationClass: Class<A>): A;
    getAnnotations(): Annotation[];
    getAnnotationsByType(arg0: Class<T>): T[];
    getDeclaredAnnotation(arg0: Class<T>): T;
    getDeclaredAnnotations(): Annotation[];
    getDeclaredAnnotationsByType(arg0: Class<T>): T[];
    getDeclaringClass(): Class<T>;
    getExceptionTypes(): TypeToken<Throwable>[];
    getGenericExceptionTypes(): Type[];
    getGenericParameterTypes(): Type[];
    getGenericReturnType(): Type;
    getModifiers(): number;
    getName(): string;
    getOwnerType(): TypeToken<T>;
    getParameterAnnotations(): Annotation[][];
    getParameters(): Parameter[];
    getReturnType(): TypeToken<R>;
    getTypeParameters(): TypeVariable<any>[];
    hashCode(): number;
    invoke(receiver: T, ...args: Object[]): R;
    invokeInternal(receiver: Object, args: Object[]): Object;
    isAbstract(): boolean;
    isAccessible(): boolean;
    isAnnotationPresent(annotationClass: Class<Annotation>): boolean;
    isAnnotationPresent(arg0: Class<Annotation>): boolean;
    isFinal(): boolean;
    isNative(): boolean;
    isOverridable(): boolean;
    isPackagePrivate(): boolean;
    isPrivate(): boolean;
    isProtected(): boolean;
    isPublic(): boolean;
    isStatic(): boolean;
    isSynchronized(): boolean;
    isSynthetic(): boolean;
    isTransient(): boolean;
    isVarArgs(): boolean;
    isVolatile(): boolean;
    returning<R1 extends R>(returnType: TypeToken<R1>): Invokable<T, R1>;
    returning<R1 extends R>(returnType: Class<R1>): Invokable<T, R1>;
    setAccessible(flag: boolean): void;
    toString(): string;
    trySetAccessible(): boolean;
}