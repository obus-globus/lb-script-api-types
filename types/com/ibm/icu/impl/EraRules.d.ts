import type { CalType } from '../../../../com/ibm/icu/impl/CalType.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class EraRules extends Object {
    static MIN_ENCODED_START: number;
    static getInstance(paramarg0: CalType, paramarg1: boolean): EraRules;
    private constructor(arg0: number[], arg1: number)
    // private currentEra: number;
    // private numEras: number;
    // private startDates: number[];
    getCurrentEraIndex(): number;
    getEraIndex(arg0: number, arg1: number, arg2: number): number;
    getNumberOfEras(): number;
    getStartDate(arg0: number, arg1: number[]): number[];
    getStartYear(arg0: number): number;
    // private initCurrentEra(): void;
}