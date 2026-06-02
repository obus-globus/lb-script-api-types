import type { Annotation } from '../../../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { KClass } from '../../../../../kotlin/reflect/KClass.d.ts'
export interface GenerateWrapper extends Annotation, Object{
    constructor(resumeMethodPrefix: string, yieldExceptions: KClass<Object>[])
    /*not mapped: */ resumeMethodPrefix(): string;
    /*not mapped: */ yieldExceptions(): KClass<Object>[];
}