import type { JavaMap } from '../../../../../../../../JavaMap.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
export class ModuleAutoShop$PurchaseSimulationResult extends Object {
    constructor(slots: (Object | null)[], expectedItems: JavaMap<any, any>)
    readonly expectedItems: JavaMap<any, any>;
    readonly slots: (Object | null)[];
    component1(): (Object | null)[];
    component2(): JavaMap<any, any>;
    copy(slots: (Object | null)[], expectedItems: JavaMap<any, any>): ModuleAutoShop$PurchaseSimulationResult;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}