import type { CharBuffer } from '../../../../com/viaversion/nbt/stringified/CharBuffer.d.ts'
import type { NumberTag } from '../../../../com/viaversion/nbt/tag/NumberTag.d.ts'
import type { Tag } from '../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { StringBuilder } from '../../../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../java/util/Map$Entry.d.ts'
export class TagStringReader extends Object {
    constructor(arg0: CharBuffer)
    // private acceptLegacy: boolean;
    // private buffer: CharBuffer;
    // private depth: number;
    array(arg0: string): Tag;
    // private byteArray(): number[];
    compound(): Map$Entry<string, Tag>[];
    // private extractRadix(arg0: StringBuilder, arg1: string): number;
    // private intArray(): number[];
    key(): string;
    legacy(arg0: boolean): void;
    list(): Tag[];
    // private longArray(): number[];
    // private parseByte(arg0: string, arg1: number, arg2: boolean): number;
    // private parseInt(arg0: string, arg1: number, arg2: boolean): number;
    // private parseLong(arg0: string, arg1: number, arg2: boolean): number;
    // private parseNumberTag(arg0: string, arg1: string, arg2: number, arg3: boolean): NumberTag;
    // private parseShort(arg0: string, arg1: number, arg2: boolean): number;
    // private scalar(): Tag;
    // private separatorOrCompleteWith(arg0: string): boolean;
    tag(): Tag;
}