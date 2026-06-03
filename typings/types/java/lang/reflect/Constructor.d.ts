import type { Class } from '../../../java/lang/Class.d.ts'
import type { StringBuilder } from '../../../java/lang/StringBuilder.d.ts'
import type { AnnotatedType } from '../../../java/lang/reflect/AnnotatedType.d.ts'
import type { Executable } from '../../../java/lang/reflect/Executable.d.ts'
import type { Type } from '../../../java/lang/reflect/Type.d.ts'
import type { TypeVariable } from '../../../java/lang/reflect/TypeVariable.d.ts'
import type { ConstructorAccessor } from '../../../jdk/internal/reflect/ConstructorAccessor.d.ts'
import type { Annotation } from '../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { GenericsFactory } from '../../../sun/reflect/generics/factory/GenericsFactory.d.ts'
import type { ConstructorRepository } from '../../../sun/reflect/generics/repository/ConstructorRepository.d.ts'
export class Constructor<T extends Object | number | string | boolean> extends Executable {
    static DECLARED: number;
    static PUBLIC: number;
    static setAccessible(paramarg0: (Object | null)[], paramarg1: boolean): void;
    constructor(arg0: Class<T>, arg1: Class<Object>[], arg2: Class<Object>[], arg3: number, arg4: number, arg5: string, arg6: number[], arg7: number[])
    // private acquireConstructorAccessor(): ConstructorAccessor;
    checkCanSetAccessible(arg0: Class<Object>): void;
    checkCanSetAccessible(arg0: Class<Object>, arg1: Class<Object>): void;
    copy(): Constructor<T>;
    equals(arg0: Object | null): boolean;
    getAnnotatedReceiverType(): AnnotatedType;
    getAnnotatedReturnType(): AnnotatedType;
    getAnnotation(arg0: Class<T>): T;
    getAnnotationBytes(): number[];
    getConstructorAccessor(): ConstructorAccessor;
    getDeclaredAnnotations(): Annotation[];
    getDeclaringClass(): Class<T>;
    getExceptionTypes(): Class<Object>[];
    // private getFactory(): GenericsFactory;
    getGenericExceptionTypes(): Type[];
    getGenericInfo(): ConstructorRepository;
    getGenericParameterTypes(): Type[];
    getModifiers(): number;
    getName(): string;
    getParameterAnnotations(): Annotation[][];
    getParameterCount(): number;
    getParameterTypes(): Class<Object>[];
    getRawAnnotations(): number[];
    getRawParameterAnnotations(): number[];
    getRoot(): Constructor<T>;
    getSharedExceptionTypes(): Class<Object>[];
    getSharedParameterTypes(): Class<Object>[];
    getSignature(): string;
    getSlot(): number;
    getTypeParameters(): TypeVariable<Constructor<T>>[];
    handleParameterNumberMismatch(arg0: number, arg1: Class<Object>[]): boolean;
    hasGenericInformation(): boolean;
    hashCode(): number;
    isSynthetic(): boolean;
    isVarArgs(): boolean;
    newInstance(arg0: Object[]): T;
    newInstanceWithCaller(arg0: Object[], arg1: boolean, arg2: Class<Object>): T;
    newWithAccessor(arg0: ConstructorAccessor): Constructor<T>;
    setAccessible(arg0: boolean): void;
    setConstructorAccessor(arg0: ConstructorAccessor): void;
    specificToGenericStringHeader(arg0: StringBuilder): void;
    specificToStringHeader(arg0: StringBuilder): void;
    toGenericString(): string;
    toShortString(): string;
    toString(): string;
}