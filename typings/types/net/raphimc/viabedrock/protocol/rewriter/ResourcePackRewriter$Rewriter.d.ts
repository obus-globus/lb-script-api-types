import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Supplier } from '../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Content } from '../../../../../net/raphimc/viabedrock/api/resourcepack/content/Content.d.ts'
import type { ResourcePackStorage } from '../../../../../net/raphimc/viabedrock/protocol/storage/ResourcePackStorage.d.ts'
export interface ResourcePackRewriter$Rewriter extends Object {
    submitTasks(arg0: ResourcePackStorage, arg1: (param0: () => Content) => void): void;
}