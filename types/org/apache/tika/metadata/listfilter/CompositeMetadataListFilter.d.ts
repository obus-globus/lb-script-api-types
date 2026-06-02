import type { Metadata } from '../../../../../org/apache/tika/metadata/Metadata.d.ts'
import type { MetadataListFilter } from '../../../../../org/apache/tika/metadata/listfilter/MetadataListFilter.d.ts'
import type { Element } from '../../../../../org/w3c/dom/Element.d.ts'
export class CompositeMetadataListFilter extends MetadataListFilter {
    static load(paramarg0: Element, paramarg1: boolean): MetadataListFilter;
    constructor()
    constructor(arg0: MetadataListFilter[])
    readonly filters: MetadataListFilter[];
    filter(arg0: Metadata[]): Metadata[];
    getFilters(): MetadataListFilter[];
    setFilters(arg0: MetadataListFilter[]): void;
    toString(): string;
}