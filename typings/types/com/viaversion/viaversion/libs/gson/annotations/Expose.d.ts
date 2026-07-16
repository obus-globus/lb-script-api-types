import type { Annotation } from '../../../../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface Expose extends Annotation, Object{
    /*not mapped: */ deserialize(): boolean;
    /*not mapped: */ serialize(): boolean;
}