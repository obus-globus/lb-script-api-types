import type { JavaMap } from '../../JavaMap.d.ts'
import type { URI } from '../../java/net/URI.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export abstract class CookieHandler extends Object {
    static getDefault(): CookieHandler;
    static setDefault(paramarg0: CookieHandler): void;
    constructor()
    get(arg0: URI, arg1: JavaMap<string, string[]>): JavaMap<string, string[]>;
    put(arg0: URI, arg1: JavaMap<string, string[]>): void;
}