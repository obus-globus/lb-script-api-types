import type { JacksonException } from '../../../../../../com/azure/json/implementation/jackson/core/JacksonException.d.ts'
import type { JsonLocation } from '../../../../../../com/azure/json/implementation/jackson/core/JsonLocation.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../../java/lang/Throwable.d.ts'
export class JsonProcessingException extends JacksonException {
    constructor(arg0: string)
    constructor(arg0: string, arg1: JsonLocation)
    constructor(arg0: string, arg1: JsonLocation, arg2: Throwable)
    constructor(arg0: string, arg1: Throwable)
    constructor(arg0: Throwable)
    // private _location: JsonLocation;
    readonly message: string | null;
    getLocation(): JsonLocation;
    getMessageSuffix(): string;
    getProcessor(): Object;
    toString(): string;
}