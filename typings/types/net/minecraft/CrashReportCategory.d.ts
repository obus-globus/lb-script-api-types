import type { StackTraceElement } from '../../java/lang/StackTraceElement.d.ts'
import type { StringBuilder } from '../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Throwable } from '../../java/lang/Throwable.d.ts'
import type { CrashReportCategory$Entry } from '../../net/minecraft/CrashReportCategory$Entry.d.ts'
import type { CrashReportDetail } from '../../net/minecraft/CrashReportDetail.d.ts'
import type { BlockPos } from '../../net/minecraft/core/BlockPos.d.ts'
import type { LevelHeightAccessor } from '../../net/minecraft/world/level/LevelHeightAccessor.d.ts'
import type { BlockState } from '../../net/minecraft/world/level/block/state/BlockState.d.ts'
export class CrashReportCategory extends Object {
    static formatLocation(paramlevelHeightAccessor: LevelHeightAccessor, paramx: number, paramy: number, paramz: number): string;
    static formatLocation(paramlevelHeightAccessor: LevelHeightAccessor, parampos: BlockPos): string;
    static populateBlockDetails(paramcategory: CrashReportCategory, paramlevelHeightAccessor: LevelHeightAccessor, parampos: BlockPos, paramstate: BlockState): void;
    static populateBlockLocationDetails(paramcategory: CrashReportCategory, paramlevelHeightAccessor: LevelHeightAccessor, parampos: BlockPos): CrashReportCategory;
    constructor(title: string)
    // private entries: CrashReportCategory$Entry[];
    // private stackTrace: StackTraceElement[];
    // private title: string;
    fillInStackTrace(nestedOffset: number): number;
    getDetails(builder: StringBuilder): void;
    getStacktrace(): StackTraceElement[];
    setDetail(key: string, value: Object): CrashReportCategory;
    setDetail(key: string, callback: CrashReportDetail<string>): CrashReportCategory;
    setDetailError(key: string, t: Throwable): void;
    validateStackTrace(source: StackTraceElement, next: StackTraceElement): boolean;
}