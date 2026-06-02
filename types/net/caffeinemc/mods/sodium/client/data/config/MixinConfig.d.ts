import type { File } from '../../../../../../../java/io/File.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { PlatformMixinOverrides$MixinOverride } from '../../../../../../../net/caffeinemc/mods/sodium/client/services/PlatformMixinOverrides$MixinOverride.d.ts'
import type { MixinOption } from '../../../../../../../net/caffeinemc/mods/sodium/mixin/MixinOption.d.ts'
export class MixinConfig extends Object {
    static load(paramarg0: File): MixinConfig;
    constructor()
    // private options: { [key: string]: MixinOption };
    // private addMixinRule(arg0: string, arg1: boolean): void;
    applyModOverride(arg0: PlatformMixinOverrides$MixinOverride): void;
    getEffectiveOptionForMixin(arg0: string): MixinOption;
    getOptionCount(): number;
    getOptionOverrideCount(): number;
    // private readProperties(arg0: Properties): void;
}