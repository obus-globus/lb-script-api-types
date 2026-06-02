import type { ChangePageClickEvent$PageHolder } from '../../../../../../../../../com/viaversion/viaversion/libs/mcstructs/text/events/click/types/ChangePageClickEvent$PageHolder.d.ts'
import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
export class ChangePageClickEvent$IntHolder extends Object implements ChangePageClickEvent$PageHolder {
    constructor(arg0: number)
    readonly page: number;
    canEqual(arg0: Object): boolean;
    equals(arg0: Object | null): boolean;
    getPage(): number;
    hashCode(): number;
    setPage(arg0: number): void;
    toString(): string;
}