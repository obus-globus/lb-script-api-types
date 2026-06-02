import type { Annotation } from '../../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface GwtCompatible extends Annotation, Object{
    constructor(emulated: boolean, serializable: boolean)
    /*not mapped: */ emulated(): boolean;
    /*not mapped: */ serializable(): boolean;
}