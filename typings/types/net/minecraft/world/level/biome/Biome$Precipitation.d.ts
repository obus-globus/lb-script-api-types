import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
import type { StringRepresentable } from '../../../../../net/minecraft/util/StringRepresentable.d.ts'
export class Biome$Precipitation extends Enum<Biome$Precipitation> implements StringRepresentable {
    static CODEC: Codec<Biome$Precipitation>;
    static NONE: Biome$Precipitation;
    static PRE_BUILT_MAP_THRESHOLD: number;
    static RAIN: Biome$Precipitation;
    static SNOW: Biome$Precipitation;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): Biome$Precipitation;
    static values(): Biome$Precipitation[];
    private constructor(name: string)
    // private name: string;
    getSerializedName(): string;
    name(): "NONE" | "RAIN" | "SNOW";
}