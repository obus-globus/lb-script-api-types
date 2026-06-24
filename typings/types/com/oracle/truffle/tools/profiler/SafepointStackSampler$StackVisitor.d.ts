import type { CallTarget } from '../../../../../com/oracle/truffle/api/CallTarget.d.ts'
import type { Frame } from '../../../../../com/oracle/truffle/api/frame/Frame.d.ts'
import type { FrameInstance } from '../../../../../com/oracle/truffle/api/frame/FrameInstance.d.ts'
import type { FrameInstanceVisitor } from '../../../../../com/oracle/truffle/api/frame/FrameInstanceVisitor.d.ts'
import type { SourceSectionFilter } from '../../../../../com/oracle/truffle/api/instrumentation/SourceSectionFilter.d.ts'
import type { SafepointStackSampler } from '../../../../../com/oracle/truffle/tools/profiler/SafepointStackSampler.d.ts'
import type { SafepointStackSampler$CollectionResult } from '../../../../../com/oracle/truffle/tools/profiler/SafepointStackSampler$CollectionResult.d.ts'
import type { SafepointStackSampler$StackSample } from '../../../../../com/oracle/truffle/tools/profiler/SafepointStackSampler$StackSample.d.ts'
import type { StackTraceEntry } from '../../../../../com/oracle/truffle/tools/profiler/StackTraceEntry.d.ts'
import type { Thread } from '../../../../../java/lang/Thread.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class SafepointStackSampler$StackVisitor extends Object implements FrameInstanceVisitor<FrameInstance>, SafepointStackSampler$CollectionResult {
    constructor(null_: SafepointStackSampler, stackLimit: number, sourceSectionFilter: SourceSectionFilter, includeAsyncStackTrace: boolean)
    // private endTime: number;
    // private includeAsyncStackTrace: boolean;
    // private nextFrameIndex: number;
    // private overflowed: boolean;
    // private roots: (Object | null)[];
    // private sourceSectionFilter: SourceSectionFilter;
    // private startTime: number;
    // private targets: CallTarget[];
    // private thread: Thread;
    // private tiers: number[];
    // private addAnyAsyncStackTraceEntries(callTarget: CallTarget, frame: Frame): boolean;
    // private addStackTraceEntry(callTarget: CallTarget, compilationTier: number, compilationRoot: boolean): boolean;
    createEntries(filter: SourceSectionFilter): StackTraceEntry[];
    createSample(submitTime: number): SafepointStackSampler$StackSample;
    iterateFrames(): void;
    resetAndReturn(): void;
    visitFrame(frameInstance: FrameInstance): FrameInstance;
}