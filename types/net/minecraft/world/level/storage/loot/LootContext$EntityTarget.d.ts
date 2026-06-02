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
import type { Entity } from '../../../../../../net/minecraft/world/entity/Entity.d.ts'
import type { LootContext } from '../../../../../../net/minecraft/world/level/storage/loot/LootContext.d.ts'
import type { LootContextArg$SimpleGetter } from '../../../../../../net/minecraft/world/level/storage/loot/LootContextArg$SimpleGetter.d.ts'
export class LootContext$EntityTarget extends Enum<LootContext$EntityTarget> implements StringRepresentable, LootContextArg$SimpleGetter<Entity> {
    static ATTACKER: LootContext$EntityTarget;
    static ATTACKING_PLAYER: LootContext$EntityTarget;
    static CODEC: StringRepresentable$EnumCodec<LootContext$EntityTarget>;
    static DIRECT_ATTACKER: LootContext$EntityTarget;
    static ENTITY_OR_BLOCK: Codec<Object>;
    static INTERACTING_ENTITY: LootContext$EntityTarget;
    static PRE_BUILT_MAP_THRESHOLD: number;
    static TARGET_ENTITY: LootContext$EntityTarget;
    static THIS: LootContext$EntityTarget;
    static createNameLookup(paramvalueArray: Object | null): (param0: string) => Object | null;
    static createNameLookup(paramvalueArray: Object | null, paramconverter: (param0: Object | null) => string): (param0: string) => Object | null;
    static fromEnum(paramvalues: () => Object | null): StringRepresentable$EnumCodec<Object>;
    static fromEnumWithMapping(paramvalues: () => Object | null, paramconverter: (param0: string) => string): StringRepresentable$EnumCodec<Object>;
    static fromValues(paramvalues: () => Object | null): Codec<Object>;
    static getByName(paramname: string): LootContext$EntityTarget;
    static keys(paramvalues: (Object | null)[]): Keyable;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): LootContext$EntityTarget;
    static values(): (Object | null)[];
    private constructor(name: string, param: ContextKey<Entity>)
    // private name: string;
    // private param: ContextKey<Entity>;
    contextParam(): ContextKey<Entity>;
    get<T extends Object | number | string | boolean>(context: LootContext): T;
    getSerializedName(): string;
    name(): "THIS" | "ATTACKER" | "DIRECT_ATTACKER" | "ATTACKING_PLAYER" | "TARGET_ENTITY" | "INTERACTING_ENTITY";
}