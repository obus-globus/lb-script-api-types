import type { FieldPosition } from '../../../../../../../java/text/FieldPosition.d.ts'
import type { Format$Field } from '../../../../../../../java/text/Format$Field.d.ts'
export class UFieldPosition extends FieldPosition {
    constructor()
    constructor(attribute: Format$Field)
    constructor(attribute: Format$Field, fieldID: number)
    constructor(field: number)
    readonly countVisibleFractionDigits: number;
    readonly fractionDigits: number;
    getCountVisibleFractionDigits(): number;
    getFractionDigits(): number;
    setFractionDigits(countVisibleFractionDigits: number, fractionDigits: number): void;
}