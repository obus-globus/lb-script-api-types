import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { FabricRenderState } from '../../../../../../net/fabricmc/fabric/api/client/rendering/v1/FabricRenderState.d.ts'
import type { RenderStateDataKey } from '../../../../../../net/fabricmc/fabric/api/client/rendering/v1/RenderStateDataKey.d.ts'
import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { BlockState } from '../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
export class BlockBreakingRenderState extends Record implements FabricRenderState {
    constructor(blockPos: BlockPos, blockState: BlockState, progress: number)
    // private blockPos: BlockPos;
    // private blockState: BlockState;
    // private progress: number;
    // private renderStateData: Map<Object | null, Object | null>;
    blockPos(): BlockPos;
    blockState(): BlockState;
    clearExtraData(): void;
    equals(o: Object | null): boolean;
    getData<T extends unknown>(arg0: RenderStateDataKey<T>): T;
    getData(arg0: RenderStateDataKey<Object>): Object;
    getDataOrDefault<T extends unknown>(arg0: RenderStateDataKey<T>, arg1: T): T;
    getDataOrDefault(arg0: RenderStateDataKey<Object>, arg1: Object): Object;
    hashCode(): number;
    progress(): number;
    setData<T extends unknown>(arg0: RenderStateDataKey<T>, arg1: T): void;
    setData(arg0: RenderStateDataKey<Object>, arg1: Object): void;
    toString(): string;
}