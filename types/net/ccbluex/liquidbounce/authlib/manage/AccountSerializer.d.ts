import type { JsonObject } from '../../../../../com/google/gson/JsonObject.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { MinecraftAccount } from '../../../../../net/ccbluex/liquidbounce/authlib/account/MinecraftAccount.d.ts'
export class AccountSerializer extends Object {
    static INSTANCE: AccountSerializer;
    accountInstance(name: string): MinecraftAccount;
    fromJson(json: JsonObject): MinecraftAccount;
    toJson(account: MinecraftAccount): JsonObject;
}