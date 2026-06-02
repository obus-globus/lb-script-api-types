import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { MarketplaceItemRevision } from '../../../../../../net/ccbluex/liquidbounce/api/models/marketplace/MarketplaceItemRevision.d.ts'
export class MarketplaceRevisionDependency extends Object {
    constructor(id: number, revisionId: number, dependencyRevisionId: number, createdAt: string, dependencyRevision: MarketplaceItemRevision | null)
    readonly createdAt: string;
    readonly dependencyRevision: MarketplaceItemRevision | null;
    readonly dependencyRevisionId: number;
    readonly id: number;
    readonly revisionId: number;
    component1(): number;
    component2(): number;
    component3(): number;
    component4(): string;
    component5(): MarketplaceItemRevision | null;
    copy(id: number, revisionId: number, dependencyRevisionId: number, createdAt: string, dependencyRevision: MarketplaceItemRevision | null): MarketplaceRevisionDependency;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}