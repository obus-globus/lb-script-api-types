import type { Annotation } from '../../../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface CEnumConstant extends Annotation, Object{
    constructor(includeInLookup: boolean, value: string)
    /*not mapped: */ includeInLookup(): boolean;
    /*not mapped: */ value(): string;
}