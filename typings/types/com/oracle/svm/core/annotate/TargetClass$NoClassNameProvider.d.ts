import type { TargetClass } from '../../../../../com/oracle/svm/core/annotate/TargetClass.d.ts'
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface TargetClass$NoClassNameProvider extends Function<TargetClass, string>, Object {
    andThen(arg0: (param0: R) => V): (param0: T) => V;
    compose(arg0: (param0: V) => T): (param0: V) => R;
}