import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
import type { StringRepresentable } from '../../../../../net/minecraft/util/StringRepresentable.d.ts'
export class EnchantmentTarget extends Enum<EnchantmentTarget> implements StringRepresentable {
    static ATTACKER: EnchantmentTarget;
    static CODEC: Codec<EnchantmentTarget>;
    static DAMAGING_ENTITY: EnchantmentTarget;
    static NON_DAMAGE_CODEC: Codec<EnchantmentTarget>;
    static PRE_BUILT_MAP_THRESHOLD: number;
    static VICTIM: EnchantmentTarget;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): EnchantmentTarget;
    static values(): EnchantmentTarget[];
    private constructor(id: string)
    // private id: string;
    getSerializedName(): string;
    name(): "ATTACKER" | "DAMAGING_ENTITY" | "VICTIM";
}