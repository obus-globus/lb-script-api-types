import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { FabricRenderState } from '../../../../../../net/fabricmc/fabric/api/client/rendering/v1/FabricRenderState.d.ts'
import type { RenderStateDataKey } from '../../../../../../net/fabricmc/fabric/api/client/rendering/v1/RenderStateDataKey.d.ts'
import type { WeatherEffectRenderer$ColumnInstance } from '../../../../../../net/minecraft/client/renderer/WeatherEffectRenderer$ColumnInstance.d.ts'
export class WeatherRenderState extends Object implements FabricRenderState {
    constructor()
    intensity: number;
    radius: number;
    rainColumns: WeatherEffectRenderer$ColumnInstance[];
    // private renderStateData: Map<Object | null, Object | null>;
    snowColumns: WeatherEffectRenderer$ColumnInstance[];
    clearExtraData(): void;
    clearExtraData(): void;
    getData<T extends Object | number | string | boolean>(arg0: RenderStateDataKey<T>): T;
    getData(arg0: RenderStateDataKey<Object>): Object;
    getDataOrDefault<T extends Object | number | string | boolean>(arg0: RenderStateDataKey<T>, arg1: T): T;
    getDataOrDefault(arg0: RenderStateDataKey<Object>, arg1: Object): Object;
    reset(): void;
    setData<T extends Object | number | string | boolean>(arg0: RenderStateDataKey<T>, arg1: T): void;
    setData(arg0: RenderStateDataKey<Object>, arg1: Object): void;
}