import type { JsonObject } from '../../../../com/google/gson/JsonObject.d.ts'
import type { RealmsText } from '../../../../com/mojang/realmsclient/dto/RealmsText.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class RealmsNotification$UrlButton extends Record {
    static parse(paramjsonObject: JsonObject): RealmsNotification$UrlButton;
    private constructor(url: string, urlText: RealmsText)
    // private url: string;
    // private urlText: RealmsText;
    equals(o: Object | null): boolean;
    hashCode(): number;
    toString(): string;
    url(): string;
    urlText(): RealmsText;
}