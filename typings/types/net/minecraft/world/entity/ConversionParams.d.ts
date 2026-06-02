import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ConversionType } from '../../../../net/minecraft/world/entity/ConversionType.d.ts'
import type { Mob } from '../../../../net/minecraft/world/entity/Mob.d.ts'
import type { PlayerTeam } from '../../../../net/minecraft/world/scores/PlayerTeam.d.ts'
export class ConversionParams extends Record {
    static single(parammob: Mob, paramkeepEquipment: boolean, parampreserveCanPickUpLoot: boolean): ConversionParams;
    // private keepEquipment: boolean;
    // private preserveCanPickUpLoot: boolean;
    // private team: PlayerTeam;
    // private type: ConversionType;
    equals(o: Object | null): boolean;
    hashCode(): number;
    keepEquipment(): boolean;
    preserveCanPickUpLoot(): boolean;
    team(): PlayerTeam;
    toString(): string;
    type(): ConversionType;
}