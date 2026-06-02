import type { Object } from '../../../java/lang/Object.d.ts'
export class CborConfiguration extends Object {
    constructor(encodeDefaults: boolean, ignoreUnknownKeys: boolean, encodeKeyTags: boolean, encodeValueTags: boolean, encodeObjectTags: boolean, verifyKeyTags: boolean, verifyValueTags: boolean, verifyObjectTags: boolean, useDefiniteLengthEncoding: boolean, preferCborLabelsOverNames: boolean, alwaysUseByteString: boolean)
    readonly alwaysUseByteString: boolean;
    readonly encodeDefaults: boolean;
    readonly encodeKeyTags: boolean;
    readonly encodeObjectTags: boolean;
    readonly encodeValueTags: boolean;
    readonly ignoreUnknownKeys: boolean;
    readonly preferCborLabelsOverNames: boolean;
    readonly useDefiniteLengthEncoding: boolean;
    readonly verifyKeyTags: boolean;
    readonly verifyObjectTags: boolean;
    readonly verifyValueTags: boolean;
    toString(): string;
}