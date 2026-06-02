import type { ItemHoverEvent$DataHolder } from '../../../../../../../../../com/viaversion/viaversion/libs/mcstructs/text/events/hover/impl/ItemHoverEvent$DataHolder.d.ts'
import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
export class ItemHoverEvent$LegacyHolder extends Object implements ItemHoverEvent$DataHolder {
    constructor(arg0: string)
    readonly data: string;
    canEqual(arg0: Object): boolean;
    equals(arg0: Object | null): boolean;
    getData(): string;
    hashCode(): number;
    setData(arg0: string): void;
    toString(): string;
}