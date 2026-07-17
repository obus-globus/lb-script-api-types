import type { File } from '../../../../../../java/io/File.d.ts'
import type { Continuation } from '../../../../../../kotlin/coroutines/Continuation.d.ts'
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
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    addRevisionDependency(session: OAuthSession, id: number, revisionId: number, dependencyRevisionId: number, $completion: Continuation<void>): any;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    createMarketplaceItem(session: OAuthSession, name: string, type: MarketplaceItemType, description: string, $completion: Continuation<MarketplaceItem>): any;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    createMarketplaceItemRevision(session: OAuthSession, id: number, file: File, version: string, changelog: string | null, dependencies: string | null, $completion: Continuation<void>): any;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    createReview(session: OAuthSession, id: number, rating: number, review: string | null, $completion: Continuation<MarketplaceReview>): any;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    deleteMarketplaceItem(session: OAuthSession, id: number, $completion: Continuation<void>): any;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    deleteMarketplaceItemRevision(session: OAuthSession, id: number, revisionId: number, $completion: Continuation<void>): any;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    deleteReview(session: OAuthSession, id: number, reviewId: number, $completion: Continuation<void>): any;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    deleteThumbnail(session: OAuthSession, id: number, $completion: Continuation<void>): any;
    downloadRevision(id: number, revisionId: number): string;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    getMarketplaceItem(id: number, $completion: Continuation<MarketplaceItem>): any;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    getMarketplaceItemRevision(id: number, revisionId: number, $completion: Continuation<MarketplaceItemRevision>): any;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    getMarketplaceItemRevisions(id: number, page: number, limit: number, $completion: Continuation<PaginatedResponse<MarketplaceItemRevision>>): any;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    getMarketplaceItems(page: number, limit: number, query: string | null, type: MarketplaceItemType | null, featured: boolean, uid: string | null, branch: string | null, $completion: Continuation<PaginatedResponse<MarketplaceItem>>): any;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    getReviews(id: number, page: number, limit: number, $completion: Continuation<PaginatedResponse<MarketplaceReview>>): any;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    getRevisionDependencies(id: number, revisionId: number, $completion: Continuation<MarketplaceRevisionDependency[]>): any;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    removeRevisionDependency(session: OAuthSession, id: number, revisionId: number, dependencyRevisionId: number, $completion: Continuation<void>): any;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    updateMarketplaceItem(session: OAuthSession, id: number, name: string, type: MarketplaceItemType, description: string, $completion: Continuation<MarketplaceItem>): any;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    uploadThumbnail(session: OAuthSession, id: number, thumbnailFile: File, $completion: Continuation<void>): any;
}