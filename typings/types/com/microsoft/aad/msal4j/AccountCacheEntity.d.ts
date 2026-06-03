import type { JsonReader } from '../../../../com/azure/json/JsonReader.d.ts'
import type { JsonSerializable } from '../../../../com/azure/json/JsonSerializable.d.ts'
import type { JsonWriter } from '../../../../com/azure/json/JsonWriter.d.ts'
import type { ClientInfo } from '../../../../com/microsoft/aad/msal4j/ClientInfo.d.ts'
import type { IAccount } from '../../../../com/microsoft/aad/msal4j/IAccount.d.ts'
import type { InputStream } from '../../../../java/io/InputStream.d.ts'
import type { OutputStream } from '../../../../java/io/OutputStream.d.ts'
import type { Reader } from '../../../../java/io/Reader.d.ts'
import type { Serializable } from '../../../../java/io/Serializable.d.ts'
import type { Writer } from '../../../../java/io/Writer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class AccountCacheEntity extends Object implements JsonSerializable<AccountCacheEntity>, Serializable {
    static fromJson(paramarg0: number[]): Object | null;
    static fromJson(paramarg0: JsonReader): Object | null;
    static fromJson(paramarg0: InputStream): Object | null;
    static fromJson(paramarg0: Reader): Object | null;
    static fromJson(paramarg0: string): Object | null;
    constructor()
    // private authorityType: string;
    // private clientInfoStr: string;
    // private environment: string;
    // private homeAccountId: string;
    // private localAccountId: string;
    // private name: string;
    // private realm: string;
    // private userAssertionHash: string;
    // private username: string;
    authorityType(): string;
    authorityType(arg0: string): void;
    clientInfo(): ClientInfo;
    clientInfoStr(): string;
    clientInfoStr(arg0: string): void;
    environment(): string;
    environment(arg0: string): void;
    equals(arg0: Object | null): boolean;
    getKey(): string;
    hashCode(): number;
    homeAccountId(): string;
    homeAccountId(arg0: string): void;
    localAccountId(): string;
    localAccountId(arg0: string): void;
    name(): string;
    name(arg0: string): void;
    realm(): string;
    realm(arg0: string): void;
    toAccount(): IAccount;
    toJson(arg0: OutputStream): void;
    toJson(arg0: Writer): void;
    toJson(arg0: JsonWriter): JsonWriter;
    toJson(arg0: OutputStream): void;
    toJson(arg0: Writer): void;
    toJsonBytes(): number[];
    toJsonString(): string;
    userAssertionHash(): string;
    userAssertionHash(arg0: string): void;
    username(): string;
    username(arg0: string): void;
}