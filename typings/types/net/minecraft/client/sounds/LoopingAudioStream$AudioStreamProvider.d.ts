import type { InputStream } from '../../../../java/io/InputStream.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { AudioStream } from '../../../../net/minecraft/client/sounds/AudioStream.d.ts'
export interface LoopingAudioStream$AudioStreamProvider extends Object{
    create(inputStream: InputStream): AudioStream;
}