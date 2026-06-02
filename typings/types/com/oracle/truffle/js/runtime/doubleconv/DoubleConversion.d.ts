import type { DtoaBuffer } from '../../../../../../com/oracle/truffle/js/runtime/doubleconv/DtoaBuffer.d.ts'
import type { DtoaMode } from '../../../../../../com/oracle/truffle/js/runtime/doubleconv/DtoaMode.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class DoubleConversion extends Object {
    static bignumDtoa(paramv: number, parammode: DtoaMode, paramdigits: number, parambuffer: DtoaBuffer): void;
    static fastDtoaCounted(paramv: number, paramprecision: number, parambuffer: DtoaBuffer): boolean;
    static fastDtoaShortest(paramv: number, parambuffer: DtoaBuffer): boolean;
    static fixedDtoa(paramv: number, paramdigits: number, parambuffer: DtoaBuffer): boolean;
    static toExponential(paramvalue: number, paramrequestedDigits: number): string;
    static toExponential(paramvalue: number, paramrequestedDigits: number, paramuniqueZero: boolean): string;
    static toFixed(paramvalue: number, paramrequestedDigits: number): string;
    static toPrecision(paramvalue: number, paramprecision: number): string;
    static toShortest(paramvalue: number): string;
    private constructor()
}