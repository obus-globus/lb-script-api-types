import type { RuntimeException } from '../../java/lang/RuntimeException.d.ts'
import type { Throwable } from '../../java/lang/Throwable.d.ts'
import type { CrashReport } from '../../net/minecraft/CrashReport.d.ts'
export class ReportedException extends RuntimeException {
    constructor(report: CrashReport)
    readonly cause: Throwable | null;
    readonly message: string | null;
    readonly report: CrashReport;
    getReport(): CrashReport;
}