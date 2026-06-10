import type { Translator } from '../../../ai/djl/translate/Translator.d.ts'
import type { Function } from '../../../java/util/function/Function.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface ExpansionTranslatorFactory$TranslatorExpansion<IbaseT extends Object | number | string | boolean, ObaseT extends Object | number | string | boolean> extends Function<Translator<IbaseT, ObaseT>, Translator<Object, Object>>, Object {
    andThen<V extends Object | number | string | boolean>(arg0: (param0: Translator<Object, Object>) => V): (param0: Translator<IbaseT, ObaseT>) => V;
    compose<V extends Object | number | string | boolean>(arg0: (param0: V) => Translator<IbaseT, ObaseT>): (param0: V) => Translator<Object, Object>;
}