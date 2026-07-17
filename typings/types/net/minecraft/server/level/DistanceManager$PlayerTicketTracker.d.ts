import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { DistanceManager } from '../../../../net/minecraft/server/level/DistanceManager.d.ts'
import type { DistanceManager$FixedPlayerDistanceChunkTracker } from '../../../../net/minecraft/server/level/DistanceManager$FixedPlayerDistanceChunkTracker.d.ts'
export class DistanceManager$PlayerTicketTracker extends DistanceManager$FixedPlayerDistanceChunkTracker {
    static SOURCE: number;
    constructor(null_: DistanceManager, maxDistance: number)
    // private queueLevels: JavaMap<any, any>;
    // private toUpdate: (Object | null)[];
    // private viewDistance: number;
    // private haveTicketFor(level: number): boolean;
    // private onLevelChange(key: number, level: number, saw: boolean, sees: boolean): void;
    onLevelChange(node: number, oldLevel: number, level: number): void;
    runAllUpdates(): void;
    updateViewDistance(viewDistance: number): void;
}