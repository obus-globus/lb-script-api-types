import type { Channel } from '../../../../com/mojang/blaze3d/audio/Channel.d.ts'
import type { Library } from '../../../../com/mojang/blaze3d/audio/Library.d.ts'
import type { Library$Pool } from '../../../../com/mojang/blaze3d/audio/Library$Pool.d.ts'
import type { CompletableFuture } from '../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Executor } from '../../../../java/util/concurrent/Executor.d.ts'
import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { Stream } from '../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ChannelAccess$ChannelHandle } from '../../../../net/minecraft/client/sounds/ChannelAccess$ChannelHandle.d.ts'
export class ChannelAccess extends Object {
    constructor(library: Library, executor: Executor)
    // private channels: ChannelAccess$ChannelHandle[];
    // private executor: Executor;
    // private library: Library;
    clear(): void;
    createHandle(pool: Library$Pool): CompletableFuture<ChannelAccess$ChannelHandle>;
    executeOnChannels(action: (param0: Stream<Channel>) => void): void;
    scheduleTick(): void;
}