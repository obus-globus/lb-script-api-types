import type { Annotation } from '../../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { KClass } from '../../../../kotlin/reflect/KClass.d.ts'
export interface Dynamic extends Annotation, Object{
    /*not mapped: */ mixin(): KClass<Object>;
    /*not mapped: */ value(): string;
}