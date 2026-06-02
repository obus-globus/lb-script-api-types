import type { Annotation } from '../../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface Expose extends Annotation, Object{
    constructor(deserialize: boolean, serialize: boolean)
    /*not mapped: */ deserialize(): boolean;
    /*not mapped: */ serialize(): boolean;
}