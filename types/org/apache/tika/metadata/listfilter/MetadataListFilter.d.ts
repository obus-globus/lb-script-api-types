import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { ConfigBase } from '../../../../../org/apache/tika/config/ConfigBase.d.ts'
import type { Metadata } from '../../../../../org/apache/tika/metadata/Metadata.d.ts'
import type { Element } from '../../../../../org/w3c/dom/Element.d.ts'
export abstract class MetadataListFilter extends ConfigBase implements Serializable {
    static load(paramarg0: Element, paramarg1: boolean): MetadataListFilter;
    constructor()
    filter(arg0: Metadata[]): Metadata[];
}