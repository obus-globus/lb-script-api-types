import type { DSL$TypeReference } from '../../../../com/mojang/datafixers/DSL$TypeReference.d.ts'
import type { DataFixer } from '../../../../com/mojang/datafixers/DataFixer.d.ts'
import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Dynamic } from '../../../../com/mojang/serialization/Dynamic.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
import type { CompoundTag } from '../../../../net/minecraft/nbt/CompoundTag.d.ts'
export class DataFixTypes extends Enum<DataFixTypes> {
    static ADVANCEMENTS: DataFixTypes;
    static CHUNK: DataFixTypes;
    static DEBUG_PROFILE: DataFixTypes;
    static ENTITY_CHUNK: DataFixTypes;
    static HOTBAR: DataFixTypes;
    static LEVEL: DataFixTypes;
    static LEVEL_SUMMARY: DataFixTypes;
    static OPTIONS: DataFixTypes;
    static PLAYER: DataFixTypes;
    static POI_CHUNK: DataFixTypes;
    static SAVED_DATA_COMMAND_STORAGE: DataFixTypes;
    static SAVED_DATA_CUSTOM_BOSS_EVENTS: DataFixTypes;
    static SAVED_DATA_ENDER_DRAGON_FIGHT: DataFixTypes;
    static SAVED_DATA_FORCED_CHUNKS: DataFixTypes;
    static SAVED_DATA_GAME_RULES: DataFixTypes;
    static SAVED_DATA_MAP_DATA: DataFixTypes;
    static SAVED_DATA_MAP_INDEX: DataFixTypes;
    static SAVED_DATA_RAIDS: DataFixTypes;
    static SAVED_DATA_RANDOM_SEQUENCES: DataFixTypes;
    static SAVED_DATA_SCHEDULED_EVENTS: DataFixTypes;
    static SAVED_DATA_SCOREBOARD: DataFixTypes;
    static SAVED_DATA_STOPWATCHES: DataFixTypes;
    static SAVED_DATA_STRUCTURE_FEATURE_INDICES: DataFixTypes;
    static SAVED_DATA_WANDERING_TRADER: DataFixTypes;
    static SAVED_DATA_WEATHER: DataFixTypes;
    static SAVED_DATA_WORLD_BORDER: DataFixTypes;
    static SAVED_DATA_WORLD_CLOCKS: DataFixTypes;
    static SAVED_DATA_WORLD_GEN_SETTINGS: DataFixTypes;
    static STATS: DataFixTypes;
    static STRUCTURE: DataFixTypes;
    static TYPES_FOR_LEVEL_LIST: DSL$TypeReference[];
    static WORLD_GEN_SETTINGS: DataFixTypes;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): DataFixTypes;
    static values(): DataFixTypes[];
    private constructor(type: DSL$TypeReference)
    // private type: DSL$TypeReference;
    update<T extends unknown>(fixerUpper: DataFixer, input: Dynamic<T>, fromVersion: number, toVersion: number): Dynamic<T>;
    update(fixer: DataFixer, tag: CompoundTag, fromVersion: number, toVersion: number): CompoundTag;
    updateToCurrentVersion<T extends unknown>(fixerUpper: DataFixer, input: Dynamic<T>, dataVersion: number): Dynamic<T>;
    updateToCurrentVersion(fixer: DataFixer, tag: CompoundTag, fromVersion: number): CompoundTag;
    wrapCodec<A extends unknown>(codec: Codec<A>, dataFixer: DataFixer, defaultVersion: number): Codec<A>;
    name(): "LEVEL" | "LEVEL_SUMMARY" | "PLAYER" | "CHUNK" | "HOTBAR" | "OPTIONS" | "STRUCTURE" | "STATS" | "SAVED_DATA_COMMAND_STORAGE" | "SAVED_DATA_CUSTOM_BOSS_EVENTS" | "SAVED_DATA_ENDER_DRAGON_FIGHT" | "SAVED_DATA_GAME_RULES" | "SAVED_DATA_FORCED_CHUNKS" | "SAVED_DATA_MAP_DATA" | "SAVED_DATA_MAP_INDEX" | "SAVED_DATA_RAIDS" | "SAVED_DATA_RANDOM_SEQUENCES" | "SAVED_DATA_SCHEDULED_EVENTS" | "SAVED_DATA_SCOREBOARD" | "SAVED_DATA_STOPWATCHES" | "SAVED_DATA_STRUCTURE_FEATURE_INDICES" | "SAVED_DATA_WANDERING_TRADER" | "SAVED_DATA_WEATHER" | "SAVED_DATA_WORLD_BORDER" | "SAVED_DATA_WORLD_CLOCKS" | "SAVED_DATA_WORLD_GEN_SETTINGS" | "ADVANCEMENTS" | "POI_CHUNK" | "WORLD_GEN_SETTINGS" | "ENTITY_CHUNK" | "DEBUG_PROFILE";
}