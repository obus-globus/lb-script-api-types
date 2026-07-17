import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
import type { StringRepresentable } from '../../../../net/minecraft/util/StringRepresentable.d.ts'
import type { CardinalLighting } from '../../../../net/minecraft/world/level/CardinalLighting.d.ts'
export class CardinalLighting$Type extends Enum<CardinalLighting$Type> implements StringRepresentable {
    static CODEC: Codec<CardinalLighting$Type>;
    static DEFAULT: CardinalLighting$Type;
    static NETHER: CardinalLighting$Type;
    static PRE_BUILT_MAP_THRESHOLD: number;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): CardinalLighting$Type;
    static values(): CardinalLighting$Type[];
    private constructor(name: string, lighting: CardinalLighting)
    // private lighting: CardinalLighting;
    // private name: string;
    get(): CardinalLighting;
    getSerializedName(): string;
    name(): "DEFAULT" | "NETHER";
}