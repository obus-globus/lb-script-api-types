import type { RealmsAvailability$Result } from '../../../com/mojang/realmsclient/RealmsAvailability$Result.d.ts'
import type { CompletableFuture } from '../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MixinRealmsAvailabilityAccessor } from '../../../net/ccbluex/liquidbounce/injection/mixins/realms/MixinRealmsAvailabilityAccessor.d.ts'
export class RealmsAvailability extends Object implements MixinRealmsAvailabilityAccessor {
    static get(): CompletableFuture<RealmsAvailability$Result>;
    constructor()
}