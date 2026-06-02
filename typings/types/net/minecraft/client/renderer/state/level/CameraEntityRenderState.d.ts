import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { FabricRenderState } from '../../../../../../net/fabricmc/fabric/api/client/rendering/v1/FabricRenderState.d.ts'
import type { RenderStateDataKey } from '../../../../../../net/fabricmc/fabric/api/client/rendering/v1/RenderStateDataKey.d.ts'
export class CameraEntityRenderState extends Object implements FabricRenderState {
    constructor()
    backwardsInterpolatedWalkDistance: number;
    bob: number;
    deathTime: number;
    doesMobEffectBlockSky: boolean;
    hurtDir: number;
    hurtDuration: number;
    hurtTime: number;
    isDeadOrDying: boolean;
    isLiving: boolean;
    isPlayer: boolean;
    isSleeping: boolean;
    // private renderStateData: Map<Object | null, Object | null>;
    clearExtraData(): void;
    clearExtraData(): void;
    getData<T extends Object | number | string | boolean>(arg0: RenderStateDataKey<T>): T;
    getData(arg0: RenderStateDataKey<Object>): Object;
    getDataOrDefault<T extends Object | number | string | boolean>(arg0: RenderStateDataKey<T>, arg1: T): T;
    getDataOrDefault(arg0: RenderStateDataKey<Object>, arg1: Object): Object;
    setData<T extends Object | number | string | boolean>(arg0: RenderStateDataKey<T>, arg1: T): void;
    setData(arg0: RenderStateDataKey<Object>, arg1: Object): void;
}