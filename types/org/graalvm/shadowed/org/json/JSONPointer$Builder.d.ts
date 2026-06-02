import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { JSONPointer } from '../../../../../org/graalvm/shadowed/org/json/JSONPointer.d.ts'
export class JSONPointer$Builder extends Object {
    constructor()
    // private refTokens: string[];
    append(arrayIndex: number): JSONPointer$Builder;
    append(token: string): JSONPointer$Builder;
    build(): JSONPointer;
}