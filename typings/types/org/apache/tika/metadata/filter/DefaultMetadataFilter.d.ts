import type { ServiceLoader } from '../../../../../org/apache/tika/config/ServiceLoader.d.ts'
import type { CompositeMetadataFilter } from '../../../../../org/apache/tika/metadata/filter/CompositeMetadataFilter.d.ts'
import type { MetadataFilter } from '../../../../../org/apache/tika/metadata/filter/MetadataFilter.d.ts'
import type { Element } from '../../../../../org/w3c/dom/Element.d.ts'
export class DefaultMetadataFilter extends CompositeMetadataFilter {
    static load(paramarg0: Element, paramarg1: boolean): MetadataFilter;
    constructor()
    constructor(arg0: MetadataFilter[])
    constructor(arg0: ServiceLoader)
}