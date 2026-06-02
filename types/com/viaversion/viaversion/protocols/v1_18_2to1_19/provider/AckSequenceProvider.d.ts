import type { UserConnection } from '../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { Provider } from '../../../../../../com/viaversion/viaversion/api/platform/providers/Provider.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class AckSequenceProvider extends Object implements Provider {
    constructor()
    handleSequence(arg0: UserConnection, arg1: number): void;
}