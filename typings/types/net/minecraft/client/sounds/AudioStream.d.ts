import type { Closeable } from '../../../../java/io/Closeable.d.ts'
import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { AudioFormat } from '../../../../javax/sound/sampled/AudioFormat.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface AudioStream extends Closeable, Object{
    close(): void;
    getFormat(): AudioFormat;
    read(expectedSize: number): ByteBuffer;
}