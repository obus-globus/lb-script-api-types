import type { Annotation } from '../../../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface CEnum extends Annotation, Object{
    /*not mapped: */ addEnumKeyword(): boolean;
    /*not mapped: */ value(): string;
}