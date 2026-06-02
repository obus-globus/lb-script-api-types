import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class EmbeddedDocumentBytesConfig$SUFFIX_STRATEGY extends Enum<EmbeddedDocumentBytesConfig$SUFFIX_STRATEGY> {
    static DETECTED: EmbeddedDocumentBytesConfig$SUFFIX_STRATEGY;
    static EXISTING: EmbeddedDocumentBytesConfig$SUFFIX_STRATEGY;
    static NONE: EmbeddedDocumentBytesConfig$SUFFIX_STRATEGY;
    static parse(paramarg0: string): EmbeddedDocumentBytesConfig$SUFFIX_STRATEGY;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): EmbeddedDocumentBytesConfig$SUFFIX_STRATEGY;
    static values(): (Object | null)[];
    private constructor()
    name(): "NONE" | "EXISTING" | "DETECTED";
}