import type { Annotation } from '../../../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface OperationProxy$Proxyable extends Annotation, Object{
    constructor(allowUncached: boolean)
    /*not mapped: */ allowUncached(): boolean;
}