import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Metadata } from '../../../../../org/apache/tika/metadata/Metadata.d.ts'
import type { MetadataFilter } from '../../../../../org/apache/tika/metadata/filter/MetadataFilter.d.ts'
import type { Element } from '../../../../../org/w3c/dom/Element.d.ts'
export class FieldNameMappingFilter extends MetadataFilter {
    static load(paramarg0: Element, paramarg1: boolean): MetadataFilter;
    constructor()
    excludeUnmapped: boolean;
    mappings: JavaMap<string, string>;
    filter(arg0: Metadata): void;
    getMappins(): JavaMap<string, string>;
    setExcludeUnmapped(arg0: boolean): void;
    setMappings(arg0: JavaMap<string, string>): void;
    toString(): string;
}