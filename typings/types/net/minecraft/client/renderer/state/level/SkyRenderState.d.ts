import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { FabricRenderState } from '../../../../../../net/fabricmc/fabric/api/client/rendering/v1/FabricRenderState.d.ts'
import type { RenderStateDataKey } from '../../../../../../net/fabricmc/fabric/api/client/rendering/v1/RenderStateDataKey.d.ts'
import type { MoonPhase } from '../../../../../../net/minecraft/world/level/MoonPhase.d.ts'
import type { DimensionType$Skybox } from '../../../../../../net/minecraft/world/level/dimension/DimensionType$Skybox.d.ts'
export class SkyRenderState extends Object implements FabricRenderState {
    constructor()
    endFlashIntensity: number;
    endFlashXAngle: number;
    endFlashYAngle: number;
    moonAngle: number;
    moonPhase: MoonPhase;
    rainBrightness: number;
    // private renderStateData: Map<Object | null, Object | null>;
    shouldRenderDarkDisc: boolean;
    skyColor: number;
    skybox: DimensionType$Skybox;
    starAngle: number;
    starBrightness: number;
    sunAngle: number;
    sunriseAndSunsetColor: number;
    clearExtraData(): void;
    getData<T extends Object | number | string | boolean>(arg0: RenderStateDataKey<T>): T;
    getData(arg0: RenderStateDataKey<Object>): Object;
    getDataOrDefault<T extends Object | number | string | boolean>(arg0: RenderStateDataKey<T>, arg1: T): T;
    getDataOrDefault(arg0: RenderStateDataKey<Object>, arg1: Object): Object;
    reset(): void;
    setData<T extends Object | number | string | boolean>(arg0: RenderStateDataKey<T>, arg1: T): void;
    setData(arg0: RenderStateDataKey<Object>, arg1: Object): void;
}