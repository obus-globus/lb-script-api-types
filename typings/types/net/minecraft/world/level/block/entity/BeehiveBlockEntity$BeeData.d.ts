import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { BeehiveBlockEntity$Occupant } from '../../../../../../net/minecraft/world/level/block/entity/BeehiveBlockEntity$Occupant.d.ts'
export class BeehiveBlockEntity$BeeData extends Object {
    private constructor(occupant: BeehiveBlockEntity$Occupant)
    // private occupant: BeehiveBlockEntity$Occupant;
    // private ticksInHive: number;
    hasNectar(): boolean;
    tick(): boolean;
    toOccupant(): BeehiveBlockEntity$Occupant;
}