import type { MapCodec } from '../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Stream } from '../../../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { CommandSourceStack } from '../../../../../../net/minecraft/commands/CommandSourceStack.d.ts'
import type { CompoundTag } from '../../../../../../net/minecraft/nbt/CompoundTag.d.ts'
export interface DataSource extends Object{
    codec(): MapCodec<DataSource>;
    getData(sender: CommandSourceStack): Stream<CompoundTag>;
}