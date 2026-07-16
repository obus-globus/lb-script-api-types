import type { Annotation } from '../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { EncodeDefault$Mode } from '../../kotlinx/serialization/EncodeDefault$Mode.d.ts'
export interface EncodeDefault extends Annotation, Object{
    /*not mapped: */ mode(): EncodeDefault$Mode;
}