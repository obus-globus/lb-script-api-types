import type { ParameterHolder } from '../../../../../../io/github/douira/glsl_transformer/ast/transform/ParameterHolder.d.ts'
import type { Transformer } from '../../../../../../io/github/douira/glsl_transformer/ast/transform/Transformer.d.ts'
import type { Supplier } from '../../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface ParameterizedTransformer<J extends Object | number | string | boolean, V extends Object | number | string | boolean> extends ParameterHolder<J>, Transformer<V>, Object {
    transform(arg0: V, arg1: J): V;
    withJobParameters<R extends Object | number | string | boolean>(arg0: J, arg1: () => R): R;
}