import type { Object } from '../../../../java/lang/Object.d.ts'
export class BitField extends Object {
    constructor(arg0: number)
    // private mask: number;
    // private shiftCount: number;
    clear(arg0: number): number;
    clearByte(arg0: number): number;
    clearShort(arg0: number): number;
    getRawValue(arg0: number): number;
    getShortRawValue(arg0: number): number;
    getShortValue(arg0: number): number;
    getValue(arg0: number): number;
    isAllSet(arg0: number): boolean;
    isSet(arg0: number): boolean;
    set(arg0: number): number;
    setBoolean(arg0: number, arg1: boolean): number;
    setByte(arg0: number): number;
    setByteBoolean(arg0: number, arg1: boolean): number;
    setShort(arg0: number): number;
    setShortBoolean(arg0: number, arg1: boolean): number;
    setShortValue(arg0: number, arg1: number): number;
    setValue(arg0: number, arg1: number): number;
}