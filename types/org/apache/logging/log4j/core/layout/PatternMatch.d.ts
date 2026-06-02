import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { PatternMatch$Builder } from '../../../../../../org/apache/logging/log4j/core/layout/PatternMatch$Builder.d.ts'
export class PatternMatch extends Object {
    static newBuilder(): PatternMatch$Builder;
    constructor(key: string, pattern: string)
    readonly key: string;
    readonly pattern: string;
    equals(obj: Object | null): boolean;
    getKey(): string;
    getPattern(): string;
    hashCode(): number;
    toString(): string;
}