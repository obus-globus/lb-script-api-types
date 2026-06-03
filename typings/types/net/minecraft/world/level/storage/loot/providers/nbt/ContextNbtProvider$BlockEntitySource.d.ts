import type { Codec } from '../../../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Tag } from '../../../../../../../../net/minecraft/nbt/Tag.d.ts'
import type { ContextKey } from '../../../../../../../../net/minecraft/util/context/ContextKey.d.ts'
import type { BlockEntity } from '../../../../../../../../net/minecraft/world/level/block/entity/BlockEntity.d.ts'
import type { LootContext } from '../../../../../../../../net/minecraft/world/level/storage/loot/LootContext.d.ts'
import type { LootContextArg$Getter } from '../../../../../../../../net/minecraft/world/level/storage/loot/LootContextArg$Getter.d.ts'
export class ContextNbtProvider$BlockEntitySource extends Record implements LootContextArg$Getter<BlockEntity, Tag> {
    static ENTITY_OR_BLOCK: Codec<Object>;
    private constructor(contextParam: ContextKey<BlockEntity>)
    // private contextParam: ContextKey<BlockEntity>;
    contextParam(): ContextKey<BlockEntity>;
    equals(o: Object | null): boolean;
    get<R extends Object | number | string | boolean>(context: LootContext): R;
    get(blockEntity: BlockEntity): Tag;
    get(context: LootContext): Tag;
    hashCode(): number;
    toString(): string;
}