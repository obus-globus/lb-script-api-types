import type { Serializable } from '../../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { PatternMatch } from '../../../../../../org/apache/logging/log4j/core/layout/PatternMatch.d.ts'
import type { Builder } from '../../../../../../org/apache/logging/log4j/core/util/Builder.d.ts'
export class PatternMatch$Builder extends Object implements Serializable, Builder<PatternMatch> {
    constructor()
    // private key: string;
    // private pattern: string;
    build(): PatternMatch;
    getErrorPrefix(): string;
    isValid(): boolean;
    readResolve(): Object;
    setKey(key: string): PatternMatch$Builder;
    setPattern(pattern: string): PatternMatch$Builder;
}