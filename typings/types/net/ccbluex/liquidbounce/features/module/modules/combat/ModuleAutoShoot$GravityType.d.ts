import type { Class } from '../../../../../../../java/lang/Class.d.ts'
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
    static from(slot: HotbarItemSlot): ModuleAutoShoot$GravityType;
    static from(item: Item): ModuleAutoShoot$GravityType;
    static getEntries(): ModuleAutoShoot$GravityType[];
    static makeLookupTable<T extends Tagged>(self: T[]): { [key: string]: T };
    static of(self: string): Tagged;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): ModuleAutoShoot$GravityType;
    static values(): ModuleAutoShoot$GravityType[];
    private constructor(tag: string)
    readonly tag: string;
    rotationFor(target: LivingEntity): Rotation | null;
    name(): "AUTO" | "LINEAR" | "PROJECTILE";
}