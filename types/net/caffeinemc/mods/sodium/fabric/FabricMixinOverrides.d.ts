import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { PlatformMixinOverrides } from '../../../../../net/caffeinemc/mods/sodium/client/services/PlatformMixinOverrides.d.ts'
import type { PlatformMixinOverrides$MixinOverride } from '../../../../../net/caffeinemc/mods/sodium/client/services/PlatformMixinOverrides$MixinOverride.d.ts'
export class FabricMixinOverrides extends Object implements PlatformMixinOverrides {
    static INSTANCE: PlatformMixinOverrides;
    static getInstance(): PlatformMixinOverrides;
    constructor()
    applyModOverrides(): PlatformMixinOverrides$MixinOverride[];
}