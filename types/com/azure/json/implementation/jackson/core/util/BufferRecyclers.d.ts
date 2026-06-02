import type { JsonStringEncoder } from '../../../../../../../com/azure/json/implementation/jackson/core/io/JsonStringEncoder.d.ts'
import type { BufferRecycler } from '../../../../../../../com/azure/json/implementation/jackson/core/util/BufferRecycler.d.ts'
import type { StringBuilder } from '../../../../../../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../../../java/lang/CharSequence.d.ts'
export class BufferRecyclers extends Object {
    static SYSTEM_PROPERTY_TRACK_REUSABLE_BUFFERS: string;
    static encodeAsUTF8(paramarg0: string): number[];
    static getBufferRecycler(): BufferRecycler;
    static getJsonStringEncoder(): JsonStringEncoder;
    static quoteAsJsonText(paramarg0: string): string[];
    static quoteAsJsonText(paramarg0: CharSequence, paramarg1: StringBuilder): void;
    static quoteAsJsonUTF8(paramarg0: string): number[];
    constructor()
}