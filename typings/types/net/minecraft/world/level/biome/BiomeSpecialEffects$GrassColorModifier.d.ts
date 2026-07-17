import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
import type { StringRepresentable } from '../../../../../net/minecraft/util/StringRepresentable.d.ts'
export class BiomeSpecialEffects$GrassColorModifier extends Enum<BiomeSpecialEffects$GrassColorModifier> implements StringRepresentable {
    static CODEC: Codec<BiomeSpecialEffects$GrassColorModifier>;
    static DARK_FOREST: BiomeSpecialEffects$GrassColorModifier;
    static NONE: BiomeSpecialEffects$GrassColorModifier;
    static PRE_BUILT_MAP_THRESHOLD: number;
    static SWAMP: BiomeSpecialEffects$GrassColorModifier;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): BiomeSpecialEffects$GrassColorModifier;
    static values(): BiomeSpecialEffects$GrassColorModifier[];
    private constructor(name: string)
    getName(): string;
    getSerializedName(): string;
    modifyColor(x: number, z: number, baseColor: number): number;
    name(): "NONE" | "DARK_FOREST" | "SWAMP";
}