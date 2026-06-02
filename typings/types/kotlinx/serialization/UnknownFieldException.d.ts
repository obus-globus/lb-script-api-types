import type { SerializationException } from '../../kotlinx/serialization/SerializationException.d.ts'
export class UnknownFieldException extends SerializationException {
    constructor(index: number)
    constructor(message: string | null)
}