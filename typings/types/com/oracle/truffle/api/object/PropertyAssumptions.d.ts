import type { Assumption } from '../../../../../com/oracle/truffle/api/Assumption.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { EconomicMap } from '../../../../../org/graalvm/collections/EconomicMap.d.ts'
export class PropertyAssumptions extends Object {
    constructor()
    // private stablePropertyAssumptions: EconomicMap<Object, Assumption>;
    getPropertyAssumption(propertyName: Object): Assumption;
    invalidateAllPropertyAssumptions(): void;
    invalidatePropertyAssumption(propertyName: Object, onlyExisting: boolean): void;
}