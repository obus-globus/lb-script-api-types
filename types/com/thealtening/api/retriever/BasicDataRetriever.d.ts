import type { Gson } from '../../../../com/google/gson/Gson.d.ts'
import type { JsonElement } from '../../../../com/google/gson/JsonElement.d.ts'
import type { JsonObject } from '../../../../com/google/gson/JsonObject.d.ts'
import type { Account } from '../../../../com/thealtening/api/response/Account.d.ts'
import type { License } from '../../../../com/thealtening/api/response/License.d.ts'
import type { AsynchronousDataRetriever } from '../../../../com/thealtening/api/retriever/AsynchronousDataRetriever.d.ts'
import type { DataRetriever } from '../../../../com/thealtening/api/retriever/DataRetriever.d.ts'
import type { Logger } from '../../../../java/util/logging/Logger.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class BasicDataRetriever extends Object implements DataRetriever {
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
    // private apiKey: string;
    connect(arg0: string): string;
    getAccount(): Account;
    getFavoriteAccounts(): Account[];
    getLicense(): License;
    getPrivatedAccounts(): Account[];
    isFavorite(arg0: string): boolean;
    isPrivate(arg0: string): boolean;
    isSuccess(arg0: JsonObject): boolean;
    retrieveData(arg0: string): JsonElement;
    toAsync(): AsynchronousDataRetriever;
    updateKey(arg0: string): void;
}