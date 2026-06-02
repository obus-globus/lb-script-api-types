import type { Codec } from '../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Keyable } from '../../../../../../com/mojang/serialization/Keyable.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Function } from '../../../../../../java/util/function/Function.d.ts'
import type { Supplier } from '../../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
import type { StringRepresentable } from '../../../../../../net/minecraft/util/StringRepresentable.d.ts'
import type { StringRepresentable$EnumCodec } from '../../../../../../net/minecraft/util/StringRepresentable$EnumCodec.d.ts'
import type { ContextKey } from '../../../../../../net/minecraft/util/context/ContextKey.d.ts'
import type { BlockEntity } from '../../../../../../net/minecraft/world/level/block/entity/BlockEntity.d.ts'
import type { LootContext } from '../../../../../../net/minecraft/world/level/storage/loot/LootContext.d.ts'
import type { LootContextArg$SimpleGetter } from '../../../../../../net/minecraft/world/level/storage/loot/LootContextArg$SimpleGetter.d.ts'
export class LootContext$BlockEntityTarget extends Enum<LootContext$BlockEntityTarget> implements StringRepresentable, LootContextArg$SimpleGetter<BlockEntity> {
    static BLOCK_ENTITY: LootContext$BlockEntityTarget;
    static ENTITY_OR_BLOCK: Codec<Object>;
    static PRE_BUILT_MAP_THRESHOLD: number;
    static createNameLookup(paramvalueArray: Object | null): (param0: string) => Object | null;
    static createNameLookup(paramvalueArray: Object | null, paramconverter: (param0: Object | null) => string): (param0: string) => Object | null;
    static fromEnum(paramvalues: () => Object | null): StringRepresentable$EnumCodec<Object>;
    static fromEnumWithMapping(paramvalues: () => Object | null, paramconverter: (param0: string) => string): StringRepresentable$EnumCodec<Object>;
    static fromValues(paramvalues: () => Object | null): Codec<Object>;
    static keys(paramvalues: (Object | null)[]): Keyable;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): LootContext$BlockEntityTarget;
    static values(): (Object | null)[];
    private constructor(name: string, param: ContextKey<BlockEntity>)
    // private name: string;
    // private param: ContextKey<BlockEntity>;
    contextParam(): ContextKey<BlockEntity>;
    get<T extends Object | number | string | boolean>(context: LootContext): T;
    getSerializedName(): string;
    name(): "BLOCK_ENTITY";
}