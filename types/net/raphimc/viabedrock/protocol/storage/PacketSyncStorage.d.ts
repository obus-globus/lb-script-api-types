import type { StoredObject } from '../../../../../com/viaversion/viaversion/api/connection/StoredObject.d.ts'
import type { UserConnection } from '../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { Runnable } from '../../../../../java/lang/Runnable.d.ts'
import type { AtomicInteger } from '../../../../../java/util/concurrent/atomic/AtomicInteger.d.ts'
export class PacketSyncStorage extends StoredObject {
    constructor(arg0: UserConnection)
    // private ID_COUNTER: AtomicInteger;
    // private pendingActions: Int2ObjectMap<() => void>;
    // private pendingNetworkStackLatencyResponses: Int2ObjectMap<number>;
    addNetworkStackLatencyResponse(arg0: number): number;
    getNetworkStackLatencyResponse(arg0: number): number;
    handleSyncTask(arg0: number): boolean;
    syncWithClient(arg0: () => void): void;
}