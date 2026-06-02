import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Content } from '../../../../../net/raphimc/viabedrock/api/resourcepack/content/Content.d.ts'
import type { ResourcePackStorage } from '../../../../../net/raphimc/viabedrock/protocol/storage/ResourcePackStorage.d.ts'
export interface ResourcePackRewriter$Rewriter extends Object{
    apply(arg0: ResourcePackStorage, arg1: Content): void;
}