import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
import type { StringRepresentable } from '../../../../../net/minecraft/util/StringRepresentable.d.ts'
export class DimensionType$Skybox extends Enum<DimensionType$Skybox> implements StringRepresentable {
    static CODEC: Codec<DimensionType$Skybox>;
    static END: DimensionType$Skybox;
    static NONE: DimensionType$Skybox;
    static OVERWORLD: DimensionType$Skybox;
    static PRE_BUILT_MAP_THRESHOLD: number;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): DimensionType$Skybox;
    static values(): DimensionType$Skybox[];
    private constructor(name: string)
    // private name: string;
    getSerializedName(): string;
    name(): "NONE" | "OVERWORLD" | "END";
}