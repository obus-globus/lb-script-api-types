import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { AddressCheck } from '../../../../../net/minecraft/client/multiplayer/resolver/AddressCheck.d.ts'
import type { ResolvedServerAddress } from '../../../../../net/minecraft/client/multiplayer/resolver/ResolvedServerAddress.d.ts'
import type { ServerAddress } from '../../../../../net/minecraft/client/multiplayer/resolver/ServerAddress.d.ts'
import type { ServerAddressResolver } from '../../../../../net/minecraft/client/multiplayer/resolver/ServerAddressResolver.d.ts'
import type { ServerRedirectHandler } from '../../../../../net/minecraft/client/multiplayer/resolver/ServerRedirectHandler.d.ts'
export class ServerNameResolver extends Object {
    static DEFAULT: ServerNameResolver;
    constructor(resolver: (param0: ServerAddress) => Optional<ResolvedServerAddress>, redirectHandler: (param0: ServerAddress) => Optional<ServerAddress>, addressCheck: AddressCheck)
    // private addressCheck: AddressCheck;
    redirectHandler: (param0: ServerAddress) => Optional<ServerAddress>;
    // private resolver: (param0: ServerAddress) => Optional<ResolvedServerAddress>;
    resolveAddress(address: ServerAddress): Optional<ResolvedServerAddress>;
}