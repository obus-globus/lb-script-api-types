import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { MarketplaceItemStatus } from '../../../../../../net/ccbluex/liquidbounce/api/models/marketplace/MarketplaceItemStatus.d.ts'
export class MarketplaceItemRevision extends Object {
    constructor(id: number, itemId: number, version: string, filePid: string, changelog: string | null, createdAt: string, status: MarketplaceItemStatus)
    readonly changelog: string | null;
    readonly createdAt: string;
    readonly filePid: string;
    readonly id: number;
    readonly itemId: number;
    readonly status: MarketplaceItemStatus;
    readonly version: string;
    component1(): number;
    component2(): number;
    component3(): string;
    component4(): string;
    component5(): string | null;
    component6(): string;
    component7(): MarketplaceItemStatus;
    copy(id: number, itemId: number, version: string, filePid: string, changelog: string | null, createdAt: string, status: MarketplaceItemStatus): MarketplaceItemRevision;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}