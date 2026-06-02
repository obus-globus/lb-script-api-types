import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { PlayerSimulation } from '../../../../../net/ccbluex/liquidbounce/utils/entity/PlayerSimulation.d.ts'
import type { Vec3 } from '../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class PlayerSimulation$Rigid extends Object implements PlayerSimulation {
    constructor(pos: Vec3)
    readonly pos: Vec3;
    component1(): Vec3;
    copy(pos: Vec3): PlayerSimulation$Rigid;
    equals(other: Object | null): boolean;
    hashCode(): number;
    tick(): void;
    toString(): string;
}