import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { ReachabilityMetadata$MinimalJsonWriter } from '../../../../../../../../../org/apache/logging/log4j/core/config/plugins/processor/internal/ReachabilityMetadata$MinimalJsonWriter.d.ts'
import type { ReachabilityMetadata$Type } from '../../../../../../../../../org/apache/logging/log4j/core/config/plugins/processor/internal/ReachabilityMetadata$Type.d.ts'
export class ReachabilityMetadata$Reflection extends Object {
    constructor(types: ReachabilityMetadata$Type[])
    // private types: ReachabilityMetadata$Type[];
    toJson(jsonWriter: ReachabilityMetadata$MinimalJsonWriter): void;
}