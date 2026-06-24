import type { JsonException } from '../../../kotlinx/serialization/json/JsonException.d.ts'
export class JsonEncodingException extends JsonException {
    constructor(shortMessage: string, classSerialName: string | null, hint: string | null)
    readonly classSerialName: string | null;
    readonly hint: string | null;
    readonly shortMessage: string;
}