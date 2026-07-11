import type { ExportMessage } from '../../../../../com/oracle/truffle/api/library/ExportMessage.d.ts'
import type { Annotation } from '../../../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface ExportMessage$Repeat extends Annotation, Object{
    constructor(...value: ExportMessage[])
    /*not mapped: */ value(): ExportMessage[];
}