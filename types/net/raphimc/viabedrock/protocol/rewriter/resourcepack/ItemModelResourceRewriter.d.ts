import type { CustomModelData1_21_4 } from '../../../../../../com/viaversion/viaversion/api/minecraft/item/data/CustomModelData1_21_4.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Content } from '../../../../../../net/raphimc/viabedrock/api/resourcepack/content/Content.d.ts'
import type { ResourcePackRewriter$Rewriter } from '../../../../../../net/raphimc/viabedrock/protocol/rewriter/ResourcePackRewriter$Rewriter.d.ts'
import type { ResourcePackStorage } from '../../../../../../net/raphimc/viabedrock/protocol/storage/ResourcePackStorage.d.ts'
export abstract class ItemModelResourceRewriter extends Object implements ResourcePackRewriter$Rewriter {
    static getCustomModelData(paramarg0: string): CustomModelData1_21_4;
    constructor(arg0: string, arg1: string)
    // private name: string;
    // private subFolder: string;
    apply(arg0: ResourcePackStorage, arg1: Content): void;
    apply(arg0: ResourcePackStorage, arg1: Content, arg2: string[]): void;
    getJavaModelName(arg0: string): string;
    getJavaTexturePath(arg0: string): string;
}