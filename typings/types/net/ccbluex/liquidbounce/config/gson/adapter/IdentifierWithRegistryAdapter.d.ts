import type { TypeAdapter } from '../../../../../../com/google/gson/TypeAdapter.d.ts'
import type { JsonReader } from '../../../../../../com/google/gson/stream/JsonReader.d.ts'
import type { JsonWriter } from '../../../../../../com/google/gson/stream/JsonWriter.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { IdentifierWithRegistryAdapter$Companion } from '../../../../../../net/ccbluex/liquidbounce/config/gson/adapter/IdentifierWithRegistryAdapter$Companion.d.ts'
import type { SoundEvent } from '../../../../../../net/minecraft/sounds/SoundEvent.d.ts'
import type { MobEffect } from '../../../../../../net/minecraft/world/effect/MobEffect.d.ts'
import type { EntityType } from '../../../../../../net/minecraft/world/entity/EntityType.d.ts'
import type { MenuType } from '../../../../../../net/minecraft/world/inventory/MenuType.d.ts'
import type { Item } from '../../../../../../net/minecraft/world/item/Item.d.ts'
import type { Block } from '../../../../../../net/minecraft/world/level/block/Block.d.ts'
export class IdentifierWithRegistryAdapter<T extends unknown> extends TypeAdapter<T> {
    static BLOCK: IdentifierWithRegistryAdapter<Block>;
    static Companion: IdentifierWithRegistryAdapter$Companion;
    static ENTITY_TYPE: IdentifierWithRegistryAdapter<EntityType<any>>;
    static ITEM: IdentifierWithRegistryAdapter<Item>;
    static SCREEN_HANDLER: IdentifierWithRegistryAdapter<MenuType<any>>;
    static SOUND_EVENT: IdentifierWithRegistryAdapter<SoundEvent>;
    static STATUS_EFFECT: IdentifierWithRegistryAdapter<MobEffect>;
    constructor(registry: T[])
    readonly registry: T[];
    read(source: JsonReader): T | null;
    write(sink: JsonWriter, value: T | null): void;
}