import type { Particle } from '../../../../../../com/viaversion/viaversion/api/minecraft/Particle.d.ts'
import type { ParticleIdMappings1_13$ParticleDataHandler } from '../../../../../../com/viaversion/viaversion/protocols/v1_12_2to1_13/data/ParticleIdMappings1_13$ParticleDataHandler.d.ts'
import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class ParticleIdMappings1_13$NewParticle extends Record {
    // private handler: (param0: Particle, param1: (Object | null)[]) => com.viaversion.viaversion.api.minecraft.Particle;
    // private id: number;
    equals(arg0: Object | null): boolean;
    handle(arg0: Particle, arg1: number[]): Particle;
    handler(): (param0: Particle, param1: (Object | null)[]) => com.viaversion.viaversion.api.minecraft.Particle;
    hashCode(): number;
    id(): number;
    toString(): string;
}