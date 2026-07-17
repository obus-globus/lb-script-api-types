import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
import type { StringRepresentable } from '../../../../../net/minecraft/util/StringRepresentable.d.ts'
export class EndCubeSpecialRenderer$Type extends Enum<EndCubeSpecialRenderer$Type> implements StringRepresentable {
    static CODEC: Codec<EndCubeSpecialRenderer$Type>;
    static GATEWAY: EndCubeSpecialRenderer$Type;
    static PORTAL: EndCubeSpecialRenderer$Type;
    static PRE_BUILT_MAP_THRESHOLD: number;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): EndCubeSpecialRenderer$Type;
    static values(): EndCubeSpecialRenderer$Type[];
    private constructor(name: string)
    // private name: string;
    getSerializedName(): string;
    name(): "PORTAL" | "GATEWAY";
}