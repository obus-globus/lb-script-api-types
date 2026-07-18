import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { CalType } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/CalType.d.ts'
export class EraRules extends Object {
    static MIN_ENCODED_START: number;
    static getInstance(paramcalType: CalType, paramincludeTentativeEra: boolean): EraRules;
    private constructor(startDates: number[], numEras: number)
    // private currentEra: number;
    // private numEras: number;
    // private startDates: number[];
    getCurrentEraIndex(): number;
    getEraIndex(year: number, month: number, day: number): number;
    getNumberOfEras(): number;
    getStartDate(eraIdx: number, fillIn: number[]): number[];
    getStartYear(eraIdx: number): number;
    // private initCurrentEra(): void;
}