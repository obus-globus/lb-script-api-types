import type { Annotation } from '../../../../../../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
export interface ComInterface extends Annotation, Object{
    constructor(iid: string)
    /*not mapped: */ iid(): string;
}