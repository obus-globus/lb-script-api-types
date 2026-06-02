import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { ReachabilityMetadata$Field } from '../../../../../../../../../org/apache/logging/log4j/core/config/plugins/processor/internal/ReachabilityMetadata$Field.d.ts'
import type { ReachabilityMetadata$Method } from '../../../../../../../../../org/apache/logging/log4j/core/config/plugins/processor/internal/ReachabilityMetadata$Method.d.ts'
import type { ReachabilityMetadata$MinimalJsonWriter } from '../../../../../../../../../org/apache/logging/log4j/core/config/plugins/processor/internal/ReachabilityMetadata$MinimalJsonWriter.d.ts'
export class ReachabilityMetadata$Type extends Object {
    constructor(type: string)
    // private fields: E[];
    // private methods: E[];
    readonly type: string;
    addField(field: ReachabilityMetadata$Field): void;
    addMethod(method: ReachabilityMetadata$Method): void;
    getType(): string;
    toJson(jsonWriter: ReachabilityMetadata$MinimalJsonWriter): void;
}