import type { Annotation } from '../../../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { KClass } from '../../../../../kotlin/reflect/KClass.d.ts'
export interface Next extends Annotation, Object{
    /*not mapped: */ args(): KClass<Object>[];
    /*not mapped: */ max(): number;
    /*not mapped: */ min(): number;
    /*not mapped: */ name(): string;
    /*not mapped: */ ret(): KClass<Object>;
}