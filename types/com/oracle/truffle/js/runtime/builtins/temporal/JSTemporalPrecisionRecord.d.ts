import type { TemporalUtil$Unit } from '../../../../../../../com/oracle/truffle/js/runtime/util/TemporalUtil$Unit.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class JSTemporalPrecisionRecord extends Object {
    static create(paramprecision: Object, paramunit: TemporalUtil$Unit, paramincrement: number): JSTemporalPrecisionRecord;
    static isValidPrecision(paramprecision: Object): boolean;
    private constructor(precision: Object, unit: TemporalUtil$Unit, increment: number)
    readonly increment: number;
    readonly precision: Object;
    readonly unit: TemporalUtil$Unit;
    getIncrement(): number;
    getPrecision(): Object;
    getUnit(): TemporalUtil$Unit;
}