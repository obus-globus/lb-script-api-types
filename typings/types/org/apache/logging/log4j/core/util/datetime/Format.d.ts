import type { StringBuilder } from '../../../../../../../java/lang/StringBuilder.d.ts'
import type { FieldPosition } from '../../../../../../../java/text/FieldPosition.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export abstract class Format extends Object {
    constructor()
    format(obj: Object): string;
    format(obj: Object, toAppendTo: StringBuilder, pos: FieldPosition): StringBuilder;
}