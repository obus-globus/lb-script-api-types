import type { Annotation } from '../../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { KClass } from '../../../../kotlin/reflect/KClass.d.ts'
import type { KClass as KClass_2 } from '../../../../kotlin/reflect/KClass.d.ts'
export interface Dynamic extends Annotation, Object{
    constructor(mixin: KClass<Object>, value: string)
    /*not mapped: */ mixin(): KClass_2<Object>;
    /*not mapped: */ value(): string;
}