import type { Codec } from '../../../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Tag } from '../../../../../../../../net/minecraft/nbt/Tag.d.ts'
import type { ContextKey } from '../../../../../../../../net/minecraft/util/context/ContextKey.d.ts'
import type { Entity } from '../../../../../../../../net/minecraft/world/entity/Entity.d.ts'
import type { LootContext } from '../../../../../../../../net/minecraft/world/level/storage/loot/LootContext.d.ts'
import type { LootContextArg } from '../../../../../../../../net/minecraft/world/level/storage/loot/LootContextArg.d.ts'
import type { LootContextArg$Getter } from '../../../../../../../../net/minecraft/world/level/storage/loot/LootContextArg$Getter.d.ts'
export class ContextNbtProvider$EntitySource extends Record implements LootContextArg$Getter<Entity, Tag> {
    static ENTITY_OR_BLOCK: Codec<LootContextArg<Object>>;
    private constructor(contextParam: ContextKey<Entity>)
    // private contextParam: ContextKey<Entity>;
    contextParam(): ContextKey<Entity>;
    equals(o: Object | null): boolean;
    get(context: LootContext): Tag;
    get(entity: Entity): Tag;
    hashCode(): number;
    toString(): string;
}