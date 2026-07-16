import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
import type { Entity } from '../../../../net/minecraft/world/entity/Entity.d.ts'
export class InsideBlockEffectType extends Enum<InsideBlockEffectType> {
    static CLEAR_FREEZE: InsideBlockEffectType;
    static EXTINGUISH: InsideBlockEffectType;
    static FIRE_IGNITE: InsideBlockEffectType;
    static FREEZE: InsideBlockEffectType;
    static LAVA_IGNITE: InsideBlockEffectType;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): InsideBlockEffectType;
    static values(): InsideBlockEffectType[];
    private constructor(effect: (param0: Entity) => void)
    // private effect: (param0: Entity) => void;
    effect(): (param0: Entity) => void;
    name(): "FREEZE" | "CLEAR_FREEZE" | "FIRE_IGNITE" | "LAVA_IGNITE" | "EXTINGUISH";
}