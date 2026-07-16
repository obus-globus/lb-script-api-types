import type { Class } from '../../java/lang/Class.d.ts'
import type { Annotation } from '../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { KClass } from '../../kotlin/reflect/KClass.d.ts'
export class JvmClassMappingKt extends Object {
    static getAnnotationClass<T extends Annotation>(paramarg0: T): KClass<T>;
    static getJavaClass<T extends unknown>(paramarg0: T): Class<T>;
    static getJavaClass<T extends unknown>(paramarg0: KClass<T>): Class<T>;
    static getJavaObjectType<T extends unknown>(paramarg0: KClass<T>): Class<T>;
    static getJavaPrimitiveType<T extends unknown>(paramarg0: KClass<T>): Class<T>;
    static getKotlinClass<T extends unknown>(paramarg0: Class<T>): KClass<T>;
    static getRuntimeClassOfKClassInstance<T extends unknown>(paramarg0: KClass<T>): Class<KClass<T>>;
    static isArrayOf(self: (Object | null)[]): boolean;
}