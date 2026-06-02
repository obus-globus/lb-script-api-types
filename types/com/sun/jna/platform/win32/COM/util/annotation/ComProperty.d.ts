import type { Annotation } from '../../../../../../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
export interface ComProperty extends Annotation, Object{
    constructor(dispId: number, name: string)
    /*not mapped: */ dispId(): number;
    /*not mapped: */ name(): string;
}