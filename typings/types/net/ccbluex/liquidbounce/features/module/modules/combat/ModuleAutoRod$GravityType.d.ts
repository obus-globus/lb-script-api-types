import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { Rotation } from '../../../../../../../net/ccbluex/liquidbounce/utils/aiming/data/Rotation.d.ts'
import type { LivingEntity } from '../../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
export class ModuleAutoRod$GravityType extends Enum<ModuleAutoRod$GravityType> implements Tagged {
    static Companion: Tagged$Companion;
    static LINEAR: ModuleAutoRod$GravityType;
    static PROJECTILE: ModuleAutoRod$GravityType;
    static getEntries(): ModuleAutoRod$GravityType[];
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): ModuleAutoRod$GravityType;
    static values(): ModuleAutoRod$GravityType[];
    private constructor(tag: string)
    readonly tag: string;
    apply(target: LivingEntity): Rotation | null;
    name(): "LINEAR" | "PROJECTILE";
}