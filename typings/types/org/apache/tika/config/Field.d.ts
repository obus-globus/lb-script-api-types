import type { Annotation } from '../../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface Field extends Annotation, Object{
    /*not mapped: */ name(): string;
    /*not mapped: */ required(): boolean;
}