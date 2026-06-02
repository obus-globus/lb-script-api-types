import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { ConfigBase } from '../../../../../org/apache/tika/config/ConfigBase.d.ts'
import type { Metadata } from '../../../../../org/apache/tika/metadata/Metadata.d.ts'
import type { Element } from '../../../../../org/w3c/dom/Element.d.ts'
export abstract class MetadataFilter extends ConfigBase implements Serializable {
    static load(paramarg0: Element, paramarg1: boolean): MetadataFilter;
    constructor()
    filter(arg0: Metadata): void;
}