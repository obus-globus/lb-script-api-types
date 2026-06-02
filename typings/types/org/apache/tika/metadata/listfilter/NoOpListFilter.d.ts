import type { Metadata } from '../../../../../org/apache/tika/metadata/Metadata.d.ts'
import type { MetadataListFilter } from '../../../../../org/apache/tika/metadata/listfilter/MetadataListFilter.d.ts'
import type { Element } from '../../../../../org/w3c/dom/Element.d.ts'
export class NoOpListFilter extends MetadataListFilter {
    static load(paramarg0: Element, paramarg1: boolean): MetadataListFilter;
    constructor()
    filter(arg0: Metadata[]): Metadata[];
}