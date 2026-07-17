import type { Codec } from '../../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
import type { StringRepresentable } from '../../../../../../../net/minecraft/util/StringRepresentable.d.ts'
export class OceanRuinStructure$Type extends Enum<OceanRuinStructure$Type> implements StringRepresentable {
    static CODEC: Codec<OceanRuinStructure$Type>;
    static COLD: OceanRuinStructure$Type;
    static LEGACY_CODEC: Codec<OceanRuinStructure$Type>;
    static PRE_BUILT_MAP_THRESHOLD: number;
    static WARM: OceanRuinStructure$Type;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): OceanRuinStructure$Type;
    static values(): OceanRuinStructure$Type[];
    private constructor(name: string)
    getName(): string;
    getSerializedName(): string;
    name(): "WARM" | "COLD";
}