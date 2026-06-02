import type { CPUSampler$Payload } from '../../../../../../com/oracle/truffle/tools/profiler/CPUSampler$Payload.d.ts'
import type { ProfilerNode } from '../../../../../../com/oracle/truffle/tools/profiler/ProfilerNode.d.ts'
import type { CPUSamplerCLI$OutputEntry } from '../../../../../../com/oracle/truffle/tools/profiler/impl/CPUSamplerCLI$OutputEntry.d.ts'
export class CPUSamplerCLI$SamplingCallTree$CallTreeOutputEntry extends CPUSamplerCLI$OutputEntry {
    constructor(node: ProfilerNode<CPUSampler$Payload>)
    // private children: CPUSamplerCLI$SamplingCallTree$CallTreeOutputEntry[];
    corresponds(node: ProfilerNode<CPUSampler$Payload>): boolean;
    merge(payload: CPUSampler$Payload): void;
}