import type { Runnable } from '../../../../../../../java/lang/Runnable.d.ts'
import type { ThreadLocal } from '../../../../../../../java/lang/ThreadLocal.d.ts'
import type { AtomicBoolean } from '../../../../../../../java/util/concurrent/atomic/AtomicBoolean.d.ts'
import type { AtomicInteger } from '../../../../../../../java/util/concurrent/atomic/AtomicInteger.d.ts'
import type { Condition } from '../../../../../../../java/util/concurrent/locks/Condition.d.ts'
import type { Lock } from '../../../../../../../java/util/concurrent/locks/Lock.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { NetworkSynchronizer$RunnableBox } from '../../../../../../../net/fabricmc/fabric/impl/client/gametest/threading/NetworkSynchronizer$RunnableBox.d.ts'
import type { Unit } from '../../../../../../../net/minecraft/util/Unit.d.ts'
import type { BlockableEventLoop } from '../../../../../../../net/minecraft/util/thread/BlockableEventLoop.d.ts'
export class NetworkSynchronizer extends Object {
    static CLIENTBOUND: NetworkSynchronizer;
    static SERVERBOUND: NetworkSynchronizer;
    constructor()
    // private inFlightPackets: AtomicInteger;
    // private invalid: AtomicBoolean;
    // private isNettyThread: ThreadLocal<Unit>;
    // private isRunningNetworkTasks: boolean;
    // private mainThreadPacketHandlers: NetworkSynchronizer$RunnableBox[];
    // private morePacketsCondition: Condition;
    // private morePacketsLock: Lock;
    // private checkInvalid(): void;
    isRunningNetworkTasks(): boolean;
    // private markInvalid(): void;
    postNettyHandlePacket(): void;
    postTaskRun(arg0: () => void): void;
    preNettyHandlePacket(): void;
    preSendPacket(): void;
    preTaskAdded(arg0: () => void): void;
    reset(): void;
    // private signalMorePackets(): void;
    waitForPacketHandlers(arg0: BlockableEventLoop<Object>): void;
}