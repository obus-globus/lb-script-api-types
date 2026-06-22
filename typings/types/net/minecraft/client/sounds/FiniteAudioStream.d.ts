import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { AudioFormat } from '../../../../javax/sound/sampled/AudioFormat.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { AudioStream } from '../../../../net/minecraft/client/sounds/AudioStream.d.ts'
export interface FiniteAudioStream extends Object, AudioStream{
    close(): void;
    getFormat(): AudioFormat;
    read(expectedSize: number): ByteBuffer;
    readAll(): ByteBuffer;
}