import type { BiConsumer } from '../../../../java/util/function/BiConsumer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface ObjectShare extends Object{
    get(arg0: string): Object;
    put(arg0: string, arg1: Object): Object;
    putIfAbsent(arg0: string, arg1: Object): Object;
    remove(arg0: string): Object;
    whenAvailable(arg0: string, arg1: (param0: string, param1: Object) => void): void;
}