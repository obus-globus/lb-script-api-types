import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { FabricRenderState } from '../../../../../net/fabricmc/fabric/api/client/rendering/v1/FabricRenderState.d.ts'
import type { RenderStateDataKey } from '../../../../../net/fabricmc/fabric/api/client/rendering/v1/RenderStateDataKey.d.ts'
import type { LightmapRenderState } from '../../../../../net/minecraft/client/renderer/state/LightmapRenderState.d.ts'
import type { OptionsRenderState } from '../../../../../net/minecraft/client/renderer/state/OptionsRenderState.d.ts'
import type { WindowRenderState } from '../../../../../net/minecraft/client/renderer/state/WindowRenderState.d.ts'
import type { GuiRenderState } from '../../../../../net/minecraft/client/renderer/state/gui/GuiRenderState.d.ts'
import type { LevelRenderState } from '../../../../../net/minecraft/client/renderer/state/level/LevelRenderState.d.ts'
export class GameRenderState extends Object implements FabricRenderState {
    constructor()
    framerateLimit: number;
    guiRenderState: GuiRenderState;
    levelRenderState: LevelRenderState;
    lightmapRenderState: LightmapRenderState;
    optionsRenderState: OptionsRenderState;
    // private renderStateData: Map<Object | null, Object | null>;
    windowRenderState: WindowRenderState;
    clearExtraData(): void;
    clearExtraData(): void;
    getData<T extends Object | number | string | boolean>(arg0: RenderStateDataKey<T>): T;
    getData(arg0: RenderStateDataKey<Object>): Object;
    getDataOrDefault<T extends Object | number | string | boolean>(arg0: RenderStateDataKey<T>, arg1: T): T;
    getDataOrDefault(arg0: RenderStateDataKey<Object>, arg1: Object): Object;
    setData<T extends Object | number | string | boolean>(arg0: RenderStateDataKey<T>, arg1: T): void;
    setData(arg0: RenderStateDataKey<Object>, arg1: Object): void;
}