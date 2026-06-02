import type { Metadata } from '../../../../../org/apache/tika/metadata/Metadata.d.ts'
import type { MetadataFilter } from '../../../../../org/apache/tika/metadata/filter/MetadataFilter.d.ts'
import type { Element } from '../../../../../org/w3c/dom/Element.d.ts'
export class CompositeMetadataFilter extends MetadataFilter {
    static load(paramarg0: Element, paramarg1: boolean): MetadataFilter;
    constructor()
    constructor(arg0: MetadataFilter[])
    readonly filters: MetadataFilter[];
    filter(arg0: Metadata): void;
    getFilters(): MetadataFilter[];
    setFilters(arg0: MetadataFilter[]): void;
    toString(): string;
}