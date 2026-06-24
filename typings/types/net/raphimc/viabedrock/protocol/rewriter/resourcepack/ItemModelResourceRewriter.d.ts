import type { CustomModelData1_21_4 } from '../../../../../../com/viaversion/viaversion/api/minecraft/item/data/CustomModelData1_21_4.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ResourcePackRewriter$Rewriter } from '../../../../../../net/raphimc/viabedrock/protocol/rewriter/ResourcePackRewriter$Rewriter.d.ts'
export abstract class ItemModelResourceRewriter extends Object implements ResourcePackRewriter$Rewriter {
    static getCustomModelData(paramarg0: string): CustomModelData1_21_4;
    constructor(arg0: string)
    // private subFolder: string;
    getJavaTexturePath(arg0: string): string;
}