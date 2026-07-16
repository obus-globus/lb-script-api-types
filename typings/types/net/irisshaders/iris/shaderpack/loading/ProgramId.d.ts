import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
import type { IrisProgram } from '../../../../../net/irisshaders/iris/api/v0/IrisProgram.d.ts'
import type { BlendModeOverride } from '../../../../../net/irisshaders/iris/gl/blending/BlendModeOverride.d.ts'
import type { ProgramGroup } from '../../../../../net/irisshaders/iris/shaderpack/loading/ProgramGroup.d.ts'
export class ProgramId extends Enum<ProgramId> {
    static ArmorGlint: ProgramId;
    static Basic: ProgramId;
    static BeaconBeam: ProgramId;
    static Block: ProgramId;
    static BlockTrans: ProgramId;
    static Clouds: ProgramId;
    static DamagedBlock: ProgramId;
    static DhGeneric: ProgramId;
    static DhShadow: ProgramId;
    static DhTerrain: ProgramId;
    static DhWater: ProgramId;
    static Entities: ProgramId;
    static EntitiesGlowing: ProgramId;
    static EntitiesTrans: ProgramId;
    static Final: ProgramId;
    static Hand: ProgramId;
    static HandWater: ProgramId;
    static Item: ProgramId;
    static Lightning: ProgramId;
    static Line: ProgramId;
    static Particles: ProgramId;
    static ParticlesTrans: ProgramId;
    static Shadow: ProgramId;
    static ShadowBlock: ProgramId;
    static ShadowCutout: ProgramId;
    static ShadowEntities: ProgramId;
    static ShadowLightning: ProgramId;
    static ShadowSolid: ProgramId;
    static ShadowWater: ProgramId;
    static SkyBasic: ProgramId;
    static SkyTextured: ProgramId;
    static SpiderEyes: ProgramId;
    static Terrain: ProgramId;
    static TerrainCutout: ProgramId;
    static TerrainSolid: ProgramId;
    static Textured: ProgramId;
    static TexturedLit: ProgramId;
    static Water: ProgramId;
    static Weather: ProgramId;
    static fromAPI(paramarg0: IrisProgram): ProgramId;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): ProgramId;
    static values(): ProgramId[];
    private constructor(arg2: ProgramGroup, arg3: string)
    private constructor(arg2: ProgramGroup, arg3: string, arg4: BlendModeOverride)
    private constructor(arg2: ProgramGroup, arg3: string, arg4: ProgramId)
    private constructor(arg2: ProgramGroup, arg3: string, arg4: ProgramId, arg5: BlendModeOverride)
    // private defaultBlendOverride: BlendModeOverride;
    readonly fallback: ProgramId;
    readonly group: ProgramGroup;
    readonly sourceName: string;
    getBlendModeOverride(): BlendModeOverride;
    getFallback(): Optional<ProgramId>;
    getGroup(): ProgramGroup;
    getSourceName(): string;
    name(): "Shadow" | "ShadowSolid" | "ShadowCutout" | "ShadowWater" | "ShadowEntities" | "ShadowLightning" | "ShadowBlock" | "Basic" | "Line" | "Textured" | "TexturedLit" | "SkyBasic" | "SkyTextured" | "Clouds" | "Terrain" | "TerrainSolid" | "TerrainCutout" | "DamagedBlock" | "Block" | "BlockTrans" | "BeaconBeam" | "Item" | "Entities" | "EntitiesTrans" | "Lightning" | "Particles" | "ParticlesTrans" | "EntitiesGlowing" | "ArmorGlint" | "SpiderEyes" | "Hand" | "Weather" | "Water" | "HandWater" | "DhTerrain" | "DhWater" | "DhGeneric" | "DhShadow" | "Final";
}