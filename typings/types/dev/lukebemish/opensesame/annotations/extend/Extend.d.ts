import type { Annotation } from '../../../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { KClass } from '../../../../../kotlin/reflect/KClass.d.ts'
export interface Extend extends Annotation, Object{
    /*not mapped: */ targetClass(): KClass<Object>;
    /*not mapped: */ targetName(): string;
    /*not mapped: */ targetProvider(): KClass<Object>;
    /*not mapped: */ unsafe(): boolean;
}