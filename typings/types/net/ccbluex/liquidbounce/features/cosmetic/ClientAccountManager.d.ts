import type { ClientAccount } from '../../../../../net/ccbluex/liquidbounce/api/models/auth/ClientAccount.d.ts'
import type { Config } from '../../../../../net/ccbluex/liquidbounce/config/types/Config.d.ts'
export class ClientAccountManager extends Config {
    static INSTANCE: ClientAccountManager;
    clientAccount: ClientAccount;
}