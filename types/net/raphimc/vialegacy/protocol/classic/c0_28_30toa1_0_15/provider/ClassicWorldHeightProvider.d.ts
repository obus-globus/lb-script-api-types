import type { UserConnection } from '../../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { Provider } from '../../../../../../../com/viaversion/viaversion/api/platform/providers/Provider.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class ClassicWorldHeightProvider extends Object implements Provider {
    constructor()
    getMaxChunkSectionCount(arg0: UserConnection): number;
}