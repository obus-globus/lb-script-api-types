import type { Annotation } from '../../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { KClass } from '../../../../kotlin/reflect/KClass.d.ts'
export interface RestrictedApi extends Annotation, Object{
    /*not mapped: */ allowedOnPath(): string;
    /*not mapped: */ allowlistAnnotations(): KClass<Annotation>[];
    /*not mapped: */ allowlistWithWarningAnnotations(): KClass<Annotation>[];
    /*not mapped: */ explanation(): string;
    /*not mapped: */ link(): string;
}