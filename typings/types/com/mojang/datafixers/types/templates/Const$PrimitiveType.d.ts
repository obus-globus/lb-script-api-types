import type { RewriteResult } from '../../../../../com/mojang/datafixers/RewriteResult.d.ts'
import type { TypedOptic } from '../../../../../com/mojang/datafixers/TypedOptic.d.ts'
import type { App } from '../../../../../com/mojang/datafixers/kinds/App.d.ts'
import type { Type } from '../../../../../com/mojang/datafixers/types/Type.d.ts'
import type { Type$Mu } from '../../../../../com/mojang/datafixers/types/Type$Mu.d.ts'
import type { TypeTemplate } from '../../../../../com/mojang/datafixers/types/templates/TypeTemplate.d.ts'
import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Const$PrimitiveType<A extends unknown> extends Type<A> {
    static opticView<S extends unknown, T extends unknown, A extends unknown, B extends unknown>(paramarg0: Type<S>, paramarg1: RewriteResult<A, B>, paramarg2: TypedOptic<S, T, A, B>): RewriteResult<S, T>;
    static unbox<A extends unknown>(paramarg0: App<Type$Mu, A>): Type<A>;
    constructor(arg0: Codec<A>)
    // private codec: Codec<A>;
    buildCodec(): Codec<A>;
    buildTemplate(): TypeTemplate;
    equals(arg0: Object, arg1: boolean, arg2: boolean): boolean;
    equals(arg0: Object | null): boolean;
    toString(): string;
}