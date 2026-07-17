import type { MemoryPoolMXBean } from '../../../../java/lang/management/MemoryPoolMXBean.d.ts'
import type { Phaser } from '../../../../java/util/concurrent/Phaser.d.ts'
import type { AtomicLong } from '../../../../java/util/concurrent/atomic/AtomicLong.d.ts'
import type { Notification } from '../../../../javax/management/Notification.d.ts'
import type { NotificationListener } from '../../../../javax/management/NotificationListener.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class SandboxLowMemoryListener extends Object implements NotificationListener {
    constructor()
    // private installed: boolean;
    // private lowMemoryTriggerNumber: AtomicLong;
    // private phaseInstrumentId: AtomicLong;
    // private phaser: Phaser;
    // private retainedBytesCheckFactor: number;
    // private reusedCollectionUsageThresholdPools: MemoryPoolMXBean[];
    // private reusedUsageThresholdPools: MemoryPoolMXBean[];
    // private smallestToLimit: AtomicLong;
    // private stopTheWorld: boolean;
    clearSmallestToLimit(): void;
    getPhaseInstrumentId(): number;
    handleNotification(notification: Notification, handback: Object): void;
    updateSmallestToLimit(instrumentId: number, bytesToLimit: number): void;
}