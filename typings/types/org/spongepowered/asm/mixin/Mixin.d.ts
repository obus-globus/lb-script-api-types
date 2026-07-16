import type { Annotation } from '../../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { KClass } from '../../../../kotlin/reflect/KClass.d.ts'
export interface Mixin extends Annotation, Object{
    /*not mapped: */ priority(): number;
    /*not mapped: */ remap(): boolean;
    /*not mapped: */ targets(): string[];
    /*not mapped: */ value(): KClass<Object>[];
}