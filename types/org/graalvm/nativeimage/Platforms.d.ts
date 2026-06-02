import type { Annotation } from '../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { KClass } from '../../../kotlin/reflect/KClass.d.ts'
import type { Platform } from '../../../org/graalvm/nativeimage/Platform.d.ts'
export interface Platforms extends Annotation, Object{
    constructor(value: KClass<Platform>[])
    /*not mapped: */ value(): KClass<Platform>[];
}