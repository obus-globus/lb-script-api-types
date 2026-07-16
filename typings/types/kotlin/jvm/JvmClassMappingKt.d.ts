import type { Class } from '../../java/lang/Class.d.ts'
import type { Annotation } from '../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { KClass } from '../../kotlin/reflect/KClass.d.ts'
export class JvmClassMappingKt extends Object {
    static getAnnotationClass(paramarg0: Annotation | null): KClass<Annotation>;
    static getJavaClass(paramarg0: Object | null): Class<Object>;
    static getJavaClass(paramarg0: KClass<Object>): Class<Object>;
    static getJavaObjectType(paramarg0: KClass<Object>): Class<Object>;
    static getJavaPrimitiveType(paramarg0: KClass<Object>): Class<Object>;
    static getKotlinClass(paramarg0: Class<Object>): KClass<Object>;
    static getRuntimeClassOfKClassInstance(paramarg0: KClass<Object>): Class<KClass<Object>>;
    static isArrayOf(paramarg0: Object[]): boolean;
}