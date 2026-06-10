import type { BufferedInputStream } from '../../../../java/io/BufferedInputStream.d.ts'
import type { InputStream } from '../../../../java/io/InputStream.d.ts'
import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { AudioFormat } from '../../../../javax/sound/sampled/AudioFormat.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { AudioStream } from '../../../../net/minecraft/client/sounds/AudioStream.d.ts'
import type { LoopingAudioStream$AudioStreamProvider } from '../../../../net/minecraft/client/sounds/LoopingAudioStream$AudioStreamProvider.d.ts'
export class LoopingAudioStream extends Object implements AudioStream {
    constructor(provider: (param0: InputStream) => AudioStream, originalInputStream: InputStream)
    // private bufferedInputStream: BufferedInputStream;
    // private provider: (param0: InputStream) => AudioStream;
    // private stream: AudioStream;
    close(): void;
    getFormat(): AudioFormat;
    read(expectedSize: number): ByteBuffer;
}