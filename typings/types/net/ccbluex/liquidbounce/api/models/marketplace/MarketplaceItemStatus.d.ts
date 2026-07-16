import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class MarketplaceItemStatus extends Enum<MarketplaceItemStatus> {
    static ACTIVE: MarketplaceItemStatus;
    static DELETED: MarketplaceItemStatus;
    static INACTIVE: MarketplaceItemStatus;
    static PENDING: MarketplaceItemStatus;
    static REJECTED: MarketplaceItemStatus;
    static getEntries(): MarketplaceItemStatus[];
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): MarketplaceItemStatus;
    static values(): MarketplaceItemStatus[];
    private constructor()
    name(): "ACTIVE" | "INACTIVE" | "PENDING" | "REJECTED" | "DELETED";
}