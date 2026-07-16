import type { Class } from '../../../java/lang/Class.d.ts'
import type { StringBuilder } from '../../../java/lang/StringBuilder.d.ts'
import type { AccessFlag } from '../../../java/lang/reflect/AccessFlag.d.ts'
import type { AccessibleObject } from '../../../java/lang/reflect/AccessibleObject.d.ts'
import type { AnnotatedType } from '../../../java/lang/reflect/AnnotatedType.d.ts'
import type { Executable$ParameterData } from '../../../java/lang/reflect/Executable$ParameterData.d.ts'
import type { GenericDeclaration } from '../../../java/lang/reflect/GenericDeclaration.d.ts'
import type { Member } from '../../../java/lang/reflect/Member.d.ts'
import type { Parameter } from '../../../java/lang/reflect/Parameter.d.ts'
import type { Type } from '../../../java/lang/reflect/Type.d.ts'
import type { TypeVariable } from '../../../java/lang/reflect/TypeVariable.d.ts'
import type { Annotation } from '../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { ConstructorRepository } from '../../../sun/reflect/generics/repository/ConstructorRepository.d.ts'
export class Executable extends AccessibleObject implements GenericDeclaration, Member {
    static DECLARED: number;
    static PUBLIC: number;
    static setAccessible(paramarg0: AccessibleObject[], paramarg1: boolean): void;
    constructor()
    readonly declaredAnnotations: Map<Class<Annotation>, Annotation>;
    // private parameterData: Executable$ParameterData;
    accessFlags(): AccessFlag[];
    // private declaredAnnotations(): Map<Class<Annotation>, Annotation>;
    equalParamTypes(arg0: Class<Object>[], arg1: Class<Object>[]): boolean;
    getAllGenericParameterTypes(): Type[];
    getAnnotatedExceptionTypes(): AnnotatedType[];
    getAnnotatedParameterTypes(): AnnotatedType[];
    getAnnotatedReceiverType(): AnnotatedType;
    getAnnotatedReturnType(): AnnotatedType;
    getAnnotatedReturnType0(arg0: Type): AnnotatedType;
    getAnnotation<T extends Annotation>(arg0: Class<T>): T;
    getAnnotationBytes(): number[];
    getAnnotationsByType<T extends Annotation>(arg0: Class<T>): T[];
    getDeclaredAnnotations(): Annotation[];
    getDeclaringClass(): Class<Object>;
    getExceptionTypes(): Class<Object>[];
    getGenericExceptionTypes(): Type[];
    getGenericInfo(): ConstructorRepository;
    getGenericParameterTypes(): Type[];
    getModifiers(): number;
    getName(): string;
    getParameterAnnotations(): Annotation[][];
    getParameterCount(): number;
    getParameterTypes(): Class<Object>[];
    getParameters(): Parameter[];
    // private getParameters0(): Parameter[];
    getSharedExceptionTypes(): Class<Object>[];
    getSharedParameterTypes(): Class<Object>[];
    getTypeAnnotationBytes(): number[];
    getTypeAnnotationBytes0(): number[];
    getTypeParameters(): TypeVariable<any>[];
    handleParameterNumberMismatch(arg0: number, arg1: Class<Object>[]): boolean;
    hasGenericInformation(): boolean;
    hasRealParameterData(): boolean;
    isSynthetic(): boolean;
    isVarArgs(): boolean;
    // private parameterData(): Executable$ParameterData;
    parameterize(arg0: Class<Object>): Type;
    parseParameterAnnotations(arg0: number[]): Annotation[][];
    printModifiersIfNonzero(arg0: StringBuilder, arg1: number, arg2: boolean): void;
    sharedGetParameterAnnotations(arg0: Class<Object>[], arg1: number[]): Annotation[][];
    sharedToGenericString(arg0: number, arg1: boolean): string;
    sharedToString(arg0: number, arg1: boolean, arg2: Class<Object>[], arg3: Class<Object>[]): string;
    specificToGenericStringHeader(arg0: StringBuilder): void;
    specificToStringHeader(arg0: StringBuilder): void;
    // private synthesizeAllParams(): Parameter[];
    toGenericString(): string;
    // private verifyParameters(arg0: Parameter[]): void;
}