import type { Metadata } from '../../../../../org/apache/tika/metadata/Metadata.d.ts'
import type { MetadataFilter } from '../../../../../org/apache/tika/metadata/filter/MetadataFilter.d.ts'
import type { Element } from '../../../../../org/w3c/dom/Element.d.ts'
export class GeoPointMetadataFilter extends MetadataFilter {
    static load(paramarg0: Element, paramarg1: boolean): MetadataFilter;
    constructor()
    geoPointFieldName: string;
    filter(arg0: Metadata): void;
    getGeoPointFieldName(): string;
    setGeoPointFieldName(arg0: string): void;
}