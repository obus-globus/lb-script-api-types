import type { Locator } from '../../../../io/jsonwebtoken/Locator.d.ts'
import type { Function } from '../../../../io/jsonwebtoken/impl/lang/Function.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class LocatorFunction<T extends Object | number | string | boolean> extends Object implements Function<Header, T> {
    constructor(arg0: Locator<T>)
    // private locator: Locator<T>;
    apply(arg0: Header): T;
}