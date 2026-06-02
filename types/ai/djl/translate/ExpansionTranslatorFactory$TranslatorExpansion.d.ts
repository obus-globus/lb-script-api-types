import type { Translator } from '../../../ai/djl/translate/Translator.d.ts'
import type { Function } from '../../../java/util/function/Function.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface ExpansionTranslatorFactory$TranslatorExpansion<IbaseT extends Object | number | string | boolean, ObaseT extends Object | number | string | boolean> extends Function<Translator<IbaseT, ObaseT>, Translator<Object, Object>>, Object{
    andThen(arg0: (param0: R) => V): (param0: T) => V;
    compose(arg0: (param0: V) => T): (param0: V) => R;
}