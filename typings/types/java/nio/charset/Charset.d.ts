import type { JavaMap } from '../../../JavaMap.d.ts'
import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { CharBuffer } from '../../../java/nio/CharBuffer.d.ts'
import type { CharsetDecoder } from '../../../java/nio/charset/CharsetDecoder.d.ts'
import type { CharsetEncoder } from '../../../java/nio/charset/CharsetEncoder.d.ts'
import type { Locale } from '../../../java/util/Locale.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../java/lang/Comparable.d.ts'
export abstract class Charset extends Object implements Comparable<Charset> {
    static availableCharsets(): JavaMap<string, Charset>;
    static defaultCharset(): Charset;
    static forName(paramarg0: string): Charset;
    static forName(paramarg0: string, paramarg1: Charset): Charset;
    static isSupported(paramarg0: string): boolean;
    constructor(arg0: string, arg1: string[])
    // private aliasSet: string[];
    // private aliases: string[];
    // private name: string;
    aliases(): string[];
    canEncode(): boolean;
    compareTo(arg0: Charset): number;
    contains(arg0: Charset): boolean;
    decode(arg0: ByteBuffer): CharBuffer;
    displayName(): string;
    displayName(arg0: Locale): string;
    encode(arg0: CharBuffer): ByteBuffer;
    encode(arg0: string): ByteBuffer;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    isRegistered(): boolean;
    name(): string;
    newDecoder(): CharsetDecoder;
    newEncoder(): CharsetEncoder;
    toString(): string;
}