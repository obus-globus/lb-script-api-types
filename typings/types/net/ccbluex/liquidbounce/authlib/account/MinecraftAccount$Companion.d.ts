import type { JsonObject } from '../../../../../com/google/gson/JsonObject.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { MinecraftAccount } from '../../../../../net/ccbluex/liquidbounce/authlib/account/MinecraftAccount.d.ts'
export class MinecraftAccount$Companion extends Object {
    // private SERIAL_NAME_TO_TYPE: { [key: string]: Class<MinecraftAccount> };
    // private TYPE_TO_SERIAL_NAME: Map<Class<MinecraftAccount>, string>;
    fromJson(json: JsonObject): MinecraftAccount;
    fromName(name: string): MinecraftAccount;
}