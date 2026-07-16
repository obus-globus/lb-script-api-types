import type { Annotation } from '../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export interface Field extends Annotation, Object{
    /*not mapped: */ encoded(): boolean;
    /*not mapped: */ value(): string;
}