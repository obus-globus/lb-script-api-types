import type { Exception } from '../../../../../java/lang/Exception.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
import type { JsonReader } from '../../../../../net/fabricmc/loader/impl/lib/gson/JsonReader.d.ts'
export class ParseMetadataException extends Exception {
    constructor(arg0: string)
    constructor(arg0: string, arg1: Throwable)
    constructor(arg0: string, arg1: JsonReader)
    constructor(arg0: Throwable)
    readonly message: string | null;
    // private modPaths: string[];
    setModPaths(arg0: string, arg1: string[]): void;
}