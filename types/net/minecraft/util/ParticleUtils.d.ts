import type { Supplier } from '../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../net/minecraft/core/BlockPos.d.ts'
import type { Direction } from '../../../net/minecraft/core/Direction.d.ts'
import type { Direction$Axis } from '../../../net/minecraft/core/Direction$Axis.d.ts'
import type { ParticleOptions } from '../../../net/minecraft/core/particles/ParticleOptions.d.ts'
import type { RandomSource } from '../../../net/minecraft/util/RandomSource.d.ts'
import type { IntProvider } from '../../../net/minecraft/util/valueproviders/IntProvider.d.ts'
import type { UniformInt } from '../../../net/minecraft/util/valueproviders/UniformInt.d.ts'
import type { Level } from '../../../net/minecraft/world/level/Level.d.ts'
import type { LevelAccessor } from '../../../net/minecraft/world/level/LevelAccessor.d.ts'
import type { Vec3 } from '../../../net/minecraft/world/phys/Vec3.d.ts'
export class ParticleUtils extends Object {
    static spawnParticleBelow(paramlevel: Level, parampos: BlockPos, paramrandom: RandomSource, paramparticle: ParticleOptions): void;
    static spawnParticleInBlock(paramlevel: LevelAccessor, parampos: BlockPos, paramcount: number, paramparticle: ParticleOptions): void;
    static spawnParticleOnFace(paramlevel: Level, parampos: BlockPos, paramface: Direction, paramparticle: ParticleOptions, paramspeed: Vec3, paramstepFactor: number): void;
    static spawnParticles(paramlevel: LevelAccessor, parampos: BlockPos, paramcount: number, paramspreadWidth: number, paramspreadHeight: number, paramallowFloatingParticles: boolean, paramparticle: ParticleOptions): void;
    static spawnParticlesAlongAxis(paramattachedAxis: Direction$Axis, paramlevel: Level, parampos: BlockPos, paramradius: number, paramparticle: ParticleOptions, paramsparkCount: UniformInt): void;
    static spawnParticlesOnBlockFace(paramlevel: Level, parampos: BlockPos, paramparticle: ParticleOptions, paramparticlesPerFaceRange: IntProvider, paramface: Direction, paramspeedSupplier: () => Vec3, paramstepFactor: number): void;
    static spawnParticlesOnBlockFaces(paramlevel: Level, parampos: BlockPos, paramparticle: ParticleOptions, paramparticlesPerFaceRange: IntProvider): void;
    static spawnSmashAttackParticles(paramlevel: LevelAccessor, parampos: BlockPos, paramcount: number): void;
    constructor()
}