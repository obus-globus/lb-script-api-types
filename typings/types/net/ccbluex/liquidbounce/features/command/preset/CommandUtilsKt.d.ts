import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ClientAccount } from '../../../../../../net/ccbluex/liquidbounce/api/models/auth/ClientAccount.d.ts'
import type { ClientAccountManager } from '../../../../../../net/ccbluex/liquidbounce/features/cosmetic/ClientAccountManager.d.ts'
export class CommandUtilsKt extends Object {
    static accountOrException(self: ClientAccountManager): ClientAccount;
}