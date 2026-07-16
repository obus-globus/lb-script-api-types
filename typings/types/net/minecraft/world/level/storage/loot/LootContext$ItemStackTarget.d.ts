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
import type { ItemInstance } from '../../../../../../net/minecraft/world/item/ItemInstance.d.ts'
import type { LootContext } from '../../../../../../net/minecraft/world/level/storage/loot/LootContext.d.ts'
import type { LootContextArg } from '../../../../../../net/minecraft/world/level/storage/loot/LootContextArg.d.ts'
import type { LootContextArg$SimpleGetter } from '../../../../../../net/minecraft/world/level/storage/loot/LootContextArg$SimpleGetter.d.ts'
export class LootContext$ItemStackTarget extends Enum<LootContext$ItemStackTarget> implements StringRepresentable, LootContextArg$SimpleGetter<ItemInstance> {
    static ENTITY_OR_BLOCK: Codec<LootContextArg<Object>>;
    static PRE_BUILT_MAP_THRESHOLD: number;
    static TOOL: LootContext$ItemStackTarget;
    static createNameLookup<T extends StringRepresentable>(paramvalueArray: T[]): (param0: string) => T;
    static createNameLookup<T extends unknown>(paramvalueArray: T[], paramconverter: (param0: T) => string): (param0: string) => T;
    static fromEnum<E extends Enum<E> & StringRepresentable>(paramvalues: () => E[]): StringRepresentable$EnumCodec<E>;
    static fromEnumWithMapping<E extends Enum<E> & StringRepresentable>(paramvalues: () => E[], paramconverter: (param0: string) => string): StringRepresentable$EnumCodec<E>;
    static fromValues<T extends StringRepresentable>(paramvalues: () => T[]): Codec<T>;
    static keys(paramvalues: StringRepresentable[]): Keyable;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): LootContext$ItemStackTarget;
    static values(): LootContext$ItemStackTarget[];
    private constructor(name: string, param: ContextKey<ItemInstance>)
    // private name: string;
    // private param: ContextKey<ItemInstance>;
    contextParam(): ContextKey<ItemInstance>;
    get(context: LootContext): ItemInstance;
    getSerializedName(): string;
    name(): "TOOL";
}