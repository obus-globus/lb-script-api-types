import type { Class } from '../../../../../../java/lang/Class.d.ts'
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
    static makeLookupTable<T extends Tagged>(self: T[]): { [key: string]: T };
    static of(self: string): Tagged;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): MarketplaceItemType;
    static values(): MarketplaceItemType[];
    private constructor(tag: string, isListable: boolean, isSubscribable: boolean)
    // private isListable: boolean;
    /*not mapped: */ isListable(): boolean;
    // private isSubscribable: boolean;
    /*not mapped: */ isSubscribable(): boolean;
    readonly tag: string;
    reload(): void;
    name(): "CONFIG" | "SCRIPT" | "THEME" | "OTHER";
}