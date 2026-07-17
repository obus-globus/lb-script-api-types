import type { JavaMap } from '../../../../../../../../../JavaMap.d.ts'
import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { ShopConfig$Companion } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/player/autoshop/serializable/ShopConfig$Companion.d.ts'
import type { ShopElement } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/player/autoshop/serializable/ShopElement.d.ts'
export class ShopConfig extends Object {
    static Companion: ShopConfig$Companion;
    static Empty: ShopConfig;
    constructor(traderTitles: string[], initialCategorySlot: number, itemsWithTiers: JavaMap<string, string[]> | null, elements: ShopElement[])
    readonly elements: ShopElement[];
    readonly initialCategorySlot: number;
    readonly itemsWithTiers: JavaMap<string, string[]> | null;
    readonly traderTitles: string[];
    component1(): string[];
    component2(): number;
    component3(): JavaMap<string, string[]> | null;
    component4(): ShopElement[];
    copy(traderTitles: string[], initialCategorySlot: number, itemsWithTiers: JavaMap<string, string[]> | null, elements: ShopElement[]): ShopConfig;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}