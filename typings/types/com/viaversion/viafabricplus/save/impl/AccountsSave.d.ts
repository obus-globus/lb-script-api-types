import type { Gson } from '../../../../../com/google/gson/Gson.d.ts'
import type { JsonObject } from '../../../../../com/google/gson/JsonObject.d.ts'
import type { AbstractSave } from '../../../../../com/viaversion/viafabricplus/save/AbstractSave.d.ts'
import type { AccountsSave$AccountConsumer } from '../../../../../com/viaversion/viafabricplus/save/impl/AccountsSave$AccountConsumer.d.ts'
import type { CCAccount } from '../../../../../de/florianreuth/classic4j/model/classicube/account/CCAccount.d.ts'
import type { BedrockAuthManager } from '../../../../../net/raphimc/minecraftauth/bedrock/BedrockAuthManager.d.ts'
export class AccountsSave extends AbstractSave {
    static GSON: Gson;
    constructor()
    readonly bedrockAccount: BedrockAuthManager;
    readonly classicubeAccount: CCAccount;
    getBedrockAccount(): BedrockAuthManager;
    getClassicubeAccount(): CCAccount;
    // private handleAccount(arg0: string, arg1: JsonObject, arg2: (param0: JsonObject) => void): void;
    read(arg0: JsonObject): void;
    setBedrockAccount(arg0: BedrockAuthManager): void;
    setClassicubeAccount(arg0: CCAccount): void;
    write(arg0: JsonObject): void;
}