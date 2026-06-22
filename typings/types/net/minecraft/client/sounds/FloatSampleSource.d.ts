import type { FloatConsumer } from '../../../../it/unimi/dsi/fastutil/floats/FloatConsumer.d.ts'
import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { AudioFormat } from '../../../../javax/sound/sampled/AudioFormat.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { FiniteAudioStream } from '../../../../net/minecraft/client/sounds/FiniteAudioStream.d.ts'
export interface FloatSampleSource extends Object, FiniteAudioStream {
    close(): void;
    getFormat(): AudioFormat;
    read(expectedSize: number): ByteBuffer;
    readAll(): ByteBuffer;
    readChunk(output: (param0: number) => void): boolean;
}