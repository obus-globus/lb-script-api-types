import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ServerAddress } from '../../../../../net/minecraft/client/multiplayer/resolver/ServerAddress.d.ts'
export interface ServerRedirectHandler extends Object{
    lookupRedirect(originalAddress: ServerAddress): Optional<ServerAddress>;
}