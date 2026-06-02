import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { RenderStateDataKey } from '../../../../../../../net/fabricmc/fabric/api/client/rendering/v1/RenderStateDataKey.d.ts'
export interface FabricRenderState extends Object{
    clearExtraData(): void;
    getData<T extends Object | number | string | boolean>(arg0: RenderStateDataKey<T>): T;
    getDataOrDefault<T extends Object | number | string | boolean>(arg0: RenderStateDataKey<T>, arg1: T): T;
    setData<T extends Object | number | string | boolean>(arg0: RenderStateDataKey<T>, arg1: T): void;
}