import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { FabricRenderState } from '../../../../../net/fabricmc/fabric/api/client/rendering/v1/FabricRenderState.d.ts'
import type { RenderStateDataKey } from '../../../../../net/fabricmc/fabric/api/client/rendering/v1/RenderStateDataKey.d.ts'
import type { CameraType } from '../../../../../net/minecraft/client/CameraType.d.ts'
import type { CloudStatus } from '../../../../../net/minecraft/client/CloudStatus.d.ts'
import type { PrioritizeChunkUpdates } from '../../../../../net/minecraft/client/PrioritizeChunkUpdates.d.ts'
import type { TextureFilteringMethod } from '../../../../../net/minecraft/client/TextureFilteringMethod.d.ts'
export class OptionsRenderState extends Object implements FabricRenderState {
    constructor()
    ambientOcclusion: boolean;
    backgroundForChatOnly: boolean;
    bobView: boolean;
    cameraType: CameraType;
    chunkSectionFadeInTime: number;
    cloudRange: number;
    cloudStatus: CloudStatus;
    cutoutLeaves: boolean;
    damageTiltStrength: number;
    fov: number;
    glintSpeed: number;
    glintStrength: number;
    improvedTransparency: boolean;
    maxAnisotropyValue: number;
    menuBackgroundBlurriness: number;
    panoramaSpeed: number;
    prioritizeChunkUpdates: PrioritizeChunkUpdates;
    renderDistance: number;
    // private renderStateData: Map<Object | null, Object | null>;
    screenEffectScale: number;
    textBackgroundOpacity: number;
    textureFiltering: TextureFilteringMethod;
    clearExtraData(): void;
    getBackgroundOpacity(defaultOpacity: number): number;
    getData<T extends unknown>(arg0: RenderStateDataKey<T>): T;
    getData(arg0: RenderStateDataKey<Object>): Object;
    getDataOrDefault<T extends unknown>(arg0: RenderStateDataKey<T>, arg1: T): T;
    getDataOrDefault(arg0: RenderStateDataKey<Object>, arg1: Object): Object;
    setData<T extends unknown>(arg0: RenderStateDataKey<T>, arg1: T): void;
    setData(arg0: RenderStateDataKey<Object>, arg1: Object): void;
}