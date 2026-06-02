import type { Codec } from '../../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Keyable } from '../../../../../../../com/mojang/serialization/Keyable.d.ts'
import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Function } from '../../../../../../../java/util/function/Function.d.ts'
import type { Supplier } from '../../../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
import type { BlockPos } from '../../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { ServerLevel } from '../../../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { StringRepresentable } from '../../../../../../../net/minecraft/util/StringRepresentable.d.ts'
import type { StringRepresentable$EnumCodec } from '../../../../../../../net/minecraft/util/StringRepresentable$EnumCodec.d.ts'
import type { Level } from '../../../../../../../net/minecraft/world/level/Level.d.ts'
import type { TrialSpawner } from '../../../../../../../net/minecraft/world/level/block/entity/trialspawner/TrialSpawner.d.ts'
import type { TrialSpawnerState$ParticleEmission } from '../../../../../../../net/minecraft/world/level/block/entity/trialspawner/TrialSpawnerState$ParticleEmission.d.ts'
import type { TrialSpawnerStateData } from '../../../../../../../net/minecraft/world/level/block/entity/trialspawner/TrialSpawnerStateData.d.ts'
export class TrialSpawnerState extends Enum<TrialSpawnerState> implements StringRepresentable {
    static ACTIVE: TrialSpawnerState;
    static COOLDOWN: TrialSpawnerState;
    static EJECTING_REWARD: TrialSpawnerState;
    static INACTIVE: TrialSpawnerState;
    static PRE_BUILT_MAP_THRESHOLD: number;
    static WAITING_FOR_PLAYERS: TrialSpawnerState;
    static WAITING_FOR_REWARD_EJECTION: TrialSpawnerState;
    static createNameLookup(paramvalueArray: Object | null): (param0: string) => Object | null;
    static createNameLookup(paramvalueArray: Object | null, paramconverter: (param0: Object | null) => string): (param0: string) => Object | null;
    static fromEnum(paramvalues: () => Object | null): StringRepresentable$EnumCodec<Object>;
    static fromEnumWithMapping(paramvalues: () => Object | null, paramconverter: (param0: string) => string): StringRepresentable$EnumCodec<Object>;
    static fromValues(paramvalues: () => Object | null): Codec<Object>;
    static keys(paramvalues: (Object | null)[]): Keyable;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): TrialSpawnerState;
    static values(): (Object | null)[];
    private constructor(name: string, lightLevel: number, particleEmission: TrialSpawnerState$ParticleEmission, spinningMobSpeed: number, isCapableOfSpawning: boolean)
    // private isCapableOfSpawning: boolean;
    // private lightLevel: number;
    // private name: string;
    // private particleEmission: TrialSpawnerState$ParticleEmission;
    // private spinningMobSpeed: number;
    emitParticles(level: Level, blockPos: BlockPos, isOminous: boolean): void;
    getSerializedName(): string;
    hasSpinningMob(): boolean;
    isCapableOfSpawning(): boolean;
    lightLevel(): number;
    // private spawnOminousOminousItemSpawner(level: ServerLevel, trialSpawnerPos: BlockPos, trialSpawner: TrialSpawner): void;
    spinningMobSpeed(): number;
    tickAndGetNext(spawnerPos: BlockPos, trialSpawner: TrialSpawner, serverLevel: ServerLevel): TrialSpawnerState;
    // private timeToSpawnItemSpawner(serverLevel: ServerLevel, data: TrialSpawnerStateData): boolean;
    name(): "INACTIVE" | "WAITING_FOR_PLAYERS" | "ACTIVE" | "WAITING_FOR_REWARD_EJECTION" | "EJECTING_REWARD" | "COOLDOWN";
}