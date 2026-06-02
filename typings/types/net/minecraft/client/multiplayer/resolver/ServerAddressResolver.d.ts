import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ResolvedServerAddress } from '../../../../../net/minecraft/client/multiplayer/resolver/ResolvedServerAddress.d.ts'
import type { ServerAddress } from '../../../../../net/minecraft/client/multiplayer/resolver/ServerAddress.d.ts'
export interface ServerAddressResolver extends Object{
    resolve(address: ServerAddress): Optional<ResolvedServerAddress>;
}