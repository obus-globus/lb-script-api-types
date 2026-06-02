import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { FRAPIProvider } from '../../../../../../../net/caffeinemc/mods/sodium/client/services/FRAPIProvider.d.ts'
export class SodiumProvider extends Object implements FRAPIProvider {
    static INSTANCE: FRAPIProvider;
    static getInstance(): FRAPIProvider;
    constructor()
    register(): void;
}