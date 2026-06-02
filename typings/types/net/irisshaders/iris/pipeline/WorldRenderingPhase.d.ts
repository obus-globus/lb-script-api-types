import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
import type { ChunkSectionLayerGroup } from '../../../../net/minecraft/client/renderer/chunk/ChunkSectionLayerGroup.d.ts'
export class WorldRenderingPhase extends Enum<WorldRenderingPhase> {
    static BLOCK_ENTITIES: WorldRenderingPhase;
    static CLOUDS: WorldRenderingPhase;
    static CUSTOM_SKY: WorldRenderingPhase;
    static DEBUG: WorldRenderingPhase;
    static DESTROY: WorldRenderingPhase;
    static ENTITIES: WorldRenderingPhase;
    static HAND_SOLID: WorldRenderingPhase;
    static HAND_TRANSLUCENT: WorldRenderingPhase;
    static MOON: WorldRenderingPhase;
    static NONE: WorldRenderingPhase;
    static OUTLINE: WorldRenderingPhase;
    static PARTICLES: WorldRenderingPhase;
    static RAIN_SNOW: WorldRenderingPhase;
    static SKY: WorldRenderingPhase;
    static STARS: WorldRenderingPhase;
    static SUN: WorldRenderingPhase;
    static SUNSET: WorldRenderingPhase;
    static TERRAIN_CUTOUT: WorldRenderingPhase;
    static TERRAIN_CUTOUT_MIPPED: WorldRenderingPhase;
    static TERRAIN_SOLID: WorldRenderingPhase;
    static TERRAIN_TRANSLUCENT: WorldRenderingPhase;
    static TRIPWIRE: WorldRenderingPhase;
    static VOID: WorldRenderingPhase;
    static WORLD_BORDER: WorldRenderingPhase;
    static fromTerrainRenderType(paramarg0: ChunkSectionLayerGroup): WorldRenderingPhase;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): WorldRenderingPhase;
    static values(): (Object | null)[];
    private constructor()
    name(): "NONE" | "SKY" | "SUNSET" | "CUSTOM_SKY" | "SUN" | "MOON" | "STARS" | "VOID" | "TERRAIN_SOLID" | "TERRAIN_CUTOUT_MIPPED" | "TERRAIN_CUTOUT" | "ENTITIES" | "BLOCK_ENTITIES" | "DESTROY" | "OUTLINE" | "DEBUG" | "HAND_SOLID" | "TERRAIN_TRANSLUCENT" | "TRIPWIRE" | "PARTICLES" | "CLOUDS" | "RAIN_SNOW" | "WORLD_BORDER" | "HAND_TRANSLUCENT";
}