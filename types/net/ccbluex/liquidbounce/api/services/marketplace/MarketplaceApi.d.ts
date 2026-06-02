import type { File } from '../../../../../../java/io/File.d.ts'
import type { BaseApi } from '../../../../../../net/ccbluex/liquidbounce/api/core/BaseApi.d.ts'
import type { OAuthSession } from '../../../../../../net/ccbluex/liquidbounce/api/models/auth/OAuthSession.d.ts'
import type { MarketplaceItem } from '../../../../../../net/ccbluex/liquidbounce/api/models/marketplace/MarketplaceItem.d.ts'
import type { MarketplaceItemRevision } from '../../../../../../net/ccbluex/liquidbounce/api/models/marketplace/MarketplaceItemRevision.d.ts'
import type { MarketplaceItemType } from '../../../../../../net/ccbluex/liquidbounce/api/models/marketplace/MarketplaceItemType.d.ts'
import type { MarketplaceReview } from '../../../../../../net/ccbluex/liquidbounce/api/models/marketplace/MarketplaceReview.d.ts'
import type { MarketplaceRevisionDependency } from '../../../../../../net/ccbluex/liquidbounce/api/models/marketplace/MarketplaceRevisionDependency.d.ts'
import type { PaginatedResponse } from '../../../../../../net/ccbluex/liquidbounce/api/models/pagination/PaginatedResponse.d.ts'
export class MarketplaceApi extends BaseApi {
    static INSTANCE: MarketplaceApi;
    addRevisionDependency(session: OAuthSession, id: number, revisionId: number, dependencyRevisionId: number): void;
    createMarketplaceItem(session: OAuthSession, name: string, type: MarketplaceItemType, description: string): MarketplaceItem;
    createMarketplaceItemRevision(session: OAuthSession, id: number, file: File, version: string, changelog: string | null, dependencies: string | null): void;
    createReview(session: OAuthSession, id: number, rating: number, review: string | null): MarketplaceReview;
    deleteMarketplaceItem(session: OAuthSession, id: number): void;
    deleteMarketplaceItemRevision(session: OAuthSession, id: number, revisionId: number): void;
    deleteReview(session: OAuthSession, id: number, reviewId: number): void;
    deleteThumbnail(session: OAuthSession, id: number): void;
    downloadRevision(id: number, revisionId: number): string;
    getMarketplaceItem(id: number): MarketplaceItem;
    getMarketplaceItemRevision(id: number, revisionId: number): MarketplaceItemRevision;
    getMarketplaceItemRevisions(id: number, page: number, limit: number): PaginatedResponse<MarketplaceItemRevision>;
    getMarketplaceItems(page: number, limit: number, query: string | null, type: MarketplaceItemType | null, featured: boolean, uid: string | null, branch: string | null): PaginatedResponse<MarketplaceItem>;
    getReviews(id: number, page: number, limit: number): PaginatedResponse<MarketplaceReview>;
    getRevisionDependencies(id: number, revisionId: number): MarketplaceRevisionDependency[];
    removeRevisionDependency(session: OAuthSession, id: number, revisionId: number, dependencyRevisionId: number): void;
    updateMarketplaceItem(session: OAuthSession, id: number, name: string, type: MarketplaceItemType, description: string): MarketplaceItem;
    uploadThumbnail(session: OAuthSession, id: number, thumbnailFile: File): void;
}