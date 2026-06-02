import type { Annotation } from '../../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface Intrinsic extends Annotation, Object{
    constructor(displace: boolean)
    /*not mapped: */ displace(): boolean;
}