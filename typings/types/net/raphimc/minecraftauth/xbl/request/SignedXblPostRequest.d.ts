import type { JsonObject } from '../../../../../com/google/gson/JsonObject.d.ts'
import type { BigInteger } from '../../../../../java/math/BigInteger.d.ts'
import type { URL } from '../../../../../java/net/URL.d.ts'
import type { ECPrivateKey } from '../../../../../java/security/interfaces/ECPrivateKey.d.ts'
import type { ECPublicKey } from '../../../../../java/security/interfaces/ECPublicKey.d.ts'
import type { PostRequest } from '../../../../../net/lenni0451/commons/httpclient/requests/impl/PostRequest.d.ts'
export abstract class SignedXblPostRequest extends PostRequest {
    constructor(arg0: URL)
    constructor(arg0: string)
    appendSignatureHeader(arg0: ECPrivateKey): void;
    // private bigIntegerToByteArray(arg0: BigInteger): number[];
    // private encodeEcCoordinate(arg0: number, arg1: BigInteger): string;
    getProofKey(arg0: ECPublicKey): JsonObject;
}