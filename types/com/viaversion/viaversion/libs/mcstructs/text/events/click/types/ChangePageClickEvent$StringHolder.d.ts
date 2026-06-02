import type { ChangePageClickEvent$PageHolder } from '../../../../../../../../../com/viaversion/viaversion/libs/mcstructs/text/events/click/types/ChangePageClickEvent$PageHolder.d.ts'
import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
export class ChangePageClickEvent$StringHolder extends Object implements ChangePageClickEvent$PageHolder {
    constructor(arg0: string)
    readonly page: string;
    canEqual(arg0: Object): boolean;
    equals(arg0: Object | null): boolean;
    getPage(): string;
    hashCode(): number;
    setPage(arg0: string): void;
    toString(): string;
}