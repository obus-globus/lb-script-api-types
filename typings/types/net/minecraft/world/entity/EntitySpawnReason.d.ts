import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class EntitySpawnReason extends Enum<EntitySpawnReason> {
    static BREEDING: EntitySpawnReason;
    static BUCKET: EntitySpawnReason;
    static CHUNK_GENERATION: EntitySpawnReason;
    static COMMAND: EntitySpawnReason;
    static CONVERSION: EntitySpawnReason;
    static DIMENSION_TRAVEL: EntitySpawnReason;
    static DISPENSER: EntitySpawnReason;
    static EVENT: EntitySpawnReason;
    static JOCKEY: EntitySpawnReason;
    static LOAD: EntitySpawnReason;
    static MOB_SUMMONED: EntitySpawnReason;
    static NATURAL: EntitySpawnReason;
    static PATROL: EntitySpawnReason;
    static REINFORCEMENT: EntitySpawnReason;
    static SPAWNER: EntitySpawnReason;
    static SPAWN_ITEM_USE: EntitySpawnReason;
    static STRUCTURE: EntitySpawnReason;
    static TRIAL_SPAWNER: EntitySpawnReason;
    static TRIGGERED: EntitySpawnReason;
    static ignoresLightRequirements(paramreason: EntitySpawnReason): boolean;
    static isSpawner(paramreason: EntitySpawnReason): boolean;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): EntitySpawnReason;
    static values(): EntitySpawnReason[];
    private constructor()
    name(): "NATURAL" | "CHUNK_GENERATION" | "SPAWNER" | "STRUCTURE" | "BREEDING" | "MOB_SUMMONED" | "JOCKEY" | "EVENT" | "CONVERSION" | "REINFORCEMENT" | "TRIGGERED" | "BUCKET" | "SPAWN_ITEM_USE" | "COMMAND" | "DISPENSER" | "PATROL" | "TRIAL_SPAWNER" | "LOAD" | "DIMENSION_TRAVEL";
}