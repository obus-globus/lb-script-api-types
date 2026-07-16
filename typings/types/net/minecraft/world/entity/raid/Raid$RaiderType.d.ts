import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
import type { EntityType } from '../../../../../net/minecraft/world/entity/EntityType.d.ts'
import type { Raider } from '../../../../../net/minecraft/world/entity/raid/Raider.d.ts'
export class Raid$RaiderType extends Enum<Raid$RaiderType> {
    static EVOKER: Raid$RaiderType;
    static PILLAGER: Raid$RaiderType;
    static RAVAGER: Raid$RaiderType;
    static VINDICATOR: Raid$RaiderType;
    static WITCH: Raid$RaiderType;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): Raid$RaiderType;
    static values(): Raid$RaiderType[];
    private constructor(entityType: EntityType<Raider>, spawnsPerWaveBeforeBonus: number[])
    // private entityType: EntityType<Raider>;
    // private spawnsPerWaveBeforeBonus: number[];
    name(): "VINDICATOR" | "EVOKER" | "PILLAGER" | "WITCH" | "RAVAGER";
}