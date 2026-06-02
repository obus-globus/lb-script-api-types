import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { MappingTreeView } from '../../../../../../net/fabricmc/loader/impl/lib/mappingio/tree/MappingTreeView.d.ts'
import type { IMappingProvider } from '../../../../../../net/fabricmc/loader/impl/lib/tinyremapper/IMappingProvider.d.ts'
import type { IMappingProvider$MappingAcceptor } from '../../../../../../net/fabricmc/loader/impl/lib/tinyremapper/IMappingProvider$MappingAcceptor.d.ts'
export class TinyUtils extends Object {
    static createMappingProvider(paramarg0: MappingTreeView, paramarg1: string, paramarg2: string): (param0: IMappingProvider$MappingAcceptor) => void;
}