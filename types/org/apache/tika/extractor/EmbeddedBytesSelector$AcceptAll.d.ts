import type { Object } from '../../../../java/lang/Object.d.ts'
import type { EmbeddedBytesSelector } from '../../../../org/apache/tika/extractor/EmbeddedBytesSelector.d.ts'
import type { Metadata } from '../../../../org/apache/tika/metadata/Metadata.d.ts'
export class EmbeddedBytesSelector$AcceptAll extends Object implements EmbeddedBytesSelector {
    static ACCEPT_ALL: EmbeddedBytesSelector;
    constructor()
    select(arg0: Metadata): boolean;
}