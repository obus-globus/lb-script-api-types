import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { StoredObject } from '../../../../../com/viaversion/viaversion/api/connection/StoredObject.d.ts'
import type { UserConnection } from '../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { CompletableFuture } from '../../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { ExecutorService } from '../../../../../java/util/concurrent/ExecutorService.d.ts'
import type { AtomicInteger } from '../../../../../java/util/concurrent/atomic/AtomicInteger.d.ts'
import type { ResourcePack } from '../../../../../net/raphimc/viabedrock/api/resourcepack/ResourcePack.d.ts'
import type { ResourcePack$Key } from '../../../../../net/raphimc/viabedrock/api/resourcepack/ResourcePack$Key.d.ts'
import type { ResourcePackLoadStateTracker$Info } from '../../../../../net/raphimc/viabedrock/protocol/storage/ResourcePackLoadStateTracker$Info.d.ts'
export class ResourcePackLoadStateTracker extends StoredObject {
    constructor(arg0: UserConnection, arg1: ResourcePackLoadStateTracker$Info[])
    // private executor: ExecutorService;
    // private javaClientAccepted: boolean;
    // private loadFuture: CompletableFuture<void>;
    // private remainingResourcePackCount: AtomicInteger;
    // private requests: JavaMap<ResourcePack$Key, ResourcePackLoadStateTracker$Info>;
    // private resourcePacks: JavaMap<ResourcePack$Key, ResourcePack>;
    addLocalResourcePack(arg0: ResourcePack): void;
    addRemoteResourcePack(arg0: ResourcePack): void;
    getRequest(arg0: ResourcePack$Key): ResourcePackLoadStateTracker$Info;
    getResourcePack(arg0: ResourcePack$Key): ResourcePack;
    hasJavaClientAccepted(): boolean;
    loadRequestedResourcePacks(): CompletableFuture<void>;
    loadUnrequestedResourcePacks(arg0: ResourcePack$Key[]): void;
    onRemove(): void;
    setJavaClientAccepted(): void;
}