import type { JavaMap } from '../../../../../../JavaMap.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { DebugScreenEntriesAccessor } from '../../../../../../net/caffeinemc/mods/sodium/mixin/features/gui/hooks/debug/DebugScreenEntriesAccessor.d.ts'
import type { DebugScreenEntry } from '../../../../../../net/minecraft/client/gui/components/debug/DebugScreenEntry.d.ts'
import type { DebugScreenEntryStatus } from '../../../../../../net/minecraft/client/gui/components/debug/DebugScreenEntryStatus.d.ts'
import type { DebugScreenProfile } from '../../../../../../net/minecraft/client/gui/components/debug/DebugScreenProfile.d.ts'
import type { Identifier } from '../../../../../../net/minecraft/resources/Identifier.d.ts'
export class DebugScreenEntries extends Object implements DebugScreenEntriesAccessor {
    static BIOME: Identifier;
    static CHUNK_BORDERS: Identifier;
    static CHUNK_GENERATION_STATS: Identifier;
    static CHUNK_RENDER_STATS: Identifier;
    static CHUNK_SECTION_OCTREE: Identifier;
    static CHUNK_SECTION_PATHS: Identifier;
    static CHUNK_SECTION_VISIBILITY: Identifier;
    static CHUNK_SOURCE_STATS: Identifier;
    static DAY_COUNT: Identifier;
    static DETAILED_MEMORY: Identifier;
    static ENTITY_HITBOXES: Identifier;
    static ENTITY_RENDER_STATS: Identifier;
    static ENTITY_SPAWN_COUNTS: Identifier;
    static FPS: Identifier;
    static GAME_VERSION: Identifier;
    static GPU_UTILIZATION: Identifier;
    static HEIGHTMAP: Identifier;
    static LIGHT_LEVELS: Identifier;
    static LOCAL_DIFFICULTY: Identifier;
    static LOOKING_AT_BLOCK_STATE: Identifier;
    static LOOKING_AT_BLOCK_TAGS: Identifier;
    static LOOKING_AT_ENTITY: Identifier;
    static LOOKING_AT_ENTITY_TAGS: Identifier;
    static LOOKING_AT_FLUID_STATE: Identifier;
    static LOOKING_AT_FLUID_TAGS: Identifier;
    static MEMORY: Identifier;
    static PARTICLE_RENDER_STATS: Identifier;
    static PLAYER_POSITION: Identifier;
    static PLAYER_SECTION_POSITION: Identifier;
    static POST_EFFECT: Identifier;
    static PROFILES: JavaMap<DebugScreenProfile, JavaMap<Identifier, DebugScreenEntryStatus>>;
    static SIMPLE_PERFORMANCE_IMPACTORS: Identifier;
    static SOUND_CACHE: Identifier;
    static SOUND_MOOD: Identifier;
    static SYSTEM_SPECS: Identifier;
    static THREE_DIMENSIONAL_CROSSHAIR: Identifier;
    static TPS: Identifier;
    static VISUALIZE_BLOCK_LIGHT_LEVELS: Identifier;
    static VISUALIZE_CHUNKS_ON_SERVER: Identifier;
    static VISUALIZE_COLLISION_BOXES: Identifier;
    static VISUALIZE_ENTITY_SUPPORTING_BLOCKS: Identifier;
    static VISUALIZE_HEIGHTMAP: Identifier;
    static VISUALIZE_SKY_LIGHT_LEVELS: Identifier;
    static VISUALIZE_SKY_LIGHT_SECTIONS: Identifier;
    static VISUALIZE_SOLID_FACES: Identifier;
    static VISUALIZE_WATER_LEVELS: Identifier;
    static allEntries(): JavaMap<Identifier, DebugScreenEntry>;
    static getEntry(paramid: Identifier): DebugScreenEntry;
    static register(paramidentifier: Identifier, paramentry: DebugScreenEntry): Identifier;
    constructor()
}