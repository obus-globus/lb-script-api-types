import type { CompletableFuture } from '../../../../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { AudioStream } from '../../../../../../../net/minecraft/client/sounds/AudioStream.d.ts'
import type { SoundBufferLibrary } from '../../../../../../../net/minecraft/client/sounds/SoundBufferLibrary.d.ts'
import type { Identifier } from '../../../../../../../net/minecraft/resources/Identifier.d.ts'
export interface FabricSoundInstance extends Object{
    getAudioStream(arg0: SoundBufferLibrary, arg1: Identifier, arg2: boolean): CompletableFuture<AudioStream>;
}