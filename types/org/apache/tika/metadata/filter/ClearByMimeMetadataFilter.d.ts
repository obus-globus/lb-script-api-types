import type { Metadata } from '../../../../../org/apache/tika/metadata/Metadata.d.ts'
import type { MetadataFilter } from '../../../../../org/apache/tika/metadata/filter/MetadataFilter.d.ts'
import type { Element } from '../../../../../org/w3c/dom/Element.d.ts'
export class ClearByMimeMetadataFilter extends MetadataFilter {
    static load(paramarg0: Element, paramarg1: boolean): MetadataFilter;
    constructor()
    constructor(arg0: string[])
    readonly mimes: string[];
    filter(arg0: Metadata): void;
    getMimes(): string[];
    setMimes(arg0: string[]): void;
}