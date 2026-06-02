import type { OpenUrlClickEvent$UrlHolder } from '../../../../../../../../../com/viaversion/viaversion/libs/mcstructs/text/events/click/types/OpenUrlClickEvent$UrlHolder.d.ts'
import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
export class OpenUrlClickEvent$StringHolder extends Object implements OpenUrlClickEvent$UrlHolder {
    constructor(arg0: string)
    readonly url: string;
    canEqual(arg0: Object): boolean;
    equals(arg0: Object | null): boolean;
    getUrl(): string;
    hashCode(): number;
    toString(): string;
}