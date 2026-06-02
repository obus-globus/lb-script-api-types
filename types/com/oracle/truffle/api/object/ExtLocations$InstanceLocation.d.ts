import type { Assumption } from '../../../../../com/oracle/truffle/api/Assumption.d.ts'
import type { ExtLocation } from '../../../../../com/oracle/truffle/api/object/ExtLocation.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class ExtLocations$InstanceLocation extends ExtLocation {
    constructor(index: number, finalAssumption: Assumption)
    finalAssumption: Assumption;
    // private index: number;
    equals(obj: Object | null): boolean;
    getFinalAssumption(): Assumption;
    getFinalAssumptionField(): Assumption;
    getIndex(): number;
    getOrdinal(): number;
    getWhereString(): string;
    hashCode(): number;
    // private initializeFinalAssumption(): Assumption;
    // private invalidateFinalAssumption(lastAssumption: Assumption): void;
    isAssumedFinal(): boolean;
    maybeInvalidateFinalAssumption(): void;
    toString(): string;
}