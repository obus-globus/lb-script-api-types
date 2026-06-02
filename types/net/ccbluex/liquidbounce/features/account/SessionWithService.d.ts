import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { UUID } from '../../../../../java/util/UUID.d.ts'
import type { AccountService } from '../../../../../net/ccbluex/liquidbounce/features/account/AccountService.d.ts'
import type { SessionWithService$Companion } from '../../../../../net/ccbluex/liquidbounce/features/account/SessionWithService$Companion.d.ts'
import type { User } from '../../../../../net/minecraft/client/User.d.ts'
export class SessionWithService extends User {
    static Companion: SessionWithService$Companion;
    constructor(username: string, uuid: UUID, accessToken: string, xuid: Optional<string>, clientId: Optional<string>, service: AccountService)
    readonly service: AccountService;
}