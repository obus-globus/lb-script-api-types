import type { ResolveContext } from '../../../../com/typesafe/config/impl/ResolveContext.d.ts'
import type { Exception } from '../../../../java/lang/Exception.d.ts'
export class AbstractConfigValue$NotPossibleToResolve extends Exception {
    constructor(arg0: ResolveContext)
    // private traceString: string;
    traceString(): string;
}