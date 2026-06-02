import type { Identifiable } from '../../../io/jsonwebtoken/Identifiable.d.ts'
import type { Locator } from '../../../io/jsonwebtoken/Locator.d.ts'
import type { Function } from '../../../io/jsonwebtoken/impl/lang/Function.d.ts'
import type { Parameter } from '../../../io/jsonwebtoken/impl/lang/Parameter.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class IdLocator<H extends Header, R extends Identifiable> extends Object implements Locator<R>, Function<H, R> {
    constructor(arg0: Parameter<string>, arg1: { [key: string]: R }, arg2: string, arg3: string, arg4: string)
    // private algType: string;
    // private behavior: string;
    // private param: Parameter<string>;
    // private registry: { [key: string]: R };
    // private requiredMsg: string;
    apply(arg0: H): R;
    locate(arg0: Header): R;
}