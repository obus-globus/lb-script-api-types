import type { Object } from '../../../java/lang/Object.d.ts'
import type { CrashReportCategory } from '../../../net/minecraft/CrashReportCategory.d.ts'
import type { ResourceLoadStateTracker$RecoveryInfo } from '../../../net/minecraft/client/ResourceLoadStateTracker$RecoveryInfo.d.ts'
import type { ResourceLoadStateTracker$ReloadReason } from '../../../net/minecraft/client/ResourceLoadStateTracker$ReloadReason.d.ts'
export class ResourceLoadStateTracker$ReloadState extends Object {
    private constructor(reloadReason: ResourceLoadStateTracker$ReloadReason, packs: string[])
    // private finished: boolean;
    // private packs: string[];
    // private recoveryReloadInfo: ResourceLoadStateTracker$RecoveryInfo;
    // private reloadReason: ResourceLoadStateTracker$ReloadReason;
    fillCrashInfo(category: CrashReportCategory): void;
}