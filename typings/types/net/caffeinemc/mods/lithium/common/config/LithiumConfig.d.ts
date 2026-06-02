import type { File } from '../../../../../../java/io/File.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Option } from '../../../../../../net/caffeinemc/mods/lithium/common/config/Option.d.ts'
import type { PlatformMixinOverrides$MixinOverride } from '../../../../../../net/caffeinemc/mods/lithium/common/services/PlatformMixinOverrides$MixinOverride.d.ts'
export class LithiumConfig extends Object {
    static load(paramarg0: File): LithiumConfig;
    private constructor()
    // private options: { [key: string]: Option };
    // private optionsWithDependencies: Option[];
    // private addMixinRule(arg0: string, arg1: boolean): void;
    // private addRuleDependency(arg0: string, arg1: string, arg2: boolean): void;
    // private applyDependencies(): void;
    // private applyDependenciesOnce(): boolean;
    applyModOverride(arg0: PlatformMixinOverrides$MixinOverride): void;
    getEffectiveOptionForMixin(arg0: string): Option;
    getOptionCount(): number;
    getOptionOverrideCount(): number;
    getParent(arg0: Option): Option;
    isOptionEnabled(arg0: string): boolean;
    // private readProperties(arg0: Properties): void;
}