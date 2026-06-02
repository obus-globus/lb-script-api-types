import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { AccountService } from '../../../../../net/ccbluex/liquidbounce/features/account/AccountService.d.ts'
import type { User } from '../../../../../net/minecraft/client/User.d.ts'
export class SessionWithService$Companion extends Object {
    getService(session: User): AccountService;
}