import type { RewriteResult } from '../../../../com/mojang/datafixers/RewriteResult.d.ts'
import type { TypedOptic } from '../../../../com/mojang/datafixers/TypedOptic.d.ts'
import type { App } from '../../../../com/mojang/datafixers/kinds/App.d.ts'
import type { Type } from '../../../../com/mojang/datafixers/types/Type.d.ts'
import type { Type$Mu } from '../../../../com/mojang/datafixers/types/Type$Mu.d.ts'
import type { TypeTemplate } from '../../../../com/mojang/datafixers/types/templates/TypeTemplate.d.ts'
import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Func<A extends Object | number | string | boolean, B extends Object | number | string | boolean> extends Type<(param0: A) => B> {
    static opticView(paramarg0: Type<Object>, paramarg1: RewriteResult<Object, Object>, paramarg2: TypedOptic<Object, Object, Object, Object>): RewriteResult<Object, Object>;
    static unbox(paramarg0: App<Type$Mu, Object>): Type<Object>;
    constructor(arg0: Type<A>, arg1: Type<B>)
    // private first: Type<A>;
    // private second: Type<B>;
    buildCodec(): Codec<(param0: A) => B>;
    buildTemplate(): TypeTemplate;
    equals(arg0: Object, arg1: boolean, arg2: boolean): boolean;
    first(): Type<A>;
    hashCode(): number;
    second(): Type<B>;
    toString(): string;
}