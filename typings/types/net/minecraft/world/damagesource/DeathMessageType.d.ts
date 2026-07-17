import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
import type { StringRepresentable } from '../../../../net/minecraft/util/StringRepresentable.d.ts'
export class DeathMessageType extends Enum<DeathMessageType> implements StringRepresentable {
    static CODEC: Codec<DeathMessageType>;
    static DEFAULT: DeathMessageType;
    static FALL_VARIANTS: DeathMessageType;
    static INTENTIONAL_GAME_DESIGN: DeathMessageType;
    static PRE_BUILT_MAP_THRESHOLD: number;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): DeathMessageType;
    static values(): DeathMessageType[];
    private constructor(id: string)
    // private id: string;
    getSerializedName(): string;
    name(): "DEFAULT" | "FALL_VARIANTS" | "INTENTIONAL_GAME_DESIGN";
}