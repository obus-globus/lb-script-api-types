import type { Throwable } from '../../java/lang/Throwable.d.ts'
import type { SerializationException } from '../../kotlinx/serialization/SerializationException.d.ts'
export class MissingFieldException extends SerializationException {
    constructor(missingField: string)
    constructor(missingField: string, serialName: string)
    private constructor(message: string | null, cause: Throwable | null, missingFields: string[], serialName: string | null)
    constructor(missingFields: string[], serialName: string)
    constructor(missingFields: string[], message: string | null, cause: Throwable | null)
    readonly missingFields: string[];
    readonly serialName: string | null;
    withNewMessageInternal(newMessage: string): MissingFieldException;
}