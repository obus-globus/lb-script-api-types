import type { Base64Variant } from '../../../../../../com/azure/json/implementation/jackson/core/Base64Variant.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class Base64Variants extends Object {
    static MIME: Base64Variant;
    static MIME_NO_LINEFEEDS: Base64Variant;
    static MODIFIED_FOR_URL: Base64Variant;
    static PEM: Base64Variant;
    static getDefaultVariant(): Base64Variant;
    static valueOf(paramarg0: string): Base64Variant;
    constructor()
}