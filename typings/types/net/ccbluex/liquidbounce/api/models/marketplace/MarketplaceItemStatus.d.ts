import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class MarketplaceItemStatus extends Enum<MarketplaceItemStatus> {
    static ACTIVE: MarketplaceItemStatus;
    static DELETED: MarketplaceItemStatus;
    static INACTIVE: MarketplaceItemStatus;
    static PENDING: MarketplaceItemStatus;
    static REJECTED: MarketplaceItemStatus;
    static getEntries(): MarketplaceItemStatus[];
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): MarketplaceItemStatus;
    static values(): MarketplaceItemStatus[];
    private constructor()
    name(): "ACTIVE" | "INACTIVE" | "PENDING" | "REJECTED" | "DELETED";
}