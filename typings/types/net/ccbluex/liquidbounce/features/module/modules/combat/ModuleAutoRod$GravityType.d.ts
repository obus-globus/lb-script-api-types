import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
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
    static makeLookupTable(paramarg0: (Tagged | null)[]): { [key: string]: Tagged | null };
    static of(paramarg0: string): Tagged;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ModuleAutoRod$GravityType;
    static values(): (Object | null)[];
    private constructor(tag: string)
    readonly tag: string;
    apply(target: LivingEntity): Rotation | null;
    name(): "LINEAR" | "PROJECTILE";
}