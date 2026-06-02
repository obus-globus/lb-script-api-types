import type { Annotation } from '../../../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface GenerateCached extends Annotation, Object{
    constructor(alwaysInlineCached: boolean, inherit: boolean, value: boolean)
    /*not mapped: */ alwaysInlineCached(): boolean;
    /*not mapped: */ inherit(): boolean;
    /*not mapped: */ value(): boolean;
}