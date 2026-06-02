import type { CPUSampler$Payload } from '../../../../../../com/oracle/truffle/tools/profiler/CPUSampler$Payload.d.ts'
import type { ProfilerNode } from '../../../../../../com/oracle/truffle/tools/profiler/ProfilerNode.d.ts'
import type { ProfilerCLI$SourceLocation } from '../../../../../../com/oracle/truffle/tools/profiler/impl/ProfilerCLI$SourceLocation.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class CPUSamplerCLI$OutputEntry extends Object {
    constructor(node: ProfilerNode<CPUSampler$Payload>)
    constructor(location: ProfilerCLI$SourceLocation)
    // private location: ProfilerCLI$SourceLocation;
    // private tierToSamples: number[];
    // private tierToSelfSamples: number[];
    // private totalSamples: number;
    // private totalSelfSamples: number;
    format(format: string, showTiers: number[], samplePeriod: number, depth: number, globalTotalSamples: number, tiers: number[]): string;
}