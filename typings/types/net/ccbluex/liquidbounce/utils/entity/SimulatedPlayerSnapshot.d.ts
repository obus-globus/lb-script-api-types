import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { SimulatedPlayer } from '../../../../../net/ccbluex/liquidbounce/utils/entity/SimulatedPlayer.d.ts'
import type { Vec3 } from '../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class SimulatedPlayerSnapshot extends Object {
    constructor(s: SimulatedPlayer)
    constructor(pos: Vec3, fallDistance: number, velocity: Vec3, onGround: boolean, clipLedged: boolean)
    readonly clipLedged: boolean;
    readonly fallDistance: number;
    readonly onGround: boolean;
    readonly pos: Vec3;
    readonly velocity: Vec3;
    component1(): Vec3;
    component2(): number;
    component3(): Vec3;
    component4(): boolean;
    component5(): boolean;
    copy(pos: Vec3, fallDistance: number, velocity: Vec3, onGround: boolean, clipLedged: boolean): SimulatedPlayerSnapshot;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}