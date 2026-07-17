import type { JavaMap } from '../../../../../../JavaMap.d.ts'
import type { Runnable } from '../../../../../../java/lang/Runnable.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { FabricRenderState } from '../../../../../../net/fabricmc/fabric/api/client/rendering/v1/FabricRenderState.d.ts'
import type { RenderStateDataKey } from '../../../../../../net/fabricmc/fabric/api/client/rendering/v1/RenderStateDataKey.d.ts'
import type { BlockEntityRenderState } from '../../../../../../net/minecraft/client/renderer/blockentity/state/BlockEntityRenderState.d.ts'
import type { EntityRenderState } from '../../../../../../net/minecraft/client/renderer/entity/state/EntityRenderState.d.ts'
import type { BlockBreakingRenderState } from '../../../../../../net/minecraft/client/renderer/state/level/BlockBreakingRenderState.d.ts'
import type { BlockOutlineRenderState } from '../../../../../../net/minecraft/client/renderer/state/level/BlockOutlineRenderState.d.ts'
import type { CameraRenderState } from '../../../../../../net/minecraft/client/renderer/state/level/CameraRenderState.d.ts'
import type { ChunkLoadingRenderState } from '../../../../../../net/minecraft/client/renderer/state/level/ChunkLoadingRenderState.d.ts'
import type { ParticlesRenderState } from '../../../../../../net/minecraft/client/renderer/state/level/ParticlesRenderState.d.ts'
import type { SectionUpdateRenderState } from '../../../../../../net/minecraft/client/renderer/state/level/SectionUpdateRenderState.d.ts'
import type { SkyRenderState } from '../../../../../../net/minecraft/client/renderer/state/level/SkyRenderState.d.ts'
import type { WeatherRenderState } from '../../../../../../net/minecraft/client/renderer/state/level/WeatherRenderState.d.ts'
import type { WorldBorderRenderState } from '../../../../../../net/minecraft/client/renderer/state/level/WorldBorderRenderState.d.ts'
export class LevelRenderState extends Object implements FabricRenderState {
    constructor()
    blockBreakingRenderStates: BlockBreakingRenderState[];
    blockEntityRenderStates: BlockEntityRenderState[];
    blockOutlineRenderState: BlockOutlineRenderState;
    cameraRenderState: CameraRenderState;
    chunkLoadingRenderState: ChunkLoadingRenderState;
    cloudColor: number;
    cloudHeight: number;
    entityRenderStates: EntityRenderState[];
    gameTime: number;
    lastEntityRenderStateCount: number;
    particlesRenderState: ParticlesRenderState;
    playerCompiledSectionCallback: () => void;
    render3dCrosshair: boolean;
    // private renderStateData: JavaMap<Object | null, Object | null>;
    sectionUpdateRenderStates: SectionUpdateRenderState[];
    shouldResetChunkLayerSampler: boolean;
    shouldResetSkyRenderer: boolean;
    shouldShowEntityOutlines: boolean;
    skyRenderState: SkyRenderState;
    weatherRenderState: WeatherRenderState;
    worldBorderRenderState: WorldBorderRenderState;
    clearExtraData(): void;
    getData<T extends unknown>(arg0: RenderStateDataKey<T>): T;
    getData(arg0: RenderStateDataKey<Object>): Object;
    getDataOrDefault<T extends unknown>(arg0: RenderStateDataKey<T>, arg1: T): T;
    getDataOrDefault(arg0: RenderStateDataKey<Object>, arg1: Object): Object;
    reset(): void;
    setData<T extends unknown>(arg0: RenderStateDataKey<T>, arg1: T): void;
    setData(arg0: RenderStateDataKey<Object>, arg1: Object): void;
}