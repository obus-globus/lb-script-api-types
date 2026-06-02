import type { InputStream } from '../../../../../java/io/InputStream.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Metadata } from '../../../../../org/apache/tika/metadata/Metadata.d.ts'
import type { ParseContext } from '../../../../../org/apache/tika/parser/ParseContext.d.ts'
import type { Emitter } from '../../../../../org/apache/tika/pipes/emitter/Emitter.d.ts'
export interface StreamEmitter extends Object, Emitter{
    emit(arg0: string, arg1: InputStream, arg2: Metadata, arg3: ParseContext): void;
}