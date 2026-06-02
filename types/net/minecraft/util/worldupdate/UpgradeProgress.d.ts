import type { AtomicInteger } from '../../../../java/util/concurrent/atomic/AtomicInteger.d.ts'
import type { AtomicLong } from '../../../../java/util/concurrent/atomic/AtomicLong.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ResourceKey } from '../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { DataFixTypes } from '../../../../net/minecraft/util/datafix/DataFixTypes.d.ts'
import type { UpgradeProgress$FileFixStats } from '../../../../net/minecraft/util/worldupdate/UpgradeProgress$FileFixStats.d.ts'
import type { UpgradeProgress$Status } from '../../../../net/minecraft/util/worldupdate/UpgradeProgress$Status.d.ts'
import type { UpgradeProgress$Type } from '../../../../net/minecraft/util/worldupdate/UpgradeProgress$Type.d.ts'
import type { Level } from '../../../../net/minecraft/world/level/Level.d.ts'
export class UpgradeProgress extends Object {
    constructor()
    readonly canceled: boolean;
    readonly converted: AtomicInteger;
    readonly dataFixType: DataFixTypes;
    readonly finished: boolean;
    // private lastLoggedProgressTime: AtomicLong;
    // private progressMap: Reference2FloatMap<ResourceKey<Level>>;
    readonly runningFileFixerStats: UpgradeProgress$FileFixStats;
    readonly skipped: AtomicInteger;
    readonly status: UpgradeProgress$Status;
    readonly totalChunks: AtomicInteger;
    readonly totalFileFixStats: UpgradeProgress$FileFixStats;
    readonly totalProgress: number;
    readonly type: UpgradeProgress$Type;
    readonly typeFileFixStats: UpgradeProgress$FileFixStats;
    addTotalChunks(additionalTotalChunks: number): void;
    addTotalFileFixOperations(additionalFileFixOperations: number): void;
    getConverted(): number;
    getDataFixType(): DataFixTypes;
    getDimensionProgress(dimensionKey: ResourceKey<Level>): number;
    getRunningFileFixerStats(): UpgradeProgress$FileFixStats;
    getSkipped(): number;
    getStatus(): UpgradeProgress$Status;
    getTotalChunks(): number;
    getTotalFileFixStats(): UpgradeProgress$FileFixStats;
    getTotalProgress(): number;
    getType(): UpgradeProgress$Type;
    getTypeFileFixStats(): UpgradeProgress$FileFixStats;
    incrementConverted(): void;
    incrementFinishedOperations(): void;
    incrementFinishedOperationsBy(count: number): void;
    incrementRunningFileFixer(): void;
    incrementSkipped(): void;
    isCanceled(): boolean;
    isFinished(): boolean;
    logProgress(): void;
    reset(dataFixType: DataFixTypes): void;
    setApplicableFixerAmount(amount: number): void;
    setCanceled(): void;
    setDimensionProgress(dimensionKey: ResourceKey<Level>, currentProgress: number): void;
    setFinished(finished: boolean): void;
    setStatus(status: UpgradeProgress$Status): void;
    setTotalProgress(totalProgress: number): void;
    setType(type: UpgradeProgress$Type): void;
}