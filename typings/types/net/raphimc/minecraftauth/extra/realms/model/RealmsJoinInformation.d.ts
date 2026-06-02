import type { JsonObject } from '../../../../../../com/google/gson/JsonObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../../java/util/Map$Entry.d.ts'
import type { GsonElement } from '../../../../../../net/lenni0451/commons/gson/elements/GsonElement.d.ts'
export class RealmsJoinInformation extends Object {
    static PROTOCOL_DEFAULT: string;
    static PROTOCOL_NETHERNET: string;
    static PROTOCOL_NETHERNET_JSONRPC: string;
    static fromApiJson(paramarg0: Map$Entry<string, GsonElement>[]): RealmsJoinInformation;
    constructor(arg0: string, arg1: string, arg2: JsonObject)
    readonly address: string;
    readonly networkProtocol: string;
    readonly rawResponse: JsonObject;
    equals(arg0: Object | null): boolean;
    getAddress(): string;
    getNetworkProtocol(): string;
    getRawResponse(): JsonObject;
    hashCode(): number;
    toString(): string;
}