import type { GameProfile } from '../../../../com/mojang/authlib/GameProfile.d.ts'
import type { MinecraftProfileTextures } from '../../../../com/mojang/authlib/minecraft/MinecraftProfileTextures.d.ts'
import type { Property } from '../../../../com/mojang/authlib/properties/Property.d.ts'
import type { ProfileResult } from '../../../../com/mojang/authlib/yggdrasil/ProfileResult.d.ts'
import type { InetAddress } from '../../../../java/net/InetAddress.d.ts'
import type { UUID } from '../../../../java/util/UUID.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface MinecraftSessionService extends Object{
    fetchProfile(arg0: UUID, arg1: boolean): ProfileResult;
    getPackedTextures(arg0: GameProfile): Property;
    getSecurePropertyValue(arg0: Property): string;
    getTextures(arg0: GameProfile): MinecraftProfileTextures;
    hasJoinedServer(arg0: string, arg1: string, arg2: InetAddress): ProfileResult;
    joinServer(arg0: UUID, arg1: string, arg2: string): void;
    unpackTextures(arg0: Property): MinecraftProfileTextures;
}