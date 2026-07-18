import type { ByteReadChannel } from '../../../../io/ktor/utils/io/ByteReadChannel.d.ts'
import type { Charset } from '../../../../java/nio/charset/Charset.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Source } from '../../../../kotlinx/io/Source.d.ts'
export class ByteChannelCtorKt extends Object {
    static ByteReadChannel(content: number[], offset: number, length: number): ByteReadChannel;
    static ByteReadChannel(text: string, charset: Charset): ByteReadChannel;
    static ByteReadChannel(source: Source): ByteReadChannel;
}