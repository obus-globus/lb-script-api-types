import type { JavaMap } from '../../JavaMap.d.ts'
import type { Locator } from '../../io/jsonwebtoken/Locator.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export abstract class LocatorAdapter<T extends unknown> extends Object implements Locator<T> {
    constructor()
    doLocate(arg0: JavaMap<any, any>): T;
    locate(arg0: JavaMap<any, any>): T;
}