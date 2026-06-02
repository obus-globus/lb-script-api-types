import type { Annotation } from '../../../../../../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
export interface ComEventCallback extends Annotation, Object{
    constructor(dispid: number, name: string)
    /*not mapped: */ dispid(): number;
    /*not mapped: */ name(): string;
}