import type { Locator } from '../../io/jsonwebtoken/Locator.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export abstract class LocatorAdapter<T extends unknown> extends Object implements Locator<T> {
    constructor()
    doLocate(arg0: { [key: string]: any }): T;
    locate(arg0: { [key: string]: any }): T;
}