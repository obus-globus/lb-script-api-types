import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
import type { StringRepresentable } from '../../../../net/minecraft/util/StringRepresentable.d.ts'
export class DamageScaling extends Enum<DamageScaling> implements StringRepresentable {
    static ALWAYS: DamageScaling;
    static CODEC: Codec<DamageScaling>;
    static NEVER: DamageScaling;
    static PRE_BUILT_MAP_THRESHOLD: number;
    static WHEN_CAUSED_BY_LIVING_NON_PLAYER: DamageScaling;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): DamageScaling;
    static values(): DamageScaling[];
    private constructor(id: string)
    // private id: string;
    getSerializedName(): string;
    name(): "NEVER" | "WHEN_CAUSED_BY_LIVING_NON_PLAYER" | "ALWAYS";
}