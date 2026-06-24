import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { FabricRenderState } from '../../../../../../net/fabricmc/fabric/api/client/rendering/v1/FabricRenderState.d.ts'
import type { RenderStateDataKey } from '../../../../../../net/fabricmc/fabric/api/client/rendering/v1/RenderStateDataKey.d.ts'
import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { VoxelShape } from '../../../../../../net/minecraft/world/phys/shapes/VoxelShape.d.ts'
export class BlockOutlineRenderState extends Record implements FabricRenderState {
    constructor(pos: BlockPos, isTranslucent: boolean, highContrast: boolean, shape: VoxelShape)
    constructor(pos: BlockPos, isTranslucent: boolean, highContrast: boolean, shape: VoxelShape, collisionShape: VoxelShape, occlusionShape: VoxelShape, interactionShape: VoxelShape)
    // private collisionShape: VoxelShape;
    // private highContrast: boolean;
    // private interactionShape: VoxelShape;
    // private isTranslucent: boolean;
    // private occlusionShape: VoxelShape;
    // private pos: BlockPos;
    // private renderStateData: Map<Object | null, Object | null>;
    // private shape: VoxelShape;
    clearExtraData(): void;
    collisionShape(): VoxelShape;
    equals(o: Object | null): boolean;
    getData<T extends unknown>(arg0: RenderStateDataKey<T>): T;
    getData(arg0: RenderStateDataKey<Object>): Object;
    getDataOrDefault<T extends unknown>(arg0: RenderStateDataKey<T>, arg1: T): T;
    getDataOrDefault(arg0: RenderStateDataKey<Object>, arg1: Object): Object;
    hashCode(): number;
    highContrast(): boolean;
    interactionShape(): VoxelShape;
    isTranslucent(): boolean;
    occlusionShape(): VoxelShape;
    pos(): BlockPos;
    setData<T extends unknown>(arg0: RenderStateDataKey<T>, arg1: T): void;
    setData(arg0: RenderStateDataKey<Object>, arg1: Object): void;
    shape(): VoxelShape;
    toString(): string;
}