import type { Gson } from '../../../../../com/google/gson/Gson.d.ts'
import type { BCServerInfo } from '../../../../../de/florianreuth/classic4j/model/betacraft/BCServerInfo.d.ts'
import type { BCVersionCategory } from '../../../../../de/florianreuth/classic4j/model/betacraft/BCVersionCategory.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { URI } from '../../../../../java/net/URI.d.ts'
import type { HttpClient } from '../../../../../java/net/http/HttpClient.d.ts'
import type { CompletableFuture } from '../../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class BCServerList extends Record {
    static get(paramarg0: HttpClient, paramarg1: Gson, paramarg2: URI, paramarg3: Class<Object>): CompletableFuture<BCServerList>;
    constructor(servers: BCServerInfo[])
    // private servers: BCServerInfo[];
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    servers(): BCServerInfo[];
    serversOfVersionCategory(arg0: BCVersionCategory): BCServerInfo[];
    serversWithOnlineMode(arg0: boolean): BCServerInfo[];
    toString(): string;
    withConnectVersion(arg0: string): BCServerInfo[];
}