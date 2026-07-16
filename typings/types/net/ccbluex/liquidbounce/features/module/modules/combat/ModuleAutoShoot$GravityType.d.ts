import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { ModuleAutoShoot$GravityType$Companion } from '../../../../../../../net/ccbluex/liquidbounce/features/module/modules/combat/ModuleAutoShoot$GravityType$Companion.d.ts'
import type { Rotation } from '../../../../../../../net/ccbluex/liquidbounce/utils/aiming/data/Rotation.d.ts'
import type { HotbarItemSlot } from '../../../../../../../net/ccbluex/liquidbounce/utils/inventory/HotbarItemSlot.d.ts'
import type { LivingEntity } from '../../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { Item } from '../../../../../../../net/minecraft/world/item/Item.d.ts'
export class ModuleAutoShoot$GravityType extends Enum<ModuleAutoShoot$GravityType> implements Tagged {
    static AUTO: ModuleAutoShoot$GravityType;
    static Companion: ModuleAutoShoot$GravityType$Companion;
    static LINEAR: ModuleAutoShoot$GravityType;
    static PROJECTILE: ModuleAutoShoot$GravityType;
    static from(paramarg0: HotbarItemSlot): ModuleAutoShoot$GravityType;
    static from(paramarg0: Item): ModuleAutoShoot$GravityType;
    static getEntries(): ModuleAutoShoot$GravityType[];
    static makeLookupTable(paramarg0: (Tagged | null)[]): { [key: string]: Tagged | null };
    static of(paramarg0: string): Tagged;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ModuleAutoShoot$GravityType;
    static values(): ModuleAutoShoot$GravityType[];
    private constructor(tag: string)
    readonly tag: string;
    rotationFor(target: LivingEntity): Rotation | null;
    name(): "AUTO" | "LINEAR" | "PROJECTILE";
}