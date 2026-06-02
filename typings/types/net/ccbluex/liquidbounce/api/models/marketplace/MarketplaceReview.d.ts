import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class MarketplaceReview extends Object {
    constructor(id: number, itemId: number, uid: string, rating: number, review: string | null, createdAt: string)
    readonly createdAt: string;
    readonly id: number;
    readonly itemId: number;
    readonly rating: number;
    readonly review: string | null;
    readonly uid: string;
    component1(): number;
    component2(): number;
    component3(): string;
    component4(): number;
    component5(): string | null;
    component6(): string;
    copy(id: number, itemId: number, uid: string, rating: number, review: string | null, createdAt: string): MarketplaceReview;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}