import type { FieldPosition } from '../../../../java/text/FieldPosition.d.ts'
import type { Format$Field } from '../../../../java/text/Format$Field.d.ts'
export class UFieldPosition extends FieldPosition {
    constructor()
    constructor(arg0: Format$Field)
    constructor(arg0: Format$Field, arg1: number)
    constructor(arg0: number)
    readonly countVisibleFractionDigits: number;
    readonly fractionDigits: number;
    getCountVisibleFractionDigits(): number;
    getFractionDigits(): number;
    setFractionDigits(arg0: number, arg1: number): void;
}