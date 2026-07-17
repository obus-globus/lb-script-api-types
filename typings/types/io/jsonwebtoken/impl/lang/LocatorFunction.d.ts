import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { Locator } from '../../../../io/jsonwebtoken/Locator.d.ts'
import type { Function } from '../../../../io/jsonwebtoken/impl/lang/Function.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class LocatorFunction<T extends unknown> extends Object implements Function<JavaMap<any, any>, T> {
    constructor(arg0: Locator<T>)
    // private locator: Locator<T>;
    apply(arg0: JavaMap<any, any>): T;
}