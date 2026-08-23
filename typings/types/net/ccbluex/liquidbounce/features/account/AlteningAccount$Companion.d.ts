import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { AlteningAccount } from '../../../../../net/ccbluex/liquidbounce/features/account/AlteningAccount.d.ts'
export class AlteningAccount$Companion extends Object {
    fromToken(accountToken: string): AlteningAccount;
    generateAccount(apiToken: string): AlteningAccount;
}