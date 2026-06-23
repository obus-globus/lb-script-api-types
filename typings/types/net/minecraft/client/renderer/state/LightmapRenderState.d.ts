import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { FabricRenderState } from '../../../../../net/fabricmc/fabric/api/client/rendering/v1/FabricRenderState.d.ts'
import type { RenderStateDataKey } from '../../../../../net/fabricmc/fabric/api/client/rendering/v1/RenderStateDataKey.d.ts'
import type { Vector3fc } from '../../../../../org/joml/Vector3fc.d.ts'
export class LightmapRenderState extends Object implements FabricRenderState {
    constructor()
    ambientColor: Vector3fc;
    blockFactor: number;
    blockLightTint: Vector3fc;
    bossOverlayWorldDarkening: number;
    brightness: number;
    darknessEffectScale: number;
    needsUpdate: boolean;
    nightVisionColor: Vector3fc;
    nightVisionEffectIntensity: number;
    // private renderStateData: Map<Object | null, Object | null>;
    skyFactor: number;
    skyLightColor: Vector3fc;
    clearExtraData(): void;
    getData<T extends unknown>(arg0: RenderStateDataKey<T>): T;
    getData(arg0: RenderStateDataKey<Object>): Object;
    getDataOrDefault<T extends unknown>(arg0: RenderStateDataKey<T>, arg1: T): T;
    getDataOrDefault(arg0: RenderStateDataKey<Object>, arg1: Object): Object;
    setData<T extends unknown>(arg0: RenderStateDataKey<T>, arg1: T): void;
    setData(arg0: RenderStateDataKey<Object>, arg1: Object): void;
}