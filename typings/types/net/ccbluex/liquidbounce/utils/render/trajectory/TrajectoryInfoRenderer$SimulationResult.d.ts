import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { HitResult } from '../../../../../../net/minecraft/world/phys/HitResult.d.ts'
import type { Vec3 } from '../../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class TrajectoryInfoRenderer$SimulationResult extends Record {
    constructor(hitResult: HitResult | null, positions: Vec3[])
    // private hitResult: HitResult | null;
    /*not mapped: */ hitResult(): HitResult | null;
    // private positions: Vec3[];
    /*not mapped: */ positions(): Vec3[];
    component1(): HitResult | null;
    component2(): Vec3[];
    copy(hitResult: HitResult | null, positions: Vec3[]): TrajectoryInfoRenderer$SimulationResult;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}