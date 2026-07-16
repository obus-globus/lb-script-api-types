import type { Object } from '../../java/lang/Object.d.ts'
import type { CharSequence } from '../../java/lang/CharSequence.d.ts'
import type { Buffer } from '../../kotlinx/io/Buffer.d.ts'
import type { Sink } from '../../kotlinx/io/Sink.d.ts'
import type { Source } from '../../kotlinx/io/Source.d.ts'
export class Utf8Kt extends Object {
    static readCodePointValue(self: Source): number;
    static readLine(self: Source): string | null;
    static readLineStrict(self: Source, limit: number): string;
    static readString(self: Buffer): string;
    static readString(self: Source): string;
    static readString(self: Source, byteCount: number): string;
    static utf8Size(self: string, startIndex: number, endIndex: number): number;
    static writeCodePointValue(self: Sink, codePoint: number): void;
    static writeString(self: Sink, chars: CharSequence, startIndex: number, endIndex: number): void;
    static writeString(self: Sink, string: string, startIndex: number, endIndex: number): void;
}