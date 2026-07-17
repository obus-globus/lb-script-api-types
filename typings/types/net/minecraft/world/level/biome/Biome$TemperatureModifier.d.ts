import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
import type { BlockPos } from '../../../../../net/minecraft/core/BlockPos.d.ts'
import type { StringRepresentable } from '../../../../../net/minecraft/util/StringRepresentable.d.ts'
export class Biome$TemperatureModifier extends Enum<Biome$TemperatureModifier> implements StringRepresentable {
    static CODEC: Codec<Biome$TemperatureModifier>;
    static FROZEN: Biome$TemperatureModifier;
    static NONE: Biome$TemperatureModifier;
    static PRE_BUILT_MAP_THRESHOLD: number;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): Biome$TemperatureModifier;
    static values(): Biome$TemperatureModifier[];
    private constructor(name: string)
    getName(): string;
    getSerializedName(): string;
    modifyTemperature(pos: BlockPos, baseTemperature: number): number;
    name(): "NONE" | "FROZEN";
}