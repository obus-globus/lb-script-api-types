import type { Codec } from '../../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
import type { ClientLevel } from '../../../../../../../net/minecraft/client/multiplayer/ClientLevel.d.ts'
import type { RandomSource } from '../../../../../../../net/minecraft/util/RandomSource.d.ts'
import type { StringRepresentable } from '../../../../../../../net/minecraft/util/StringRepresentable.d.ts'
import type { ItemOwner } from '../../../../../../../net/minecraft/world/entity/ItemOwner.d.ts'
import type { ItemStack } from '../../../../../../../net/minecraft/world/item/ItemStack.d.ts'
export class Time$TimeSource extends Enum<Time$TimeSource> implements StringRepresentable {
    static CODEC: Codec<Time$TimeSource>;
    static DAYTIME: Time$TimeSource;
    static MOON_PHASE: Time$TimeSource;
    static PRE_BUILT_MAP_THRESHOLD: number;
    static RANDOM: Time$TimeSource;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): Time$TimeSource;
    static values(): Time$TimeSource[];
    private constructor(name: string)
    // private name: string;
    get(level: ClientLevel, itemStack: ItemStack, owner: ItemOwner, random: RandomSource): number;
    getSerializedName(): string;
    name(): "RANDOM" | "DAYTIME" | "MOON_PHASE";
}