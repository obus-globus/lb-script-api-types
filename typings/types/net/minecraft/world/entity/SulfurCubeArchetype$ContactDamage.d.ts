import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../net/minecraft/core/Holder.d.ts'
import type { FloatProvider } from '../../../../net/minecraft/util/valueproviders/FloatProvider.d.ts'
import type { DamageType } from '../../../../net/minecraft/world/damagesource/DamageType.d.ts'
export class SulfurCubeArchetype$ContactDamage extends Record {
    static CODEC: Codec<SulfurCubeArchetype$ContactDamage>;
    constructor(damageType: Holder<DamageType>, amount: FloatProvider, attributeToSource: boolean)
    // private amount: FloatProvider;
    // private attributeToSource: boolean;
    // private damageType: Holder<DamageType>;
    amount(): FloatProvider;
    attributeToSource(): boolean;
    damageType(): Holder<DamageType>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}