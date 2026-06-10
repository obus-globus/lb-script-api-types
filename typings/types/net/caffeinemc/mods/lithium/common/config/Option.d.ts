import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { LithiumConfig } from '../../../../../../net/caffeinemc/mods/lithium/common/config/LithiumConfig.d.ts'
import type { Logger } from '../../../../../../org/apache/logging/log4j/Logger.d.ts'
export class Option extends Object {
    constructor(arg0: string, arg1: boolean, arg2: boolean)
    // private dependencies: Object2BooleanLinkedOpenHashMap<Option>;
    readonly enabled: boolean;
    readonly modDefined: string[];
    readonly name: string;
    readonly userDefined: boolean;
    addDependency(arg0: Option, arg1: boolean): void;
    addModOverride(arg0: boolean, arg1: string): void;
    clearModsDefiningValue(): void;
    disableIfDependenciesNotMet(arg0: Logger, arg1: LithiumConfig): boolean;
    getDefiningMods(): string[];
    getName(): string;
    isEnabled(): boolean;
    isEnabledRecursive(arg0: LithiumConfig): boolean;
    isModDefined(): boolean;
    isOverridden(): boolean;
    isUserDefined(): boolean;
    setEnabled(arg0: boolean, arg1: boolean): void;
}