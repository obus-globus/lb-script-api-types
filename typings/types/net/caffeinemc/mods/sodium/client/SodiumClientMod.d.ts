import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { SodiumOptions } from '../../../../../net/caffeinemc/mods/sodium/client/gui/SodiumOptions.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { Logger } from '../../../../../org/slf4j/Logger.d.ts'
export class SodiumClientMod extends Object {
    static SODIUM_DEBUG_ENTRY_FULL: Identifier;
    static SODIUM_DEBUG_ENTRY_REDUCED: Identifier;
    static SODIUM_FPS_PERCENTILES: Identifier;
    static allowDebuggingOptions(): boolean;
    static getVersion(): string;
    static logger(): Logger;
    static onInitialization(paramarg0: string): void;
    static options(): SodiumOptions;
    static restoreDefaultOptions(): void;
    constructor()
}