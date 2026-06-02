import type { Object } from '../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../java/lang/Throwable.d.ts'
import type { CrashReport } from '../../../net/minecraft/CrashReport.d.ts'
import type { ResourceLoadStateTracker$ReloadReason } from '../../../net/minecraft/client/ResourceLoadStateTracker$ReloadReason.d.ts'
import type { ResourceLoadStateTracker$ReloadState } from '../../../net/minecraft/client/ResourceLoadStateTracker$ReloadState.d.ts'
import type { PackResources } from '../../../net/minecraft/server/packs/PackResources.d.ts'
export class ResourceLoadStateTracker extends Object {
    constructor()
    // private reloadCount: number;
    // private reloadState: ResourceLoadStateTracker$ReloadState;
    fillCrashReport(report: CrashReport): void;
    finishReload(): void;
    startRecovery(reason: Throwable): void;
    startReload(reloadReason: ResourceLoadStateTracker$ReloadReason, packs: PackResources[]): void;
}