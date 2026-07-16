import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class EmbeddedDocumentBytesConfig$SUFFIX_STRATEGY extends Enum<EmbeddedDocumentBytesConfig$SUFFIX_STRATEGY> {
    static DETECTED: EmbeddedDocumentBytesConfig$SUFFIX_STRATEGY;
    static EXISTING: EmbeddedDocumentBytesConfig$SUFFIX_STRATEGY;
    static NONE: EmbeddedDocumentBytesConfig$SUFFIX_STRATEGY;
    static parse(paramarg0: string): EmbeddedDocumentBytesConfig$SUFFIX_STRATEGY;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): EmbeddedDocumentBytesConfig$SUFFIX_STRATEGY;
    static values(): EmbeddedDocumentBytesConfig$SUFFIX_STRATEGY[];
    private constructor()
    name(): "NONE" | "EXISTING" | "DETECTED";
}