import type { URI } from '../../java/net/URI.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export abstract class CookieHandler extends Object {
    static getDefault(): CookieHandler;
    static setDefault(paramarg0: CookieHandler): void;
    constructor()
    get(arg0: URI, arg1: { [key: string]: string[] }): { [key: string]: string[] };
    put(arg0: URI, arg1: { [key: string]: string[] }): void;
}