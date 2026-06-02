import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../../../../../../java/lang/Comparable.d.ts'
import type { ReachabilityMetadata$MinimalJsonWriter } from '../../../../../../../../../org/apache/logging/log4j/core/config/plugins/processor/internal/ReachabilityMetadata$MinimalJsonWriter.d.ts'
export class ReachabilityMetadata$Field extends Object implements Comparable<ReachabilityMetadata$Field> {
    constructor(name: string)
    readonly name: string;
    compareTo(other: ReachabilityMetadata$Field): number;
    getName(): string;
    toJson(jsonWriter: ReachabilityMetadata$MinimalJsonWriter): void;
}