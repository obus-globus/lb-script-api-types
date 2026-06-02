import type { Particle } from '../../../../../com/viaversion/viaversion/api/minecraft/Particle.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BedrockMappingData$LevelEventMapping } from '../../../../../net/raphimc/viabedrock/protocol/data/BedrockMappingData$LevelEventMapping.d.ts'
export class BedrockMappingData$JavaParticle extends Record implements BedrockMappingData$LevelEventMapping {
    // private count: number;
    // private offsetX: number;
    // private offsetY: number;
    // private offsetZ: number;
    // private particle: Particle;
    // private speed: number;
    count(): number;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    offsetX(): number;
    offsetY(): number;
    offsetZ(): number;
    particle(): Particle;
    speed(): number;
    toString(): string;
    withCount(arg0: number): BedrockMappingData$JavaParticle;
    withParticle(arg0: Particle): BedrockMappingData$JavaParticle;
}