import type { CrashReport } from '../../../net/minecraft/CrashReport.d.ts'
import type { ReportedException } from '../../../net/minecraft/ReportedException.d.ts'
export class ReportedNbtException extends ReportedException {
    constructor(report: CrashReport)
}