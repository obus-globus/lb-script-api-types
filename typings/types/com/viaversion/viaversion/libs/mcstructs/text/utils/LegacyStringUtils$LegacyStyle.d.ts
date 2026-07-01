import type { TextFormatting } from '../../../../../../../com/viaversion/viaversion/libs/mcstructs/text/TextFormatting.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class LegacyStringUtils$LegacyStyle extends Object {
    constructor(arg0: any)
    readonly color: TextFormatting;
    readonly styles: TextFormatting[];
    equals(arg0: Object | null): boolean;
    getColor(): TextFormatting;
    getStyles(): TextFormatting[];
    hashCode(): number;
    setColor(arg0: TextFormatting): void;
    toLegacy(): string;
    toString(): string;
}