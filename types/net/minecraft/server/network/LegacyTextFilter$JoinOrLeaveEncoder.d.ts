import type { JsonObject } from '../../../../com/google/gson/JsonObject.d.ts'
import type { GameProfile } from '../../../../com/mojang/authlib/GameProfile.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface LegacyTextFilter$JoinOrLeaveEncoder extends Object{
    encode(profile: GameProfile): JsonObject;
}