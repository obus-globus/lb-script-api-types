import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class CompressionConfig$Mode extends Enum<CompressionConfig$Mode> {
    static All: CompressionConfig$Mode;
    static CompressResponse: CompressionConfig$Mode;
    static DecompressRequest: CompressionConfig$Mode;
    static getEntries(): CompressionConfig$Mode[];
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): CompressionConfig$Mode;
    static values(): CompressionConfig$Mode[];
    private constructor(request: boolean, response: boolean)
    // private request: boolean;
    /*not mapped: */ getRequest$ktor_server_compression(): boolean;
    // private response: boolean;
    /*not mapped: */ getResponse$ktor_server_compression(): boolean;
    name(): "CompressResponse" | "DecompressRequest" | "All";
}