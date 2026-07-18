import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { AbstractConfigValue } from '../../../../com/typesafe/config/impl/AbstractConfigValue.d.ts'
import type { ResolveContext } from '../../../../com/typesafe/config/impl/ResolveContext.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ResolveResult<V extends AbstractConfigValue> extends Object {
    private constructor(arg0: ResolveContext, arg1: V)
    context: ResolveContext;
    value: V;
    asObjectResult(): ResolveResult<JavaMap<any, any>>;
    asValueResult(): ResolveResult<AbstractConfigValue>;
    popTrace(): ResolveResult<V>;
    toString(): string;
}