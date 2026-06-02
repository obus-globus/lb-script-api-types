import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { MarketplaceItemType } from '../../../../../../net/ccbluex/liquidbounce/api/models/marketplace/MarketplaceItemType.d.ts'
export class MarketplaceApi$MarketplaceParams extends Object {
    constructor(page: number, limit: number, query: string | null, type: MarketplaceItemType | null, featured: boolean, uid: string | null, branch: string | null)
    readonly branch: string | null;
    readonly featured: boolean;
    readonly limit: number;
    readonly page: number;
    readonly query: string | null;
    readonly type: MarketplaceItemType | null;
    readonly uid: string | null;
    buildQueryString(): string;
    component1(): number;
    component2(): number;
    component3(): string | null;
    component4(): MarketplaceItemType | null;
    component5(): boolean;
    component6(): string | null;
    component7(): string | null;
    copy(page: number, limit: number, query: string | null, type: MarketplaceItemType | null, featured: boolean, uid: string | null, branch: string | null): MarketplaceApi$MarketplaceParams;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}