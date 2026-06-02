import type { OpenUrlClickEvent$UrlHolder } from '../../../../../../../../../com/viaversion/viaversion/libs/mcstructs/text/events/click/types/OpenUrlClickEvent$UrlHolder.d.ts'
import type { URI } from '../../../../../../../../../java/net/URI.d.ts'
import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
export class OpenUrlClickEvent$UriHolder extends Object implements OpenUrlClickEvent$UrlHolder {
    constructor(arg0: URI)
    readonly uri: URI;
    canEqual(arg0: Object): boolean;
    equals(arg0: Object | null): boolean;
    getUri(): URI;
    hashCode(): number;
    toString(): string;
}