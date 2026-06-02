import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ClientAvatarState } from '../../../../net/minecraft/client/entity/ClientAvatarState.d.ts'
import type { Parrot$Variant } from '../../../../net/minecraft/world/entity/animal/parrot/Parrot$Variant.d.ts'
import type { PlayerSkin } from '../../../../net/minecraft/world/entity/player/PlayerSkin.d.ts'
export interface ClientAvatarEntity extends Object{
    avatarState(): ClientAvatarState;
    getParrotVariantOnShoulder(left: boolean): Parrot$Variant;
    getSkin(): PlayerSkin;
    showExtraEars(): boolean;
}