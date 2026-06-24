import type { JsonElement } from '../../../../../../com/viaversion/viaversion/libs/gson/JsonElement.d.ts'
import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class ChatDecorationResult extends Record {
    constructor(content: JsonElement, overlay: boolean)
    // private content: JsonElement;
    // private overlay: boolean;
    content(): JsonElement;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    overlay(): boolean;
    toString(): string;
}