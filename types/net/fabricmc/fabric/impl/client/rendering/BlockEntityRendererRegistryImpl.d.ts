import type { BiConsumer } from '../../../../../../java/util/function/BiConsumer.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { BlockEntityRendererProvider } from '../../../../../../net/minecraft/client/renderer/blockentity/BlockEntityRendererProvider.d.ts'
import type { BlockEntityType } from '../../../../../../net/minecraft/world/level/block/entity/BlockEntityType.d.ts'
export class BlockEntityRendererRegistryImpl extends Object {
    static register(paramarg0: BlockEntityType<Object>, paramarg1: (param0: Object | null) => Object | null): void;
    static setup(paramarg0: (param0: Object | null, param1: Object | null) => void): void;
    private constructor()
}