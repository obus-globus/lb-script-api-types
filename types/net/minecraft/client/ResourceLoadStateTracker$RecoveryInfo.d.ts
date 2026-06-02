import type { Object } from '../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../java/lang/Throwable.d.ts'
import type { CrashReportCategory } from '../../../net/minecraft/CrashReportCategory.d.ts'
export class ResourceLoadStateTracker$RecoveryInfo extends Object {
    private constructor(error: Throwable)
    // private error: Throwable;
    fillCrashInfo(category: CrashReportCategory): void;
}