import type { Gson } from '../../../../com/google/gson/Gson.d.ts'
import type { Account } from '../../../../com/thealtening/api/response/Account.d.ts'
import type { License } from '../../../../com/thealtening/api/response/License.d.ts'
import type { BasicDataRetriever } from '../../../../com/thealtening/api/retriever/BasicDataRetriever.d.ts'
import type { CompletableFuture } from '../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { Logger } from '../../../../java/util/logging/Logger.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class AsynchronousDataRetriever extends BasicDataRetriever {
    static BASE_URL: string;
    static FAVORITES_URL: string;
    static FAVORITE_ACC_URL: string;
    static GENERATE_URL: string;
    static LICENCE_URL: string;
    static LOGGER: Logger;
    static PRIVATES_URL: string;
    static PRIVATE_ACC_URL: string;
    static gson: Gson;
    constructor(arg0: string)
    // private completeTask<T extends Object | number | string | boolean>(arg0: (param0: BasicDataRetriever) => T): CompletableFuture<T>;
    getAccountDataAsync(): CompletableFuture<Account>;
    getFavoritedAccountsAsync(): CompletableFuture<Account[]>;
    getLicenseDataAsync(): CompletableFuture<License>;
    getPrivatedAccountsAsync(): CompletableFuture<Account[]>;
    isFavoriteAsync(arg0: string): CompletableFuture<boolean>;
    isPrivateAsync(arg0: string): CompletableFuture<boolean>;
}