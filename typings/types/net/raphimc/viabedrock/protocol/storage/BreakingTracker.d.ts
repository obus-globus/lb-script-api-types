import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { StoredObject } from '../../../../../com/viaversion/viaversion/api/connection/StoredObject.d.ts'
import type { UserConnection } from '../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { AtomicInteger } from '../../../../../java/util/concurrent/atomic/AtomicInteger.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
import type { Position3f } from '../../../../../net/raphimc/viabedrock/protocol/model/Position3f.d.ts'
import type { BreakingTracker$BlockCrackingInfo } from '../../../../../net/raphimc/viabedrock/protocol/storage/BreakingTracker$BlockCrackingInfo.d.ts'
export class BreakingTracker extends StoredObject {
    constructor(arg0: UserConnection)
    // private ID_COUNTER: AtomicInteger;
    // private blockCrackingInfos: JavaMap<Position3f, BreakingTracker$BlockCrackingInfo>;
    // private crackingInfoFromPosition(arg0: Position3f): Map$Entry<Position3f, BreakingTracker$BlockCrackingInfo>;
    stopCracking(arg0: Position3f): void;
    tick(): void;
    updateCrackingInfo(arg0: Position3f, arg1: number, arg2: boolean): void;
}