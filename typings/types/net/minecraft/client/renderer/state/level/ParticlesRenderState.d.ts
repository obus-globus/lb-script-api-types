import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { FabricRenderState } from '../../../../../../net/fabricmc/fabric/api/client/rendering/v1/FabricRenderState.d.ts'
import type { RenderStateDataKey } from '../../../../../../net/fabricmc/fabric/api/client/rendering/v1/RenderStateDataKey.d.ts'
import type { SubmitNodeCollector } from '../../../../../../net/minecraft/client/renderer/SubmitNodeCollector.d.ts'
import type { CameraRenderState } from '../../../../../../net/minecraft/client/renderer/state/level/CameraRenderState.d.ts'
import type { ParticleGroupRenderState } from '../../../../../../net/minecraft/client/renderer/state/level/ParticleGroupRenderState.d.ts'
export class ParticlesRenderState extends Object implements FabricRenderState {
    constructor()
    particles: ParticleGroupRenderState[];
    // private renderStateData: Map<Object | null, Object | null>;
    add(state: ParticleGroupRenderState): void;
    clearExtraData(): void;
    getData<T extends unknown>(arg0: RenderStateDataKey<T>): T;
    getData(arg0: RenderStateDataKey<Object>): Object;
    getDataOrDefault<T extends unknown>(arg0: RenderStateDataKey<T>, arg1: T): T;
    getDataOrDefault(arg0: RenderStateDataKey<Object>, arg1: Object): Object;
    reset(): void;
    setData<T extends unknown>(arg0: RenderStateDataKey<T>, arg1: T): void;
    setData(arg0: RenderStateDataKey<Object>, arg1: Object): void;
    submit(submitNodeCollector: SubmitNodeCollector, camera: CameraRenderState): void;
}