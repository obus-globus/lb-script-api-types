import type { RewriteResult } from '../../../com/mojang/datafixers/RewriteResult.d.ts'
import type { TypeRewriteRule } from '../../../com/mojang/datafixers/TypeRewriteRule.d.ts'
import type { Typed } from '../../../com/mojang/datafixers/Typed.d.ts'
import type { Schema } from '../../../com/mojang/datafixers/schemas/Schema.d.ts'
import type { Type } from '../../../com/mojang/datafixers/types/Type.d.ts'
import type { Dynamic } from '../../../com/mojang/serialization/Dynamic.d.ts'
import type { DynamicOps } from '../../../com/mojang/serialization/DynamicOps.d.ts'
import type { BitSet } from '../../../java/util/BitSet.d.ts'
import type { Function } from '../../../java/util/function/Function.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export abstract class DataFix extends Object {
    static checked(paramarg0: string, paramarg1: Type<Object>, paramarg2: Type<Object>, paramarg3: (param0: Object | null) => Object | null, paramarg4: BitSet): RewriteResult<Object, Object>;
    constructor(arg0: Schema, arg1: boolean)
    // private changesType: boolean;
    // private outputSchema: Schema;
    readonly rule: TypeRewriteRule;
    convertUnchecked(arg0: string, arg1: Type<A>, arg2: Type<B>): TypeRewriteRule;
    fixTypeEverywhere(arg0: Type<A>, arg1: RewriteResult<A, B>): TypeRewriteRule;
    fixTypeEverywhere(arg0: string, arg1: Type<A>, arg2: Type<B>, arg3: (param0: DynamicOps<Object>) => (param0: A) => B): TypeRewriteRule;
    fixTypeEverywhere(arg0: string, arg1: Type<A>, arg2: Type<B>, arg3: (param0: DynamicOps<Object>) => (param0: A) => B, arg4: BitSet): TypeRewriteRule;
    fixTypeEverywhere(arg0: string, arg1: Type<A>, arg2: (param0: DynamicOps<Object>) => (param0: A) => A): TypeRewriteRule;
    fixTypeEverywhereTyped(arg0: string, arg1: Type<A>, arg2: Type<B>, arg3: (param0: Typed<Object>) => Typed<Object>): TypeRewriteRule;
    fixTypeEverywhereTyped(arg0: string, arg1: Type<A>, arg2: Type<B>, arg3: (param0: Typed<Object>) => Typed<Object>, arg4: BitSet): TypeRewriteRule;
    fixTypeEverywhereTyped(arg0: string, arg1: Type<A>, arg2: (param0: Typed<Object>) => Typed<Object>): TypeRewriteRule;
    fixTypeEverywhereTyped(arg0: string, arg1: Type<A>, arg2: (param0: Typed<Object>) => Typed<Object>, arg3: BitSet): TypeRewriteRule;
    getInputSchema(): Schema;
    getOutputSchema(): Schema;
    getRule(): TypeRewriteRule;
    getVersionKey(): number;
    makeRule(): TypeRewriteRule;
    onFail(arg0: Type<Object>): void;
    writeAndRead(arg0: string, arg1: Type<Object>, arg2: Type<Object>): TypeRewriteRule;
    writeFixAndRead(arg0: string, arg1: Type<A>, arg2: Type<B>, arg3: (param0: Dynamic<Object>) => Dynamic<Object>): TypeRewriteRule;
}