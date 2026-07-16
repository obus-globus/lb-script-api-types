import type { Annotation } from '../../../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface Substitute extends Annotation, Object{
    /*not mapped: */ polymorphicSignature(): boolean;
}