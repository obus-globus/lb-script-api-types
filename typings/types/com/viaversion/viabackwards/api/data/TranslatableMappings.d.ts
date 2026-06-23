import type { Protocol } from '../../../../../com/viaversion/viaversion/api/protocol/Protocol.d.ts'
import type { JsonObject } from '../../../../../com/viaversion/viaversion/libs/gson/JsonObject.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class TranslatableMappings extends Object {
    static fillTranslatables(paramarg0: JsonObject, paramarg1: { [key: string]: { [key: string]: string } }): void;
    static getTranslatableMappings(paramarg0: string): { [key: string]: string };
    static loadTranslatables(): void;
    static translatablesFor(paramarg0: Protocol<any, any, any, any>): { [key: string]: string };
    static translatablesFor(paramarg0: string): { [key: string]: string };
    constructor()
}