import type { Codec } from '../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
import type { RandomSource } from '../../../../../../net/minecraft/util/RandomSource.d.ts'
import type { StringRepresentable } from '../../../../../../net/minecraft/util/StringRepresentable.d.ts'
import type { SpawnParticlesEffect$PositionSourceType$CoordinateSource } from '../../../../../../net/minecraft/world/item/enchantment/effects/SpawnParticlesEffect$PositionSourceType$CoordinateSource.d.ts'
export class SpawnParticlesEffect$PositionSourceType extends Enum<SpawnParticlesEffect$PositionSourceType> implements StringRepresentable {
    static BOUNDING_BOX: SpawnParticlesEffect$PositionSourceType;
    static CODEC: Codec<SpawnParticlesEffect$PositionSourceType>;
    static ENTITY_POSITION: SpawnParticlesEffect$PositionSourceType;
    static PRE_BUILT_MAP_THRESHOLD: number;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): SpawnParticlesEffect$PositionSourceType;
    static values(): SpawnParticlesEffect$PositionSourceType[];
    private constructor(id: string, source: (param0: number, param1: number, param2: number, param3: RandomSource) => number)
    // private id: string;
    // private source: (param0: number, param1: number, param2: number, param3: RandomSource) => number;
    getCoordinate(position: number, center: number, boundingBoxSpan: number, random: RandomSource): number;
    getSerializedName(): string;
    name(): "ENTITY_POSITION" | "BOUNDING_BOX";
}