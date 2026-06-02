import type { Annotation } from '../../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface InternalResource$Id extends Annotation, Object{
    constructor(componentId: string, optional: boolean, value: string)
    /*not mapped: */ componentId(): string;
    /*not mapped: */ optional(): boolean;
    /*not mapped: */ value(): string;
}