import type { SerializationException } from '../../../kotlinx/serialization/SerializationException.d.ts'
export class JsonException extends SerializationException {
    protected constructor(message: string)
    readonly hint: string | null;
    readonly message: string;
    readonly shortMessage: string;
}