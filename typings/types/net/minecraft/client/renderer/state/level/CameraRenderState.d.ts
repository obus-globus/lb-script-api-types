import type { JavaMap } from '../../../../../../JavaMap.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { FabricRenderState } from '../../../../../../net/fabricmc/fabric/api/client/rendering/v1/FabricRenderState.d.ts'
import type { RenderStateDataKey } from '../../../../../../net/fabricmc/fabric/api/client/rendering/v1/RenderStateDataKey.d.ts'
import type { Frustum } from '../../../../../../net/minecraft/client/renderer/culling/Frustum.d.ts'
import type { FogData } from '../../../../../../net/minecraft/client/renderer/fog/FogData.d.ts'
import type { CameraEntityRenderState } from '../../../../../../net/minecraft/client/renderer/state/level/CameraEntityRenderState.d.ts'
import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { FogType } from '../../../../../../net/minecraft/world/level/material/FogType.d.ts'
import type { Vec3 } from '../../../../../../net/minecraft/world/phys/Vec3.d.ts'
import type { Matrix4f } from '../../../../../../org/joml/Matrix4f.d.ts'
import type { Quaternionf } from '../../../../../../org/joml/Quaternionf.d.ts'
export class CameraRenderState extends Object implements FabricRenderState {
    constructor()
    blockPos: BlockPos;
    cullFrustum: Frustum;
    depthFar: number;
    entityRenderState: CameraEntityRenderState;
    fogData: FogData;
    fogType: FogType;
    hudFov: number;
    initialized: boolean;
    isFrustumCaptured: boolean;
    isPanoramicMode: boolean;
    orientation: Quaternionf;
    pos: Vec3;
    projectionMatrix: Matrix4f;
    // private renderStateData: JavaMap<Object | null, Object | null>;
    smartCull: boolean;
    viewRotationMatrix: Matrix4f;
    xRot: number;
    yRot: number;
    clearExtraData(): void;
    getData<T extends unknown>(arg0: RenderStateDataKey<T>): T;
    getData(arg0: RenderStateDataKey<Object>): Object;
    getDataOrDefault<T extends unknown>(arg0: RenderStateDataKey<T>, arg1: T): T;
    getDataOrDefault(arg0: RenderStateDataKey<Object>, arg1: Object): Object;
    setData<T extends unknown>(arg0: RenderStateDataKey<T>, arg1: T): void;
    setData(arg0: RenderStateDataKey<Object>, arg1: Object): void;
}