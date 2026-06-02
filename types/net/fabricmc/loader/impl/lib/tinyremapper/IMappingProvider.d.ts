import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { IMappingProvider$MappingAcceptor } from '../../../../../../net/fabricmc/loader/impl/lib/tinyremapper/IMappingProvider$MappingAcceptor.d.ts'
export interface IMappingProvider extends Object{
    load(arg0: IMappingProvider$MappingAcceptor): void;
}