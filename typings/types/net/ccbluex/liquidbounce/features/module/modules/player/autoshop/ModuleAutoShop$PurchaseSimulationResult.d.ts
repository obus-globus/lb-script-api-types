import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
export class ModuleAutoShop$PurchaseSimulationResult extends Object {
    constructor(slots: (Object | null)[], expectedItems: { [key: string]: any })
    readonly expectedItems: { [key: string]: any };
    readonly slots: (Object | null)[];
    component1(): (Object | null)[];
    component2(): { [key: string]: any };
    copy(slots: (Object | null)[], expectedItems: { [key: string]: any }): ModuleAutoShop$PurchaseSimulationResult;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}