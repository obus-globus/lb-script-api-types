import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../../../../../../java/lang/Comparable.d.ts'
import type { ReachabilityMetadata$MinimalJsonWriter } from '../../../../../../../../../org/apache/logging/log4j/core/config/plugins/processor/internal/ReachabilityMetadata$MinimalJsonWriter.d.ts'
export class ReachabilityMetadata$Method extends Object implements Comparable<ReachabilityMetadata$Method> {
    constructor(name: string)
    readonly name: string;
    // private parameterTypes: string[];
    addParameterType(parameterType: string): void;
    compareTo(other: ReachabilityMetadata$Method): number;
    getName(): string;
    toJson(jsonWriter: ReachabilityMetadata$MinimalJsonWriter): void;
}