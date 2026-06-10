import type { TargetClass } from '../../../../../com/oracle/svm/core/annotate/TargetClass.d.ts'
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface TargetClass$NoClassNameProvider extends Function<TargetClass, string>, Object {
    andThen<V extends Object | number | string | boolean>(arg0: (param0: string) => V): (param0: TargetClass) => V;
    compose<V extends Object | number | string | boolean>(arg0: (param0: V) => TargetClass): (param0: V) => string;
}