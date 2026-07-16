import type { Annotation } from '../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export interface HTTP extends Annotation, Object{
    /*not mapped: */ hasBody(): boolean;
    /*not mapped: */ method(): string;
    /*not mapped: */ path(): string;
}