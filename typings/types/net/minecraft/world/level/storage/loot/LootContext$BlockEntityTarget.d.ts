import type { Codec } from '../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
import type { StringRepresentable } from '../../../../../../net/minecraft/util/StringRepresentable.d.ts'
import type { ContextKey } from '../../../../../../net/minecraft/util/context/ContextKey.d.ts'
import type { BlockEntity } from '../../../../../../net/minecraft/world/level/block/entity/BlockEntity.d.ts'
import type { LootContext } from '../../../../../../net/minecraft/world/level/storage/loot/LootContext.d.ts'
import type { LootContextArg } from '../../../../../../net/minecraft/world/level/storage/loot/LootContextArg.d.ts'
import type { LootContextArg$SimpleGetter } from '../../../../../../net/minecraft/world/level/storage/loot/LootContextArg$SimpleGetter.d.ts'
export class LootContext$BlockEntityTarget extends Enum<LootContext$BlockEntityTarget> implements StringRepresentable, LootContextArg$SimpleGetter<BlockEntity> {
    static BLOCK_ENTITY: LootContext$BlockEntityTarget;
    static ENTITY_OR_BLOCK: Codec<LootContextArg<Object>>;
    static PRE_BUILT_MAP_THRESHOLD: number;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): LootContext$BlockEntityTarget;
    static values(): LootContext$BlockEntityTarget[];
    private constructor(name: string, param: ContextKey<BlockEntity>)
    // private name: string;
    // private param: ContextKey<BlockEntity>;
    contextParam(): ContextKey<BlockEntity>;
    get(context: LootContext): BlockEntity;
    getSerializedName(): string;
    name(): "BLOCK_ENTITY";
}