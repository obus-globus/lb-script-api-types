import type { Annotation } from '../../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { KClass } from '../../../../kotlin/reflect/KClass.d.ts'
export interface MagicConstant extends Annotation, Object{
    /*not mapped: */ flags(): number[];
    /*not mapped: */ flagsFromClass(): KClass<Object>;
    /*not mapped: */ intValues(): number[];
    /*not mapped: */ stringValues(): string[];
    /*not mapped: */ valuesFromClass(): KClass<Object>;
}