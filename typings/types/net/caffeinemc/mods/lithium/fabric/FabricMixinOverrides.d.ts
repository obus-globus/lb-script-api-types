import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Option } from '../../../../../net/caffeinemc/mods/lithium/common/config/Option.d.ts'
import type { PlatformMixinOverrides } from '../../../../../net/caffeinemc/mods/lithium/common/services/PlatformMixinOverrides.d.ts'
import type { PlatformMixinOverrides$MixinOverride } from '../../../../../net/caffeinemc/mods/lithium/common/services/PlatformMixinOverrides$MixinOverride.d.ts'
export class FabricMixinOverrides extends Object implements PlatformMixinOverrides {
    static INSTANCE: PlatformMixinOverrides;
    constructor()
    applyLithiumCompat(arg0: { [key: string]: Option }): void;
    applyModOverrides(): PlatformMixinOverrides$MixinOverride[];
}