import type { Assumption } from '../../../../../com/oracle/truffle/api/Assumption.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { EconomicMap } from '../../../../../org/graalvm/collections/EconomicMap.d.ts'
export class ShapeImpl$PropertyAssumptions extends Object {
    constructor(singleContextAssumption: Assumption)
    // private singleContextAssumption: Assumption;
    // private stablePropertyAssumptions: EconomicMap<Object, Assumption>;
    getPropertyAssumption(propertyName: Object): Assumption;
    getSingleContextAssumption(): Assumption;
    invalidateAllPropertyAssumptions(): void;
    invalidatePropertyAssumption(propertyName: Object, onlyExisting: boolean): void;
}