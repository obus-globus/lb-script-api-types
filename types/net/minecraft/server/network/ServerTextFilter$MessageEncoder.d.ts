import type { JsonObject } from '../../../../com/google/gson/JsonObject.d.ts'
import type { GameProfile } from '../../../../com/mojang/authlib/GameProfile.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface ServerTextFilter$MessageEncoder extends Object{
    encode(profile: GameProfile, message: string): JsonObject;
}