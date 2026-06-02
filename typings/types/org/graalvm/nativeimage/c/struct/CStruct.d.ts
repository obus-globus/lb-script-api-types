import type { Annotation } from '../../../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface CStruct extends Annotation, Object{
    constructor(addStructKeyword: boolean, isIncomplete: boolean, value: string)
    /*not mapped: */ addStructKeyword(): boolean;
    /*not mapped: */ isIncomplete(): boolean;
    /*not mapped: */ value(): string;
}