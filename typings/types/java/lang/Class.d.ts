import type { InputStream } from '../../java/io/InputStream.d.ts'
import type { Serializable } from '../../java/io/Serializable.d.ts'
import type { Class$AnnotationData } from '../../java/lang/Class$AnnotationData.d.ts'
import type { Class$EnclosingMethodInfo } from '../../java/lang/Class$EnclosingMethodInfo.d.ts'
import type { Class$ReflectionData } from '../../java/lang/Class$ReflectionData.d.ts'
import type { ClassLoader } from '../../java/lang/ClassLoader.d.ts'
import type { Module } from '../../java/lang/Module.d.ts'
import type { Package } from '../../java/lang/Package.d.ts'
import type { PublicMethods$MethodList } from '../../java/lang/PublicMethods$MethodList.d.ts'
import type { StringBuilder } from '../../java/lang/StringBuilder.d.ts'
import type { ClassDesc } from '../../java/lang/constant/ClassDesc.d.ts'
import type { Constable } from '../../java/lang/constant/Constable.d.ts'
import type { TypeDescriptor$OfField } from '../../java/lang/invoke/TypeDescriptor$OfField.d.ts'
import type { SoftReference } from '../../java/lang/ref/SoftReference.d.ts'
import type { AccessFlag } from '../../java/lang/reflect/AccessFlag.d.ts'
import type { AnnotatedElement } from '../../java/lang/reflect/AnnotatedElement.d.ts'
import type { AnnotatedType } from '../../java/lang/reflect/AnnotatedType.d.ts'
import type { Constructor } from '../../java/lang/reflect/Constructor.d.ts'
import type { Field } from '../../java/lang/reflect/Field.d.ts'
import type { GenericDeclaration } from '../../java/lang/reflect/GenericDeclaration.d.ts'
import type { Method } from '../../java/lang/reflect/Method.d.ts'
import type { RecordComponent } from '../../java/lang/reflect/RecordComponent.d.ts'
import type { Type } from '../../java/lang/reflect/Type.d.ts'
import type { TypeVariable } from '../../java/lang/reflect/TypeVariable.d.ts'
import type { URL } from '../../java/net/URL.d.ts'
import type { ProtectionDomain } from '../../java/security/ProtectionDomain.d.ts'
import type { Optional } from '../../java/util/Optional.d.ts'
import type { ConstantPool } from '../../jdk/internal/reflect/ConstantPool.d.ts'
import type { Annotation } from '../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { AnnotationType } from '../../sun/reflect/annotation/AnnotationType.d.ts'
import type { GenericsFactory } from '../../sun/reflect/generics/factory/GenericsFactory.d.ts'
import type { ClassRepository } from '../../sun/reflect/generics/repository/ClassRepository.d.ts'
export class Class<T extends unknown> extends Object implements Serializable, Constable, TypeDescriptor$OfField<Class<Object>>, AnnotatedElement, GenericDeclaration, Type {
    static forName(paramarg0: Module, paramarg1: string): Class<Object>;
    static forName(paramarg0: string): Class<Object>;
    static forName(paramarg0: string, paramarg1: boolean, paramarg2: ClassLoader): Class<Object>;
    static forPrimitiveName(paramarg0: string): Class<Object>;
    private constructor(arg0: ClassLoader, arg1: Class<Object>, arg2: string, arg3: ProtectionDomain, arg4: boolean)
    // private annotationData: Class$AnnotationData;
    // private annotationType: AnnotationType;
    // private cachedConstructor: Constructor<T>;
    // private classRedefinedCount: number;
    // private classValueMap: { [key: string]: any };
    // private enumConstantDirectory: { [key: string]: T };
    readonly enumConstants: T[];
    // private genericInfo: ClassRepository;
    readonly module: Module;
    readonly name: string;
    readonly packageName: string;
    // private reflectionData: SoftReference<Class$ReflectionData<T>>;
    readonly signers: Object[];
    accessFlags(): AccessFlag[];
    // private addSealingInfo(arg0: number, arg1: StringBuilder): void;
    // private annotationData(): Class$AnnotationData;
    arrayType(): Class<Object>;
    asSubclass<U extends unknown>(arg0: Class<U>): Class<U>;
    // private cannotCastMsg(arg0: Object): string;
    casAnnotationType(arg0: AnnotationType, arg1: AnnotationType): boolean;
    cast(arg0: Object): T;
    componentType(): Class<Object>;
    // private createAnnotationData(arg0: number): Class$AnnotationData;
    describeConstable(): Optional<ClassDesc>;
    descriptorString(): string;
    desiredAssertionStatus(): boolean;
    // private elementType(): Class<Object>;
    enumConstantDirectory(): { [key: string]: T };
    findMethod(arg0: boolean, arg1: string, ...arg2: Class<Object>[]): Method;
    getAnnotatedInterfaces(): AnnotatedType[];
    getAnnotatedSuperclass(): AnnotatedType;
    getAnnotation<A extends Annotation>(arg0: Class<A>): A;
    getAnnotationType(): AnnotationType;
    getAnnotations(): Annotation[];
    getAnnotationsByType<A extends Annotation>(arg0: Class<A>): A[];
    getAnnotationsByType(arg0: Class<T>): T[];
    getCanonicalName(): string;
    // private getCanonicalName0(): string;
    // private getClassAccessFlagsRaw(): number;
    // private getClassAccessFlagsRaw0(): number;
    getClassData(): Object;
    getClassFileVersion(): number;
    // private getClassFileVersion0(): number;
    getClassLoader(): ClassLoader;
    getClassLoader0(): ClassLoader;
    getClasses(): Class<Object>[];
    getComponentType(): Class<Object>;
    getConstantPool(): ConstantPool;
    getConstructor(...arg0: Class<Object>[]): Constructor<T>;
    // private getConstructor0(arg0: Class<Object>[], arg1: number): Constructor<T>;
    getConstructors(): Constructor<Object>[];
    getDeclaredAnnotation<A extends Annotation>(arg0: Class<A>): A;
    getDeclaredAnnotation(arg0: Class<T>): T;
    getDeclaredAnnotationMap(): Map<Class<Annotation>, Annotation>;
    getDeclaredAnnotations(): Annotation[];
    getDeclaredAnnotationsByType<A extends Annotation>(arg0: Class<A>): A[];
    getDeclaredAnnotationsByType(arg0: Class<T>): T[];
    getDeclaredClasses(): Class<Object>[];
    // private getDeclaredClasses0(): Class<Object>[];
    getDeclaredConstructor(...arg0: Class<Object>[]): Constructor<T>;
    getDeclaredConstructors(): Constructor<Object>[];
    // private getDeclaredConstructors0(arg0: boolean): Constructor<T>[];
    getDeclaredField(arg0: string): Field;
    getDeclaredFields(): Field[];
    // private getDeclaredFields0(arg0: boolean): Field[];
    getDeclaredMethod(arg0: string, ...arg1: Class<Object>[]): Method;
    getDeclaredMethods(): Method[];
    // private getDeclaredMethods0(arg0: boolean): Method[];
    getDeclaredPublicMethods(arg0: string, ...arg1: Class<Object>[]): Method[];
    getDeclaringClass(): Class<Object>;
    // private getDeclaringClass0(): Class<Object>;
    getEnclosingClass(): Class<Object>;
    getEnclosingConstructor(): Constructor<Object>;
    getEnclosingMethod(): Method;
    // private getEnclosingMethod0(): Object[];
    // private getEnclosingMethodInfo(): Class$EnclosingMethodInfo;
    getEnumConstants(): T[];
    getEnumConstantsShared(): T[];
    // private getFactory(): GenericsFactory;
    getField(arg0: string): Field;
    // private getField0(arg0: string): Field;
    getFields(): Field[];
    // private getGenericInfo(): ClassRepository;
    getGenericInterfaces(): Type[];
    // private getGenericSignature0(): string;
    getGenericSuperclass(): Type;
    getInterfaces(): Class<Object>[];
    // private getInterfaces(arg0: boolean): Class<Object>[];
    // private getInterfaces0(): Class<Object>[];
    getMethod(arg0: string, ...arg1: Class<Object>[]): Method;
    // private getMethod0(arg0: string, arg1: Class<Object>[]): Method;
    getMethods(): Method[];
    // private getMethodsRecursive(arg0: string, arg1: Class<Object>[], arg2: boolean, arg3: boolean): PublicMethods$MethodList;
    getModifiers(): number;
    getModule(): Module;
    getName(): string;
    getNestHost(): Class<Object>;
    // private getNestHost0(): Class<Object>;
    getNestMembers(): Class<Object>[];
    // private getNestMembers0(): Class<Object>[];
    getPackage(): Package;
    getPackageName(): string;
    getPermittedSubclasses(): Class<Object>[];
    // private getPermittedSubclasses0(): Class<Object>[];
    getProtectionDomain(): ProtectionDomain;
    getRawAnnotations(): number[];
    getRawTypeAnnotations(): number[];
    getRecordComponents(): RecordComponent[];
    // private getRecordComponents0(): RecordComponent[];
    getResource(arg0: string): URL;
    getResourceAsStream(arg0: string): InputStream;
    getSigners(): Object[];
    // private getSimpleBinaryName(): string;
    // private getSimpleBinaryName0(): string;
    getSimpleName(): string;
    // private getSimpleName0(): string;
    getSuperclass(): Class<T>;
    getTypeName(): string;
    getTypeParameters(): TypeVariable<Class<T>>[];
    // private hasEnclosingMethodInfo(): boolean;
    // private hasSealedAncestor(arg0: Class<Object>): boolean;
    // private initClassName(): string;
    isAnnotation(): boolean;
    isAnnotationPresent(arg0: Class<Annotation>): boolean;
    isAnonymousClass(): boolean;
    isArray(): boolean;
    isAssignableFrom(arg0: Class<Object>): boolean;
    // private isDirectSubType(arg0: Class<Object>): boolean;
    isEnum(): boolean;
    isHidden(): boolean;
    isInstance(arg0: Object): boolean;
    isInterface(): boolean;
    isLocalClass(): boolean;
    // private isLocalOrAnonymousClass(): boolean;
    isMemberClass(): boolean;
    isNestmateOf(arg0: Class<Object>): boolean;
    // private isOpenToCaller(arg0: string, arg1: Class<Object>): boolean;
    isPrimitive(): boolean;
    isRecord(): boolean;
    // private isRecord0(): boolean;
    isSealed(): boolean;
    isSynthetic(): boolean;
    // private isTopLevelClass(): boolean;
    // private methodToString(arg0: string, arg1: Class<Object>[]): string;
    newInstance(): T;
    // private newReflectionData(arg0: SoftReference<Class$ReflectionData<T>>, arg1: number): Class$ReflectionData<T>;
    // private privateGetDeclaredConstructors(arg0: boolean): Constructor<T>[];
    // private privateGetDeclaredFields(arg0: boolean): Field[];
    // private privateGetDeclaredMethods(arg0: boolean): Method[];
    // private privateGetPublicFields(): Field[];
    // private privateGetPublicMethods(): Method[];
    // private reflectionData(): Class$ReflectionData<T>;
    // private resolveName(arg0: string): string;
    setSigners(arg0: Object[]): void;
    toGenericString(): string;
    toString(): string;
}