import type { ByteWriteChannel } from '../../../../io/ktor/utils/io/ByteWriteChannel.d.ts'
import type { BufferedWriter } from '../../../../java/io/BufferedWriter.d.ts'
import type { Writer } from '../../../../java/io/Writer.d.ts'
import type { Charset } from '../../../../java/nio/charset/Charset.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class OutputStreamAdaptersKt extends Object {
    static bufferedWriter(self: ByteWriteChannel, charset: Charset): BufferedWriter;
    static writer(self: ByteWriteChannel, charset: Charset): Writer;
}