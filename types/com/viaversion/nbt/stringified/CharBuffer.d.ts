import type { StringifiedTagParseException } from '../../../../com/viaversion/nbt/stringified/StringifiedTagParseException.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../java/lang/CharSequence.d.ts'
export class CharBuffer extends Object {
    constructor(arg0: CharSequence)
    // private index: number;
    // private sequence: CharSequence;
    advance(): boolean;
    expect(arg0: string): CharBuffer;
    hasMore(): boolean;
    hasMore(arg0: number): boolean;
    index(): number;
    makeError(arg0: string): StringifiedTagParseException;
    peek(): string;
    peek(arg0: number): string;
    skipWhitespace(): CharBuffer;
    take(): string;
    takeIf(arg0: string): boolean;
    takeUntil(arg0: string): CharSequence;
}