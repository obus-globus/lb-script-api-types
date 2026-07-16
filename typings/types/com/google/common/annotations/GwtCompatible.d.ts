import type { Annotation } from '../../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface GwtCompatible extends Annotation, Object{
    /*not mapped: */ emulated(): boolean;
    /*not mapped: */ serializable(): boolean;
}