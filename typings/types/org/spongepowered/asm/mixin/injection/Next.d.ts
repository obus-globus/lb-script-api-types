import type { Annotation } from '../../../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { KClass } from '../../../../../kotlin/reflect/KClass.d.ts'
import type { KClass as KClass_2 } from '../../../../../kotlin/reflect/KClass.d.ts'
export interface Next extends Annotation, Object{
    constructor(args: KClass<Object>[], max: number, min: number, name: string, ret: KClass<Object>)
    /*not mapped: */ args(): KClass_2<Object>[];
    /*not mapped: */ max(): number;
    /*not mapped: */ min(): number;
    /*not mapped: */ name(): string;
    /*not mapped: */ ret(): KClass_2<Object>;
}