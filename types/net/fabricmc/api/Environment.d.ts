import type { Annotation } from '../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { EnvType } from '../../../net/fabricmc/api/EnvType.d.ts'
export interface Environment extends Annotation, Object{
    constructor(value: EnvType)
    /*not mapped: */ value(): EnvType;
}