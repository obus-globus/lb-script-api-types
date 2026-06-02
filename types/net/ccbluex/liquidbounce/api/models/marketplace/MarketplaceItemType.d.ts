import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
export class MarketplaceItemType extends Enum<MarketplaceItemType> implements Tagged {
    static CONFIG: MarketplaceItemType;
    static Companion: Tagged$Companion;
    static OTHER: MarketplaceItemType;
    static SCRIPT: MarketplaceItemType;
    static THEME: MarketplaceItemType;
    static getEntries(): MarketplaceItemType[];
    static makeLookupTable(paramarg0: (Object | null)[]): { [key: string]: Object | null };
    static of(paramarg0: string): Tagged;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): MarketplaceItemType;
    static values(): (Object | null)[];
    private constructor(tag: string, isListable: boolean, isSubscribable: boolean)
    // private isListable: boolean;
    /*not mapped: */ isListable(): boolean;
    // private isSubscribable: boolean;
    /*not mapped: */ isSubscribable(): boolean;
    readonly tag: string;
    reload(): void;
    name(): "CONFIG" | "SCRIPT" | "THEME" | "OTHER";
}