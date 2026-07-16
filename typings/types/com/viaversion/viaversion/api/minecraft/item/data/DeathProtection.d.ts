import type { Consumable1_21_2$ConsumeEffect } from '../../../../../../../com/viaversion/viaversion/api/minecraft/item/data/Consumable1_21_2$ConsumeEffect.d.ts'
import type { Type } from '../../../../../../../com/viaversion/viaversion/api/type/Type.d.ts'
import type { Copyable } from '../../../../../../../com/viaversion/viaversion/util/Copyable.d.ts'
import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class DeathProtection extends Record implements Copyable {
    static TYPE: Type<DeathProtection>;
    static copy<T extends unknown>(paramarg0: T): T;
    constructor(deathEffects: Consumable1_21_2$ConsumeEffect<Object>[])
    // private deathEffects: Consumable1_21_2$ConsumeEffect<Object>[];
    copy(): DeathProtection;
    deathEffects(): Consumable1_21_2$ConsumeEffect<Object>[];
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}