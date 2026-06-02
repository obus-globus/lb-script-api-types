import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { BlockEntityRendererProvider } from '../../../../../../../net/minecraft/client/renderer/blockentity/BlockEntityRendererProvider.d.ts'
import type { BlockEntityType } from '../../../../../../../net/minecraft/world/level/block/entity/BlockEntityType.d.ts'
export class BlockEntityRendererRegistry extends Object {
    static register(paramarg0: BlockEntityType<Object>, paramarg1: (param0: Object | null) => Object | null): void;
    private constructor()
}