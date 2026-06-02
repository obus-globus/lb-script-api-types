import type { Replaceable } from '../../../../com/ibm/icu/text/Replaceable.d.ts'
import type { StringBuffer } from '../../../../java/lang/StringBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ReplaceableString extends Object implements Replaceable {
    constructor()
    constructor(arg0: StringBuffer)
    constructor(arg0: string)
    // private buf: StringBuffer;
    char32At(arg0: number): number;
    charAt(arg0: number): string;
    copy(arg0: number, arg1: number, arg2: number): void;
    getChars(arg0: number, arg1: number, arg2: string[], arg3: number): void;
    hasMetaData(): boolean;
    length(): number;
    replace(arg0: number, arg1: number, arg2: string[], arg3: number, arg4: number): void;
    replace(arg0: number, arg1: number, arg2: string): void;
    substring(arg0: number, arg1: number): string;
    toString(): string;
}