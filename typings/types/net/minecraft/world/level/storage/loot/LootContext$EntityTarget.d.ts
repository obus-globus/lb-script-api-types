import type { Codec } from '../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
import type { StringRepresentable } from '../../../../../../net/minecraft/util/StringRepresentable.d.ts'
import type { StringRepresentable$EnumCodec } from '../../../../../../net/minecraft/util/StringRepresentable$EnumCodec.d.ts'
import type { ContextKey } from '../../../../../../net/minecraft/util/context/ContextKey.d.ts'
import type { Entity } from '../../../../../../net/minecraft/world/entity/Entity.d.ts'
import type { LootContext } from '../../../../../../net/minecraft/world/level/storage/loot/LootContext.d.ts'
import type { LootContextArg } from '../../../../../../net/minecraft/world/level/storage/loot/LootContextArg.d.ts'
import type { LootContextArg$SimpleGetter } from '../../../../../../net/minecraft/world/level/storage/loot/LootContextArg$SimpleGetter.d.ts'
export class LootContext$EntityTarget extends Enum<LootContext$EntityTarget> implements StringRepresentable, LootContextArg$SimpleGetter<Entity> {
    static ATTACKER: LootContext$EntityTarget;
    static ATTACKING_PLAYER: LootContext$EntityTarget;
    static CODEC: StringRepresentable$EnumCodec<LootContext$EntityTarget>;
    static DIRECT_ATTACKER: LootContext$EntityTarget;
    static ENTITY_OR_BLOCK: Codec<LootContextArg<Object>>;
    static INTERACTING_ENTITY: LootContext$EntityTarget;
    static PRE_BUILT_MAP_THRESHOLD: number;
    static TARGET_ENTITY: LootContext$EntityTarget;
    static THIS: LootContext$EntityTarget;
    static getByName(paramname: string): LootContext$EntityTarget;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): LootContext$EntityTarget;
    static values(): LootContext$EntityTarget[];
    private constructor(name: string, param: ContextKey<Entity>)
    // private name: string;
    // private param: ContextKey<Entity>;
    contextParam(): ContextKey<Entity>;
    get(context: LootContext): Entity;
    getSerializedName(): string;
    name(): "THIS" | "ATTACKER" | "DIRECT_ATTACKER" | "ATTACKING_PLAYER" | "TARGET_ENTITY" | "INTERACTING_ENTITY";
}