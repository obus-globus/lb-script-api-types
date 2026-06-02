import type { GameProfile } from '../../../../../../../com/mojang/authlib/GameProfile.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export interface ClientConfigurationPacketListenerImplAccessor extends Object{
    getLocalGameProfile(): GameProfile;
}