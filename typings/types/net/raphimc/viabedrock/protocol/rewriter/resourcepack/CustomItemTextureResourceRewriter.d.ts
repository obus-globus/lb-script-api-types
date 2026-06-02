import type { CustomModelData1_21_4 } from '../../../../../../com/viaversion/viaversion/api/minecraft/item/data/CustomModelData1_21_4.d.ts'
import type { Key } from '../../../../../../com/viaversion/viaversion/util/Key.d.ts'
import type { Content } from '../../../../../../net/raphimc/viabedrock/api/resourcepack/content/Content.d.ts'
import type { ItemModelResourceRewriter } from '../../../../../../net/raphimc/viabedrock/protocol/rewriter/resourcepack/ItemModelResourceRewriter.d.ts'
import type { ResourcePackStorage } from '../../../../../../net/raphimc/viabedrock/protocol/storage/ResourcePackStorage.d.ts'
export class CustomItemTextureResourceRewriter extends ItemModelResourceRewriter {
    static ITEM_MODEL_KEY: Key;
    static getCustomModelData(paramarg0: string): CustomModelData1_21_4;
    constructor()
    apply(arg0: ResourcePackStorage, arg1: Content, arg2: string[]): void;
}