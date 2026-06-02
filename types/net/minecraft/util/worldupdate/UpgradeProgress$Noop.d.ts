import type { ResourceKey } from '../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { DataFixTypes } from '../../../../net/minecraft/util/datafix/DataFixTypes.d.ts'
import type { UpgradeProgress } from '../../../../net/minecraft/util/worldupdate/UpgradeProgress.d.ts'
import type { UpgradeProgress$Status } from '../../../../net/minecraft/util/worldupdate/UpgradeProgress$Status.d.ts'
import type { Level } from '../../../../net/minecraft/world/level/Level.d.ts'
export class UpgradeProgress$Noop extends UpgradeProgress {
    constructor()
    addTotalChunks(additionalTotalChunks: number): void;
    addTotalFileFixOperations(additionalFileFixOperations: number): void;
    incrementConverted(): void;
    incrementFinishedOperations(): void;
    incrementFinishedOperationsBy(count: number): void;
    incrementRunningFileFixer(): void;
    incrementSkipped(): void;
    reset(dataFixType: DataFixTypes): void;
    setApplicableFixerAmount(amount: number): void;
    setCanceled(): void;
    setDimensionProgress(dimensionKey: ResourceKey<Level>, currentProgress: number): void;
    setFinished(finished: boolean): void;
    setStatus(status: UpgradeProgress$Status): void;
    setTotalProgress(totalProgress: number): void;
}