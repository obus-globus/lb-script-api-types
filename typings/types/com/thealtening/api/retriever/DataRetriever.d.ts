import type { JsonElement } from '../../../../com/google/gson/JsonElement.d.ts'
import type { JsonObject } from '../../../../com/google/gson/JsonObject.d.ts'
import type { Account } from '../../../../com/thealtening/api/response/Account.d.ts'
import type { License } from '../../../../com/thealtening/api/response/License.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface DataRetriever extends Object{
    connect(arg0: string): string;
    getAccount(): Account;
    getFavoriteAccounts(): Account[];
    getLicense(): License;
    getPrivatedAccounts(): Account[];
    isFavorite(arg0: string): boolean;
    isPrivate(arg0: string): boolean;
    isSuccess(arg0: JsonObject): boolean;
    retrieveData(arg0: string): JsonElement;
    updateKey(arg0: string): void;
}