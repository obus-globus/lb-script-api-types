import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { FabricRenderState } from '../../../../../../net/fabricmc/fabric/api/client/rendering/v1/FabricRenderState.d.ts'
import type { RenderStateDataKey } from '../../../../../../net/fabricmc/fabric/api/client/rendering/v1/RenderStateDataKey.d.ts'
import type { WorldBorderRenderState$DistancePerDirection } from '../../../../../../net/minecraft/client/renderer/state/level/WorldBorderRenderState$DistancePerDirection.d.ts'
export class WorldBorderRenderState extends Object implements FabricRenderState {
    constructor()
    alpha: number;
    maxX: number;
    maxZ: number;
    minX: number;
    minZ: number;
    // private renderStateData: Map<Object | null, Object | null>;
    tint: number;
    clearExtraData(): void;
    clearExtraData(): void;
    closestBorder(x: number, z: number): WorldBorderRenderState$DistancePerDirection[];
    getData<T extends Object | number | string | boolean>(arg0: RenderStateDataKey<T>): T;
    getData(arg0: RenderStateDataKey<Object>): Object;
    getDataOrDefault<T extends Object | number | string | boolean>(arg0: RenderStateDataKey<T>, arg1: T): T;
    getDataOrDefault(arg0: RenderStateDataKey<Object>, arg1: Object): Object;
    reset(): void;
    setData<T extends Object | number | string | boolean>(arg0: RenderStateDataKey<T>, arg1: T): void;
    setData(arg0: RenderStateDataKey<Object>, arg1: Object): void;
}