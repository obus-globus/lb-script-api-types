import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { CalType } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/CalType.d.ts'
export class EraRules extends Object {
    static MIN_ENCODED_START: number;
    static getInstance(paramcalId: string, paramincludeTentativeEra: boolean): EraRules;
    static getInstance(paramcalType: CalType, paramincludeTentativeEra: boolean): EraRules;
    private constructor(startDates: number[], minEra: number, numEras: number)
    // private currentEra: number;
    // private minEra: number;
    // private numEras: number;
    // private startDates: number[];
    getCurrentEraCode(): number;
    getEraCode(year: number, month: number, day: number): number;
    getMaxEraCode(): number;
    getNumberOfEras(): number;
    getStartDate(eraCode: number, fillIn: number[]): number[];
    getStartYear(eraCode: number): number;
    // private initCurrentEra(): void;
}