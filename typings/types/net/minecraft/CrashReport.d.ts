import type { StackTraceElement } from '../../java/lang/StackTraceElement.d.ts'
import type { StringBuilder } from '../../java/lang/StringBuilder.d.ts'
import type { Path } from '../../java/nio/file/Path.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Throwable } from '../../java/lang/Throwable.d.ts'
import type { CrashReportCategory } from '../../net/minecraft/CrashReportCategory.d.ts'
import type { ReportType } from '../../net/minecraft/ReportType.d.ts'
import type { SystemReport } from '../../net/minecraft/SystemReport.d.ts'
export class CrashReport extends Object {
    static forThrowable(paramt: Throwable, paramtitle: string): CrashReport;
    static preload(): void;
    constructor(title: string, t: Throwable)
    readonly details: CrashReportCategory[];
    readonly exception: Throwable;
    readonly saveFile: Path;
    readonly systemReport: SystemReport;
    readonly title: string;
    // private trackingStackTrace: boolean;
    // private uncategorizedStackTrace: StackTraceElement[];
    addCategory(name: string): CrashReportCategory;
    addCategory(name: string, nestedOffset: number): CrashReportCategory;
    getDetails(): string;
    getDetails(builder: StringBuilder): void;
    getException(): Throwable;
    getExceptionMessage(): string;
    getFriendlyReport(reportType: ReportType): string;
    getFriendlyReport(reportType: ReportType, extraComments: string[]): string;
    getSaveFile(): Path;
    getSystemReport(): SystemReport;
    getTitle(): string;
    saveToFile(file: Path, reportType: ReportType): boolean;
    saveToFile(saveFile: Path, reportType: ReportType, extraComments: string[]): boolean;
}