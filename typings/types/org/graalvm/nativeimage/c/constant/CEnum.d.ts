import type { Annotation } from '../../../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface CEnum extends Annotation, Object{
    constructor(addEnumKeyword: boolean, value: string)
    /*not mapped: */ addEnumKeyword(): boolean;
    /*not mapped: */ value(): string;
}