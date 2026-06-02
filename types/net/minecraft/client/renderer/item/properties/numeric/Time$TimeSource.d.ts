import type { Codec } from '../../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Keyable } from '../../../../../../../com/mojang/serialization/Keyable.d.ts'
import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Function } from '../../../../../../../java/util/function/Function.d.ts'
import type { Supplier } from '../../../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
import type { ClientLevel } from '../../../../../../../net/minecraft/client/multiplayer/ClientLevel.d.ts'
import type { RandomSource } from '../../../../../../../net/minecraft/util/RandomSource.d.ts'
import type { StringRepresentable } from '../../../../../../../net/minecraft/util/StringRepresentable.d.ts'
import type { StringRepresentable$EnumCodec } from '../../../../../../../net/minecraft/util/StringRepresentable$EnumCodec.d.ts'
import type { ItemOwner } from '../../../../../../../net/minecraft/world/entity/ItemOwner.d.ts'
import type { ItemStack } from '../../../../../../../net/minecraft/world/item/ItemStack.d.ts'
export class Time$TimeSource extends Enum<Time$TimeSource> implements StringRepresentable {
    static CODEC: Codec<Time$TimeSource>;
    static DAYTIME: Time$TimeSource;
    static MOON_PHASE: Time$TimeSource;
    static PRE_BUILT_MAP_THRESHOLD: number;
    static RANDOM: Time$TimeSource;
    static createNameLookup(paramvalueArray: Object | null): (param0: string) => Object | null;
    static createNameLookup(paramvalueArray: Object | null, paramconverter: (param0: Object | null) => string): (param0: string) => Object | null;
    static fromEnum(paramvalues: () => Object | null): StringRepresentable$EnumCodec<Object>;
    static fromEnumWithMapping(paramvalues: () => Object | null, paramconverter: (param0: string) => string): StringRepresentable$EnumCodec<Object>;
    static fromValues(paramvalues: () => Object | null): Codec<Object>;
    static keys(paramvalues: (Object | null)[]): Keyable;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): Time$TimeSource;
    static values(): (Object | null)[];
    private constructor(name: string)
    // private name: string;
    get(level: ClientLevel, itemStack: ItemStack, owner: ItemOwner, random: RandomSource): number;
    getSerializedName(): string;
    name(): "RANDOM" | "DAYTIME" | "MOON_PHASE";
}