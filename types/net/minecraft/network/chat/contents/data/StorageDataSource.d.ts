import type { MapCodec } from '../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Stream } from '../../../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { CommandSourceStack } from '../../../../../../net/minecraft/commands/CommandSourceStack.d.ts'
import type { CompoundTag } from '../../../../../../net/minecraft/nbt/CompoundTag.d.ts'
import type { DataSource } from '../../../../../../net/minecraft/network/chat/contents/data/DataSource.d.ts'
import type { Identifier } from '../../../../../../net/minecraft/resources/Identifier.d.ts'
export class StorageDataSource extends Record implements DataSource {
    static MAP_CODEC: MapCodec<StorageDataSource>;
    constructor(id: Identifier)
    // private id: Identifier;
    codec(): MapCodec<StorageDataSource>;
    equals(o: Object | null): boolean;
    getData(sender: CommandSourceStack): Stream<CompoundTag>;
    hashCode(): number;
    id(): Identifier;
    toString(): string;
}