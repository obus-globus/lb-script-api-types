import type { Annotation } from '../../../../../../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
export interface ComObject extends Annotation, Object{
    constructor(clsId: string, progId: string)
    /*not mapped: */ clsId(): string;
    /*not mapped: */ progId(): string;
}