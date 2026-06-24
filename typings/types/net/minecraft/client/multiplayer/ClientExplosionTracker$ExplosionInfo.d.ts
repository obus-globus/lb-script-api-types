import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ExplosionParticleInfo } from '../../../../net/minecraft/core/particles/ExplosionParticleInfo.d.ts'
import type { WeightedList } from '../../../../net/minecraft/util/random/WeightedList.d.ts'
import type { Vec3 } from '../../../../net/minecraft/world/phys/Vec3.d.ts'
export class ClientExplosionTracker$ExplosionInfo extends Record {
    private constructor(center: Vec3, radius: number, blockCount: number, blockParticles: WeightedList<ExplosionParticleInfo>)
    // private blockCount: number;
    // private blockParticles: WeightedList<ExplosionParticleInfo>;
    // private center: Vec3;
    // private radius: number;
    blockCount(): number;
    blockParticles(): WeightedList<ExplosionParticleInfo>;
    center(): Vec3;
    equals(o: Object | null): boolean;
    hashCode(): number;
    radius(): number;
    toString(): string;
}