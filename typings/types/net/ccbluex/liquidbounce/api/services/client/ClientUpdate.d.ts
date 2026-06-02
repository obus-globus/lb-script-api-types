import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Deferred } from '../../../../../../kotlinx/coroutines/Deferred.d.ts'
import type { Build } from '../../../../../../net/ccbluex/liquidbounce/api/models/client/Build.d.ts'
export class ClientUpdate extends Object {
    static INSTANCE: ClientUpdate;
    readonly update: Deferred<Build>;
}