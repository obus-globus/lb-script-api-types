import type { MapCodec } from '../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Stream } from '../../../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { CommandSourceStack } from '../../../../../../net/minecraft/commands/CommandSourceStack.d.ts'
import type { EntitySelector } from '../../../../../../net/minecraft/commands/arguments/selector/EntitySelector.d.ts'
import type { CompoundTag } from '../../../../../../net/minecraft/nbt/CompoundTag.d.ts'
import type { DataSource } from '../../../../../../net/minecraft/network/chat/contents/data/DataSource.d.ts'
import type { CompilableString } from '../../../../../../net/minecraft/util/CompilableString.d.ts'
export class EntityDataSource extends Record implements DataSource {
    static MAP_CODEC: MapCodec<EntityDataSource>;
    constructor(selector: CompilableString<EntitySelector>)
    // private selector: CompilableString<EntitySelector>;
    codec(): MapCodec<EntityDataSource>;
    equals(o: Object | null): boolean;
    getData(sender: CommandSourceStack): Stream<CompoundTag>;
    hashCode(): number;
    selector(): CompilableString<EntitySelector>;
    toString(): string;
}