import type { Annotation } from '../../../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { KClass } from '../../../../../kotlin/reflect/KClass.d.ts'
export interface NodeField extends Annotation, Object{
    /*not mapped: */ name(): string;
    /*not mapped: */ type(): KClass<Object>;
}