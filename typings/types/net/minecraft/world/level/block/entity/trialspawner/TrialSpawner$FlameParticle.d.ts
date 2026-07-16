import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
import type { SimpleParticleType } from '../../../../../../../net/minecraft/core/particles/SimpleParticleType.d.ts'
export class TrialSpawner$FlameParticle extends Enum<TrialSpawner$FlameParticle> {
    static NORMAL: TrialSpawner$FlameParticle;
    static OMINOUS: TrialSpawner$FlameParticle;
    static decode(paramdata: number): TrialSpawner$FlameParticle;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): TrialSpawner$FlameParticle;
    static values(): TrialSpawner$FlameParticle[];
    private constructor(particleType: SimpleParticleType)
    particleType: SimpleParticleType;
    encode(): number;
    name(): "NORMAL" | "OMINOUS";
}