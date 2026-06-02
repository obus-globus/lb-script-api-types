import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { MarketplaceItemStatus } from '../../../../../../net/ccbluex/liquidbounce/api/models/marketplace/MarketplaceItemStatus.d.ts'
import type { MarketplaceItemType } from '../../../../../../net/ccbluex/liquidbounce/api/models/marketplace/MarketplaceItemType.d.ts'
export class MarketplaceItem extends Object {
    constructor(id: number, uid: string, type: MarketplaceItemType, name: string, branch: string, description: string, thumbnailPid: string | null, featured: boolean, createdAt: string, status: MarketplaceItemStatus)
    readonly branch: string;
    readonly createdAt: string;
    readonly description: string;
    readonly featured: boolean;
    readonly id: number;
    readonly name: string;
    readonly status: MarketplaceItemStatus;
    readonly thumbnailPid: string | null;
    readonly type: MarketplaceItemType;
    readonly uid: string;
    component1(): number;
    component10(): MarketplaceItemStatus;
    component2(): string;
    component3(): MarketplaceItemType;
    component4(): string;
    component5(): string;
    component6(): string;
    component7(): string | null;
    component8(): boolean;
    component9(): string;
    copy(id: number, uid: string, type: MarketplaceItemType, name: string, branch: string, description: string, thumbnailPid: string | null, featured: boolean, createdAt: string, status: MarketplaceItemStatus): MarketplaceItem;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}