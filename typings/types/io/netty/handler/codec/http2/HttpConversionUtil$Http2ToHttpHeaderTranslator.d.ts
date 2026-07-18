import type { AsciiString } from '../../../../../io/netty/util/AsciiString.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../java/lang/CharSequence.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export class HttpConversionUtil$Http2ToHttpHeaderTranslator extends Object {
    constructor(arg0: number, arg1: Map$Entry<string, string>[], arg2: boolean)
    // private output: Map$Entry<string, string>[];
    // private streamId: number;
    // private translations: AsciiString[];
    translateHeaders(arg0: Map$Entry<CharSequence, CharSequence>[]): void;
}