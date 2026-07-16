import type { Object } from '../../../java/lang/Object.d.ts'
import type { PKCS7 } from '../../../sun/security/pkcs/PKCS7.d.ts'
import type { TimestampToken } from '../../../sun/security/timestamp/TimestampToken.d.ts'
export class TSResponse extends Object {
    static ADD_INFO_NOT_AVAILABLE: number;
    static BAD_ALG: number;
    static BAD_DATA_FORMAT: number;
    static BAD_REQUEST: number;
    static GRANTED: number;
    static GRANTED_WITH_MODS: number;
    static REJECTION: number;
    static REVOCATION_NOTIFICATION: number;
    static REVOCATION_WARNING: number;
    static SYSTEM_FAILURE: number;
    static TIME_NOT_AVAILABLE: number;
    static UNACCEPTED_EXTENSION: number;
    static UNACCEPTED_POLICY: number;
    static WAITING: number;
    constructor(arg0: number[])
    // private encodedTsToken: number[];
    readonly failureInfo: boolean[];
    // private status: number;
    // private statusString: string[];
    // private tsToken: PKCS7;
    // private tstInfo: TimestampToken;
    getEncodedToken(): number[];
    getFailureCodeAsText(): string;
    getFailureInfo(): boolean[];
    getStatusCode(): number;
    getStatusCodeAsText(): string;
    getStatusMessages(): string[];
    getTimestampToken(): TimestampToken;
    getToken(): PKCS7;
    // private isSet(arg0: number): boolean;
    // private parse(arg0: number[]): void;
}