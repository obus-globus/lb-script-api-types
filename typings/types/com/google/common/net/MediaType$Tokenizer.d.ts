import type { CharMatcher } from '../../../../com/google/common/base/CharMatcher.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class MediaType$Tokenizer extends Object {
    constructor(input: string)
    // private input: string;
    // private position: number;
    consumeCharacter(matcher: CharMatcher): string;
    consumeCharacter(c: string): string;
    consumeToken(matcher: CharMatcher): string;
    consumeTokenIfPresent(matcher: CharMatcher): string;
    hasMore(): boolean;
    previewChar(): string;
}