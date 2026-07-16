import type { Annotation } from '../../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface Expression extends Annotation, Object{
    /*not mapped: */ id(): string;
    /*not mapped: */ value(): string[];
}