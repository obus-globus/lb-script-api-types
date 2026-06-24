import type { CustomModelData1_21_4 } from '../../../../../../com/viaversion/viaversion/api/minecraft/item/data/CustomModelData1_21_4.d.ts'
import type { ItemModel } from '../../../../../../com/viaversion/viaversion/api/minecraft/item/data/ItemModel.d.ts'
import type { Consumer } from '../../../../../../java/util/function/Consumer.d.ts'
import type { Supplier } from '../../../../../../java/util/function/Supplier.d.ts'
import type { Content } from '../../../../../../net/raphimc/viabedrock/api/resourcepack/content/Content.d.ts'
import type { TextureDefinitions$ItemTextureDefinition } from '../../../../../../net/raphimc/viabedrock/api/resourcepack/definition/TextureDefinitions$ItemTextureDefinition.d.ts'
import type { ItemModelResourceRewriter } from '../../../../../../net/raphimc/viabedrock/protocol/rewriter/resourcepack/ItemModelResourceRewriter.d.ts'
import type { ResourcePackStorage } from '../../../../../../net/raphimc/viabedrock/protocol/storage/ResourcePackStorage.d.ts'
export class CustomItemTextureResourceRewriter extends ItemModelResourceRewriter {
    static getCustomModelData(paramarg0: string): CustomModelData1_21_4;
    static getItemModel(paramarg0: string): ItemModel;
    constructor()
    // private handleItemTextureDefinitions(arg0: ResourcePackStorage, arg1: string, arg2: TextureDefinitions$ItemTextureDefinition[]): Content;
    submitTasks(arg0: ResourcePackStorage, arg1: (param0: () => Content) => void): void;
}