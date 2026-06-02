import type { StringBuffer } from '../../../../../../../java/lang/StringBuffer.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Replaceable } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/Replaceable.d.ts'
export class ReplaceableString extends Object implements Replaceable {
    constructor()
    constructor(buf: StringBuffer)
    constructor(str: string)
    // private buf: StringBuffer;
    char32At(offset: number): number;
    charAt(offset: number): string;
    copy(start: number, limit: number, dest: number): void;
    getChars(srcStart: number, srcLimit: number, dst: string[], dstStart: number): void;
    hasMetaData(): boolean;
    length(): number;
    replace(start: number, limit: number, chars: string[], charsStart: number, charsLen: number): void;
    replace(start: number, limit: number, text: string): void;
    substring(start: number, limit: number): string;
    toString(): string;
}