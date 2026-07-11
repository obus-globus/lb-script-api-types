import type { Class } from '../../../java/lang/Class.d.ts'
import type { StringBuilder } from '../../../java/lang/StringBuilder.d.ts'
import type { AnnotatedType } from '../../../java/lang/reflect/AnnotatedType.d.ts'
import type { Executable } from '../../../java/lang/reflect/Executable.d.ts'
import type { Type } from '../../../java/lang/reflect/Type.d.ts'
import type { TypeVariable } from '../../../java/lang/reflect/TypeVariable.d.ts'
import type { MethodAccessor } from '../../../jdk/internal/reflect/MethodAccessor.d.ts'
import type { Annotation } from '../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { GenericsFactory } from '../../../sun/reflect/generics/factory/GenericsFactory.d.ts'
import type { MethodRepository } from '../../../sun/reflect/generics/repository/MethodRepository.d.ts'
export class Method extends Executable {
    static DECLARED: number;
    static PUBLIC: number;
    static setAccessible(paramarg0: (Object | null)[], paramarg1: boolean): void;
    constructor(arg0: Class<Object>, arg1: string, arg2: Class<Object>[], arg3: Class<Object>, arg4: Class<Object>[], arg5: number, arg6: number, arg7: string, arg8: number[], arg9: number[], arg10: number[])
    // private acquireMethodAccessor(): MethodAccessor;
    checkCanSetAccessible(arg0: Class<Object>): void;
    checkCanSetAccessible(arg0: Class<Object>, arg1: Class<Object>): void;
    copy(): Method;
    equals(arg0: Object | null): boolean;
    getAnnotatedReturnType(): AnnotatedType;
    getAnnotation<T extends Annotation>(arg0: Class<T>): T;
    getAnnotationBytes(): number[];
    getDeclaredAnnotations(): Annotation[];
    getDeclaringClass(): Class<Object>;
    getDefaultValue(): Object;
    getExceptionTypes(): Class<Object>[];
    // private getFactory(): GenericsFactory;
    getGenericExceptionTypes(): Type[];
    getGenericInfo(): MethodRepository;
    getGenericParameterTypes(): Type[];
    getGenericReturnType(): Type;
    // private getGenericSignature(): string;
    getMethodAccessor(): MethodAccessor;
    getModifiers(): number;
    getName(): string;
    getParameterAnnotations(): Annotation[][];
    getParameterCount(): number;
    getParameterTypes(): Class<Object>[];
    getReturnType(): Class<Object>;
    getRoot(): Method;
    getSharedExceptionTypes(): Class<Object>[];
    getSharedParameterTypes(): Class<Object>[];
    getTypeParameters(): TypeVariable<Method>[];
    handleParameterNumberMismatch(arg0: number, arg1: Class<Object>[]): boolean;
    hasGenericInformation(): boolean;
    hashCode(): number;
    invoke(arg0: Object, ...arg1: Object[]): Object;
    // private invoke(arg0: Object, arg1: Object[], arg2: Class<Object>): Object;
    isBridge(): boolean;
    // private isCallerSensitive(): boolean;
    isDefault(): boolean;
    isSynthetic(): boolean;
    isVarArgs(): boolean;
    setAccessible(arg0: boolean): void;
    setMethodAccessor(arg0: MethodAccessor): void;
    specificToGenericStringHeader(arg0: StringBuilder): void;
    specificToStringHeader(arg0: StringBuilder): void;
    toGenericString(): string;
    toShortSignature(): string;
    toShortString(): string;
    toString(): string;
}