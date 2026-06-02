import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { SearchIndex } from '../../../../../../../net/caffeinemc/mods/sodium/client/config/search/SearchIndex.d.ts'
import type { Searchable } from '../../../../../../../net/caffeinemc/mods/sodium/client/config/search/Searchable.d.ts'
import type { OptionOverlay } from '../../../../../../../net/caffeinemc/mods/sodium/client/config/structure/OptionOverlay.d.ts'
import type { OptionOverride } from '../../../../../../../net/caffeinemc/mods/sodium/client/config/structure/OptionOverride.d.ts'
import type { Page } from '../../../../../../../net/caffeinemc/mods/sodium/client/config/structure/Page.d.ts'
import type { ColorTheme } from '../../../../../../../net/caffeinemc/mods/sodium/client/gui/ColorTheme.d.ts'
import type { Identifier } from '../../../../../../../net/minecraft/resources/Identifier.d.ts'
export class ModOptions extends Record implements Searchable {
    // private configId: string;
    // private flagHooks: E[];
    // private icon: Identifier;
    // private iconMonochrome: boolean;
    // private name: string;
    // private overlays: OptionOverlay[];
    // private overrides: OptionOverride[];
    // private pages: Page[];
    // private theme: ColorTheme;
    // private version: string;
    configId(): string;
    equals(arg0: Object | null): boolean;
    flagHooks(): E[];
    hashCode(): number;
    icon(): Identifier;
    iconMonochrome(): boolean;
    name(): string;
    overlays(): OptionOverlay[];
    overrides(): OptionOverride[];
    pages(): Page[];
    registerTextSources(arg0: SearchIndex): void;
    theme(): ColorTheme;
    toString(): string;
    version(): string;
}