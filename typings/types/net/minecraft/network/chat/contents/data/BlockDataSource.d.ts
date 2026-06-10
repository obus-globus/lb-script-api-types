import type { Codec } from '../../../../../../com/mojang/serialization/Codec.d.ts'
import type { MapCodec } from '../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Stream } from '../../../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { CommandSourceStack } from '../../../../../../net/minecraft/commands/CommandSourceStack.d.ts'
import type { Coordinates } from '../../../../../../net/minecraft/commands/arguments/coordinates/Coordinates.d.ts'
import type { CompoundTag } from '../../../../../../net/minecraft/nbt/CompoundTag.d.ts'
import type { DataSource } from '../../../../../../net/minecraft/network/chat/contents/data/DataSource.d.ts'
import type { CompilableString } from '../../../../../../net/minecraft/util/CompilableString.d.ts'
export class BlockDataSource extends Record implements DataSource {
    static BLOCK_POS_CODEC: Codec<CompilableString<Coordinates>>;
    static MAP_CODEC: MapCodec<BlockDataSource>;
    constructor(coordinates: CompilableString<Coordinates>)
    // private coordinates: CompilableString<Coordinates>;
    codec(): MapCodec<BlockDataSource>;
    coordinates(): CompilableString<Coordinates>;
    equals(o: Object | null): boolean;
    getData(sender: CommandSourceStack): Stream<CompoundTag>;
    hashCode(): number;
    toString(): string;
}