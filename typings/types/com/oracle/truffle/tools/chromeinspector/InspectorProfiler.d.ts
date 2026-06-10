import type { InspectorExecutionContext } from '../../../../../com/oracle/truffle/tools/chromeinspector/InspectorExecutionContext.d.ts'
import type { ScriptsHandler } from '../../../../../com/oracle/truffle/tools/chromeinspector/ScriptsHandler.d.ts'
import type { TypeHandler } from '../../../../../com/oracle/truffle/tools/chromeinspector/TypeHandler.d.ts'
import type { TypeHandler$SectionTypeProfile } from '../../../../../com/oracle/truffle/tools/chromeinspector/TypeHandler$SectionTypeProfile.d.ts'
import type { Params } from '../../../../../com/oracle/truffle/tools/chromeinspector/commands/Params.d.ts'
import type { ProfilerDomain } from '../../../../../com/oracle/truffle/tools/chromeinspector/domains/ProfilerDomain.d.ts'
import type { Enabler } from '../../../../../com/oracle/truffle/tools/chromeinspector/instrument/Enabler.d.ts'
import type { ConnectionWatcher } from '../../../../../com/oracle/truffle/tools/chromeinspector/server/ConnectionWatcher.d.ts'
import type { Profile$TimeLineItem } from '../../../../../com/oracle/truffle/tools/chromeinspector/types/Profile$TimeLineItem.d.ts'
import type { ProfileNode } from '../../../../../com/oracle/truffle/tools/chromeinspector/types/ProfileNode.d.ts'
import type { CPUSampler } from '../../../../../com/oracle/truffle/tools/profiler/CPUSampler.d.ts'
import type { CPUSampler$Payload } from '../../../../../com/oracle/truffle/tools/profiler/CPUSampler$Payload.d.ts'
import type { CPUTracer } from '../../../../../com/oracle/truffle/tools/profiler/CPUTracer.d.ts'
import type { CPUTracer$Payload } from '../../../../../com/oracle/truffle/tools/profiler/CPUTracer$Payload.d.ts'
import type { ProfilerNode } from '../../../../../com/oracle/truffle/tools/profiler/ProfilerNode.d.ts'
export class InspectorProfiler extends ProfilerDomain {
    constructor(context: InspectorExecutionContext, connectionWatcher: ConnectionWatcher)
    // private connectionWatcher: ConnectionWatcher;
    // private context: InspectorExecutionContext;
    // private enabler: Enabler;
    // private oldGatherSelfHitTimes: boolean;
    // private sampler: CPUSampler;
    // private slh: ScriptsHandler;
    // private startTimestamp: number;
    // private tracer: CPUTracer;
    // private typeHandler: TypeHandler;
    doDisable(): void;
    doEnable(): void;
    // private fillChildren(node: ProfileNode, childProfilerNodes: ProfilerNode<CPUSampler$Payload>[], nodes: ProfileNode[], timeLine: Profile$TimeLineItem[], lastCounter: number): void;
    getBestEffortCoverage(): Params;
    // private getCoverage(payloads: CPUTracer$Payload[]): Params;
    // private getProfile(rootProfilerNodes: ProfilerNode<CPUSampler$Payload>[], idleHitCount: number, startTime: number, endTime: number): Params;
    // private getTypeProfile(profiles: TypeHandler$SectionTypeProfile[]): Params;
    setSamplingInterval(interval: number): void;
    start(): void;
    startPreciseCoverage(callCount: boolean, detailed: boolean): void;
    startTypeProfile(): void;
    stop(): Params;
    stopPreciseCoverage(): void;
    stopTypeProfile(): void;
    takePreciseCoverage(): Params;
    takeTypeProfile(): Params;
}