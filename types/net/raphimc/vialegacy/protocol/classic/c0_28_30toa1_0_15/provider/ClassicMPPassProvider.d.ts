import type { UserConnection } from '../../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { Provider } from '../../../../../../../com/viaversion/viaversion/api/platform/providers/Provider.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class ClassicMPPassProvider extends Object implements Provider {
    constructor()
    getMpPass(arg0: UserConnection): string;
}