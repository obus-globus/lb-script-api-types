import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { FabricRenderState } from '../../../../../../net/fabricmc/fabric/api/client/rendering/v1/FabricRenderState.d.ts'
import type { RenderStateDataKey } from '../../../../../../net/fabricmc/fabric/api/client/rendering/v1/RenderStateDataKey.d.ts'
export class PanoramaRenderState extends Record implements FabricRenderState {
    // private renderStateData: Map<Object | null, Object | null>;
    // private spin: number;
    clearExtraData(): void;
    clearExtraData(): void;
    equals(o: Object | null): boolean;
    getData<T extends Object | number | string | boolean>(arg0: RenderStateDataKey<T>): T;
    getData(arg0: RenderStateDataKey<Object>): Object;
    getDataOrDefault<T extends Object | number | string | boolean>(arg0: RenderStateDataKey<T>, arg1: T): T;
    getDataOrDefault(arg0: RenderStateDataKey<Object>, arg1: Object): Object;
    hashCode(): number;
    setData<T extends Object | number | string | boolean>(arg0: RenderStateDataKey<T>, arg1: T): void;
    setData(arg0: RenderStateDataKey<Object>, arg1: Object): void;
    spin(): number;
    toString(): string;
}