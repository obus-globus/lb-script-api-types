import type { JsonException } from '../../../kotlinx/serialization/json/JsonException.d.ts'
export class JsonDecodingException extends JsonException {
    constructor(fullMessage: string, shortMessage: string, offset: number, path: string | null, input: string | null, hint: string | null)
    readonly hint: string | null;
    readonly input: string | null;
    readonly offset: number;
    readonly path: string | null;
    readonly shortMessage: string;
}