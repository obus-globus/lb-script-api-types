import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../net/minecraft/core/BlockPos.d.ts'
import type { Holder } from '../../../../net/minecraft/core/Holder.d.ts'
import type { DataComponentGetter } from '../../../../net/minecraft/core/component/DataComponentGetter.d.ts'
import type { RegistryFriendlyByteBuf } from '../../../../net/minecraft/network/RegistryFriendlyByteBuf.d.ts'
import type { Component } from '../../../../net/minecraft/network/chat/Component.d.ts'
import type { StreamCodec } from '../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { InteractionResult } from '../../../../net/minecraft/world/InteractionResult.d.ts'
import type { Player } from '../../../../net/minecraft/world/entity/player/Player.d.ts'
import type { Item$TooltipContext } from '../../../../net/minecraft/world/item/Item$TooltipContext.d.ts'
import type { ItemStack } from '../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { JukeboxSong } from '../../../../net/minecraft/world/item/JukeboxSong.d.ts'
import type { TooltipFlag } from '../../../../net/minecraft/world/item/TooltipFlag.d.ts'
import type { TooltipProvider } from '../../../../net/minecraft/world/item/component/TooltipProvider.d.ts'
import type { Level } from '../../../../net/minecraft/world/level/Level.d.ts'
export class JukeboxPlayable extends Record implements TooltipProvider {
    static CODEC: Codec<JukeboxPlayable>;
    static STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, JukeboxPlayable>;
    static tryInsertIntoJukebox(paramlevel: Level, parampos: BlockPos, paramtoInsert: ItemStack, paramplayer: Player): InteractionResult;
    constructor(song: Holder<JukeboxSong>)
    // private song: Holder<JukeboxSong>;
    addToTooltip(context: Item$TooltipContext, consumer: (param0: Component) => void, flag: TooltipFlag, components: DataComponentGetter): void;
    equals(o: Object | null): boolean;
    hashCode(): number;
    song(): Holder<JukeboxSong>;
    toString(): string;
}