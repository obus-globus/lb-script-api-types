import type { RenderPipeline } from '../../../../../com/mojang/blaze3d/pipeline/RenderPipeline.d.ts'
import type { VertexFormat } from '../../../../../com/mojang/blaze3d/vertex/VertexFormat.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
import type { AlphaTest } from '../../../../../net/irisshaders/iris/gl/blending/AlphaTest.d.ts'
import type { FogMode } from '../../../../../net/irisshaders/iris/gl/state/FogMode.d.ts'
import type { ShaderKey$LightingModel } from '../../../../../net/irisshaders/iris/pipeline/programs/ShaderKey$LightingModel.d.ts'
import type { Patch } from '../../../../../net/irisshaders/iris/pipeline/transform/Patch.d.ts'
import type { ProgramId } from '../../../../../net/irisshaders/iris/shaderpack/loading/ProgramId.d.ts'
export class ShaderKey extends Enum<ShaderKey> {
    static BASIC: ShaderKey;
    static BASIC_COLOR: ShaderKey;
    static BEACON: ShaderKey;
    static BE_TRANSLUCENT: ShaderKey;
    static BLOCK_ENTITY: ShaderKey;
    static BLOCK_ENTITY_BRIGHT: ShaderKey;
    static BLOCK_ENTITY_DIFFUSE: ShaderKey;
    static CLOUDS: ShaderKey;
    static CLOUDS_SODIUM: ShaderKey;
    static CRUMBLING: ShaderKey;
    static ENTITIES_ALPHA: ShaderKey;
    static ENTITIES_CUTOUT: ShaderKey;
    static ENTITIES_CUTOUT_DIFFUSE: ShaderKey;
    static ENTITIES_EYES: ShaderKey;
    static ENTITIES_EYES_TRANS: ShaderKey;
    static ENTITIES_SOLID: ShaderKey;
    static ENTITIES_SOLID_BRIGHT: ShaderKey;
    static ENTITIES_SOLID_DIFFUSE: ShaderKey;
    static ENTITIES_TRANSLUCENT: ShaderKey;
    static GLINT: ShaderKey;
    static HAND_CUTOUT: ShaderKey;
    static HAND_CUTOUT_BRIGHT: ShaderKey;
    static HAND_CUTOUT_DIFFUSE: ShaderKey;
    static HAND_TEXT: ShaderKey;
    static HAND_TEXT_INTENSITY: ShaderKey;
    static HAND_TEXT_TRANSLUCENT: ShaderKey;
    static HAND_TRANSLUCENT: ShaderKey;
    static HAND_WATER_BRIGHT: ShaderKey;
    static HAND_WATER_DIFFUSE: ShaderKey;
    static LEASH: ShaderKey;
    static LIGHTNING: ShaderKey;
    static LINES: ShaderKey;
    static MEKANISM_FLAME: ShaderKey;
    static MEKANISM_FLAME_SHADOW: ShaderKey;
    static MOVING_BLOCK: ShaderKey;
    static PARTICLES: ShaderKey;
    static PARTICLES_TRANS: ShaderKey;
    static SHADOW_BASIC: ShaderKey;
    static SHADOW_BASIC_COLOR: ShaderKey;
    static SHADOW_BEACON_BEAM: ShaderKey;
    static SHADOW_BLOCK: ShaderKey;
    static SHADOW_CLOUDS: ShaderKey;
    static SHADOW_ENTITIES_CUTOUT: ShaderKey;
    static SHADOW_LEASH: ShaderKey;
    static SHADOW_LIGHTNING: ShaderKey;
    static SHADOW_LINES: ShaderKey;
    static SHADOW_PARTICLES: ShaderKey;
    static SHADOW_SODIUM_TERRAIN_CUTOUT: ShaderKey;
    static SHADOW_SODIUM_TERRAIN_SOLID: ShaderKey;
    static SHADOW_SODIUM_TERRAIN_TRANSLUCENT: ShaderKey;
    static SHADOW_TERRAIN_CUTOUT: ShaderKey;
    static SHADOW_TEX: ShaderKey;
    static SHADOW_TEXT: ShaderKey;
    static SHADOW_TEXT_BG: ShaderKey;
    static SHADOW_TEXT_INTENSITY: ShaderKey;
    static SHADOW_TEX_COLOR: ShaderKey;
    static SHADOW_TRANSLUCENT: ShaderKey;
    static SKY_BASIC: ShaderKey;
    static SKY_BASIC_COLOR: ShaderKey;
    static SKY_TEXTURED: ShaderKey;
    static SKY_TEXTURED_COLOR: ShaderKey;
    static SODIUM_TERRAIN_CUTOUT: ShaderKey;
    static SODIUM_TERRAIN_SOLID: ShaderKey;
    static SODIUM_TERRAIN_TRANSLUCENT: ShaderKey;
    static SPS: ShaderKey;
    static TERRAIN_CUTOUT: ShaderKey;
    static TERRAIN_SOLID: ShaderKey;
    static TERRAIN_TRANSLUCENT: ShaderKey;
    static TEXT: ShaderKey;
    static TEXTURED: ShaderKey;
    static TEXTURED_COLOR: ShaderKey;
    static TEXT_BE: ShaderKey;
    static TEXT_BG: ShaderKey;
    static TEXT_INTENSITY: ShaderKey;
    static TEXT_INTENSITY_BE: ShaderKey;
    static WEATHER: ShaderKey;
    static findBestMatch(paramarg0: RenderPipeline, paramarg1: ProgramId): ShaderKey;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ShaderKey;
    static values(): (Object | null)[];
    private constructor(arg2: ProgramId, arg3: AlphaTest, arg4: VertexFormat, arg5: FogMode, arg6: ShaderKey$LightingModel, arg7: Patch)
    readonly alphaTest: AlphaTest;
    readonly fogMode: FogMode;
    // private lightingModel: ShaderKey$LightingModel;
    patch: Patch;
    readonly program: ProgramId;
    readonly vertexFormat: VertexFormat;
    getAlphaTest(): AlphaTest;
    getFogMode(): FogMode;
    getName(): string;
    getProgram(): ProgramId;
    getVertexFormat(): VertexFormat;
    hasDiffuseLighting(): boolean;
    isGlint(): boolean;
    isIntensity(): boolean;
    isShadow(): boolean;
    isText(): boolean;
    shouldIgnoreLightmap(): boolean;
    name(): "BASIC" | "BASIC_COLOR" | "TEXTURED" | "TEXTURED_COLOR" | "SPS" | "SKY_BASIC" | "SKY_BASIC_COLOR" | "SKY_TEXTURED" | "SKY_TEXTURED_COLOR" | "CLOUDS" | "CLOUDS_SODIUM" | "TERRAIN_SOLID" | "TERRAIN_CUTOUT" | "TERRAIN_TRANSLUCENT" | "MOVING_BLOCK" | "ENTITIES_ALPHA" | "ENTITIES_SOLID" | "ENTITIES_SOLID_DIFFUSE" | "ENTITIES_SOLID_BRIGHT" | "ENTITIES_CUTOUT" | "ENTITIES_CUTOUT_DIFFUSE" | "ENTITIES_TRANSLUCENT" | "ENTITIES_EYES" | "ENTITIES_EYES_TRANS" | "HAND_CUTOUT" | "HAND_CUTOUT_BRIGHT" | "HAND_CUTOUT_DIFFUSE" | "HAND_TEXT" | "HAND_TEXT_TRANSLUCENT" | "HAND_TEXT_INTENSITY" | "HAND_TRANSLUCENT" | "HAND_WATER_BRIGHT" | "HAND_WATER_DIFFUSE" | "LIGHTNING" | "LEASH" | "TEXT_BG" | "PARTICLES" | "PARTICLES_TRANS" | "WEATHER" | "CRUMBLING" | "TEXT" | "TEXT_INTENSITY" | "TEXT_BE" | "TEXT_INTENSITY_BE" | "BLOCK_ENTITY" | "BLOCK_ENTITY_BRIGHT" | "BLOCK_ENTITY_DIFFUSE" | "BE_TRANSLUCENT" | "BEACON" | "GLINT" | "LINES" | "MEKANISM_FLAME" | "SODIUM_TERRAIN_SOLID" | "SODIUM_TERRAIN_CUTOUT" | "SODIUM_TERRAIN_TRANSLUCENT" | "SHADOW_SODIUM_TERRAIN_SOLID" | "SHADOW_SODIUM_TERRAIN_CUTOUT" | "SHADOW_SODIUM_TERRAIN_TRANSLUCENT" | "SHADOW_TERRAIN_CUTOUT" | "SHADOW_TRANSLUCENT" | "SHADOW_ENTITIES_CUTOUT" | "SHADOW_BLOCK" | "SHADOW_BEACON_BEAM" | "SHADOW_BASIC" | "SHADOW_BASIC_COLOR" | "SHADOW_TEX" | "SHADOW_TEX_COLOR" | "SHADOW_CLOUDS" | "SHADOW_LINES" | "SHADOW_LEASH" | "SHADOW_LIGHTNING" | "SHADOW_PARTICLES" | "SHADOW_TEXT" | "SHADOW_TEXT_BG" | "SHADOW_TEXT_INTENSITY" | "MEKANISM_FLAME_SHADOW";
}