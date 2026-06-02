import type { Object } from '../../../../java/lang/Object.d.ts'
import type { EmbeddedBytesSelector } from '../../../../org/apache/tika/extractor/EmbeddedBytesSelector.d.ts'
import type { Metadata } from '../../../../org/apache/tika/metadata/Metadata.d.ts'
export class BasicEmbeddedBytesSelector extends Object implements EmbeddedBytesSelector {
    static ACCEPT_ALL: EmbeddedBytesSelector;
    constructor(arg0: string[], arg1: string[], arg2: string[], arg3: string[])
    // private excludeEmbeddedResourceTypes: string[];
    // private excludeMimes: string[];
    // private includeEmbeddedResourceTypes: string[];
    // private includeMimes: string[];
    select(arg0: Metadata): boolean;
}