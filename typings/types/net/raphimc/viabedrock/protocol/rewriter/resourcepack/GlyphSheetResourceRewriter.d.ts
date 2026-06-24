import type { Consumer } from '../../../../../../java/util/function/Consumer.d.ts'
import type { Supplier } from '../../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Content } from '../../../../../../net/raphimc/viabedrock/api/resourcepack/content/Content.d.ts'
import type { ResourcePackRewriter$Rewriter } from '../../../../../../net/raphimc/viabedrock/protocol/rewriter/ResourcePackRewriter$Rewriter.d.ts'
import type { ResourcePackStorage } from '../../../../../../net/raphimc/viabedrock/protocol/storage/ResourcePackStorage.d.ts'
export class GlyphSheetResourceRewriter extends Object implements ResourcePackRewriter$Rewriter {
    constructor()
    // private handleGlyphSheets(arg0: ResourcePackStorage): Content;
    submitTasks(arg0: ResourcePackStorage, arg1: (param0: () => Content) => void): void;
}