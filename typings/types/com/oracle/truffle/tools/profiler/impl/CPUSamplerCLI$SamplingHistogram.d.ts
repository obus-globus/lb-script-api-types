import type { JavaMap } from '../../../../../../JavaMap.d.ts'
import type { CPUSampler$Payload } from '../../../../../../com/oracle/truffle/tools/profiler/CPUSampler$Payload.d.ts'
import type { CPUSamplerData } from '../../../../../../com/oracle/truffle/tools/profiler/CPUSamplerData.d.ts'
import type { ProfilerNode } from '../../../../../../com/oracle/truffle/tools/profiler/ProfilerNode.d.ts'
import type { CPUSamplerCLI$OutputEntry } from '../../../../../../com/oracle/truffle/tools/profiler/impl/CPUSamplerCLI$OutputEntry.d.ts'
import type { CPUSamplerCLI$SamplingHistogram$SourceLocationNodes } from '../../../../../../com/oracle/truffle/tools/profiler/impl/CPUSamplerCLI$SamplingHistogram$SourceLocationNodes.d.ts'
import type { ProfilerCLI$SourceLocation } from '../../../../../../com/oracle/truffle/tools/profiler/impl/ProfilerCLI$SourceLocation.d.ts'
import type { PrintStream } from '../../../../../../java/io/PrintStream.d.ts'
import type { Thread } from '../../../../../../java/lang/Thread.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../../java/util/Map$Entry.d.ts'
import type { OptionValues } from '../../../../../../org/graalvm/options/OptionValues.d.ts'
export class CPUSamplerCLI$SamplingHistogram extends Object {
    constructor(data: CPUSamplerData, options: OptionValues)
    // private format: string;
    // private histogram: JavaMap<Thread, CPUSamplerCLI$OutputEntry[]>;
    // private maxNameLength: number;
    // private minSamples: number;
    // private samplePeriod: number;
    // private samplesMissed: number;
    // private samplesTaken: number;
    // private showTiers: number[];
    // private sortedTiers: number[];
    // private summariseThreads: boolean;
    // private tiers: number[];
    // private title: string;
    // private histogramEntries(threadEntry: Map$Entry<Thread, CPUSamplerCLI$SamplingHistogram$SourceLocationNodes>): CPUSamplerCLI$OutputEntry[];
    // private histogramEntry(sourceLocationEntry: Map$Entry<ProfilerCLI$SourceLocation, ProfilerNode<CPUSampler$Payload>[]>): CPUSamplerCLI$OutputEntry;
    // private maybeSummarizeThreads(perThreadSourceLocationPayloads: JavaMap<Thread, CPUSamplerCLI$SamplingHistogram$SourceLocationNodes>): void;
    print(out: PrintStream): void;
}