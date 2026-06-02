import type { Deflater } from '../java/util/zip/Deflater.d.ts'
import type { Object } from '../java/lang/Object.d.ts'
import type { DeflaterSink } from '../okio/DeflaterSink.d.ts'
import type { Sink } from '../okio/Sink.d.ts'
export class -DeflaterSinkExtensions extends Object {
    static deflate(paramarg0: Sink, paramarg1: Deflater): DeflaterSink;
}