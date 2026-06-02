import type { CPUSampler$Payload } from '../../../../../../com/oracle/truffle/tools/profiler/CPUSampler$Payload.d.ts'
import type { CPUSamplerData } from '../../../../../../com/oracle/truffle/tools/profiler/CPUSamplerData.d.ts'
import type { ProfilerNode } from '../../../../../../com/oracle/truffle/tools/profiler/ProfilerNode.d.ts'
import type { CPUSamplerCLI$SamplingCallTree$CallTreeOutputEntry } from '../../../../../../com/oracle/truffle/tools/profiler/impl/CPUSamplerCLI$SamplingCallTree$CallTreeOutputEntry.d.ts'
import type { PrintStream } from '../../../../../../java/io/PrintStream.d.ts'
import type { Thread } from '../../../../../../java/lang/Thread.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { OptionValues } from '../../../../../../org/graalvm/options/OptionValues.d.ts'
export class CPUSamplerCLI$SamplingCallTree extends Object {
    constructor(data: CPUSamplerData, options: OptionValues)
    // private entries: Map<Thread, E[]>;
    // private format: string;
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
    // private calculateMaxValues(threadData: Map<Thread, E[]>): void;
    // private calculateMaxValuesRec(node: ProfilerNode<CPUSampler$Payload>, depth: number): void;
    // private makeEntries(threadData: Map<Thread, E[]>): void;
    // private makeEntry(node: ProfilerNode<CPUSampler$Payload>, depth: number): CPUSamplerCLI$SamplingCallTree$CallTreeOutputEntry;
    // private mergeEntry(callTreeEntries: CPUSamplerCLI$SamplingCallTree$CallTreeOutputEntry[], node: ProfilerNode<CPUSampler$Payload>, depth: number): void;
    print(out: PrintStream): void;
    // private recursivePrint(out: PrintStream, entry: CPUSamplerCLI$SamplingCallTree$CallTreeOutputEntry, depth: number): void;
}