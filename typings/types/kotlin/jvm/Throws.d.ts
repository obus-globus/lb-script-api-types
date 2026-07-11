import type { Annotation } from '../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Throwable } from '../../java/lang/Throwable.d.ts'
import type { KClass } from '../../kotlin/reflect/KClass.d.ts'
export interface Throws extends Annotation, Object{
    constructor(...exceptionClasses: KClass<Throwable>[])
    /*not mapped: */ exceptionClasses(): KClass<Throwable>[];
}