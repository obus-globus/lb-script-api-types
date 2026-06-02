import type { SoundBuffer } from '../../../../com/mojang/blaze3d/audio/SoundBuffer.d.ts'
import type { CompletableFuture } from '../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { AudioStream } from '../../../../net/minecraft/client/sounds/AudioStream.d.ts'
import type { SoundBufferLibrary$DebugOutput } from '../../../../net/minecraft/client/sounds/SoundBufferLibrary$DebugOutput.d.ts'
import type { Identifier } from '../../../../net/minecraft/resources/Identifier.d.ts'
import type { ResourceProvider } from '../../../../net/minecraft/server/packs/resources/ResourceProvider.d.ts'
export class SoundBufferLibrary extends Object {
    constructor(resourceProvider: (param0: Identifier) => java.util.Optional<net.minecraft.server.packs.resources.Resource>)
    // private cache: Map<Identifier, CompletableFuture<SoundBuffer>>;
    // private resourceManager: (param0: Identifier) => java.util.Optional<net.minecraft.server.packs.resources.Resource>;
    clear(): void;
    enumerate(debugOutput: SoundBufferLibrary$DebugOutput): void;
    getCompleteBuffer(location: Identifier): CompletableFuture<SoundBuffer>;
    getStream(location: Identifier, looping: boolean): CompletableFuture<AudioStream>;
    preload(sounds: E[]): CompletableFuture<Object>;
}