import type { JsonElement } from '../../../../../../../com/viaversion/viaversion/libs/gson/JsonElement.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class DecoratableMessage extends Object {
    constructor(arg0: string)
    constructor(arg0: string, arg1: JsonElement)
    readonly decorated: JsonElement;
    // private plain: string;
    decorated(): JsonElement;
    isDecorated(): boolean;
    plain(): string;
}