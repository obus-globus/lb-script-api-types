import type { Object } from '../../java/lang/Object.d.ts'
import type { CharSequence } from '../../java/lang/CharSequence.d.ts'
import type { Buffer } from '../../kotlinx/io/Buffer.d.ts'
import type { Sink } from '../../kotlinx/io/Sink.d.ts'
import type { Source } from '../../kotlinx/io/Source.d.ts'
export class Utf8Kt extends Object {
    static readCodePointValue(paramarg0: Source): number;
    static readLine(paramarg0: Source): string;
    static readLineStrict(paramarg0: Source, paramarg1: number): string;
    static readString(paramarg0: Buffer): string;
    static readString(paramarg0: Source): string;
    static readString(paramarg0: Source, paramarg1: number): string;
    static utf8Size(paramarg0: string, paramarg1: number, paramarg2: number): number;
    static writeCodePointValue(paramarg0: Sink, paramarg1: number): void;
    static writeString(paramarg0: Sink, paramarg1: CharSequence, paramarg2: number, paramarg3: number): void;
    static writeString(paramarg0: Sink, paramarg1: string, paramarg2: number, paramarg3: number): void;
}