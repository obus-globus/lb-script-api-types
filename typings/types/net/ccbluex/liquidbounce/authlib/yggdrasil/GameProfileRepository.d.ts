import type { UUID } from '../../../../../java/util/UUID.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { GameProfile } from '../../../../../net/ccbluex/liquidbounce/authlib/compat/GameProfile.d.ts'
import type { GameProfileRepository$Companion } from '../../../../../net/ccbluex/liquidbounce/authlib/yggdrasil/GameProfileRepository$Companion.d.ts'
export class GameProfileRepository extends Object {
    static Companion: GameProfileRepository$Companion;
    static DEFAULT_BASE_URL: string;
    static Default: GameProfileRepository;
    constructor()
    constructor(baseUrl: string)
    readonly baseUrl: string;
    fetchBySession(token: string): GameProfile;
    fetchUuidByUsername(username: string): UUID | null;
}