import type { GameProfile } from '../../../../../../../com/viaversion/viaversion/api/minecraft/GameProfile.d.ts'
import type { UUID } from '../../../../../../../java/util/UUID.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class TabListEntry extends Object {
    constructor(arg0: GameProfile)
    constructor(arg0: string, arg1: UUID)
    constructor(arg0: string, arg1: number)
    readonly gameProfile: GameProfile;
    readonly ping: number;
    getGameProfile(): GameProfile;
    getPing(): number;
    setPing(arg0: number): void;
}