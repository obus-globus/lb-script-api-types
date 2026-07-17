import type { JavaMap } from '../../../../../../JavaMap.d.ts'
import type { CPUSampler$Payload } from '../../../../../../com/oracle/truffle/tools/profiler/CPUSampler$Payload.d.ts'
import type { ProfilerNode } from '../../../../../../com/oracle/truffle/tools/profiler/ProfilerNode.d.ts'
import type { ProfilerCLI$SourceLocation } from '../../../../../../com/oracle/truffle/tools/profiler/impl/ProfilerCLI$SourceLocation.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class CPUSamplerCLI$SamplingHistogram$SourceLocationNodes extends Object {
    constructor(locations: JavaMap<ProfilerCLI$SourceLocation, ProfilerNode<CPUSampler$Payload>[]>)
    // private locations: JavaMap<ProfilerCLI$SourceLocation, ProfilerNode<CPUSampler$Payload>[]>;
}