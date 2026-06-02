import type { Metadata } from '../../../../../org/apache/tika/metadata/Metadata.d.ts'
import type { MetadataFilter } from '../../../../../org/apache/tika/metadata/filter/MetadataFilter.d.ts'
import type { Element } from '../../../../../org/w3c/dom/Element.d.ts'
export class NoOpFilter extends MetadataFilter {
    static NOOP_FILTER: NoOpFilter;
    static load(paramarg0: Element, paramarg1: boolean): MetadataFilter;
    constructor()
    filter(arg0: Metadata): void;
}