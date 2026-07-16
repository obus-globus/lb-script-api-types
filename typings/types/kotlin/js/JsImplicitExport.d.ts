import type { Annotation } from '../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export interface JsImplicitExport extends Annotation, Object{
    /*not mapped: */ couldBeConvertedToExplicitExport(): boolean;
}