import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { BiConsumer } from '../../../../java/util/function/BiConsumer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ObjectShare } from '../../../../net/fabricmc/loader/api/ObjectShare.d.ts'
export class ObjectShareImpl extends Object implements ObjectShare {
    constructor()
    // private pendingMap: JavaMap<string, (param0: string, param1: Object) => void[]>;
    // private values: JavaMap<string, Object>;
    get(arg0: string): Object;
    put(arg0: string, arg1: Object): Object;
    putIfAbsent(arg0: string, arg1: Object): Object;
    remove(arg0: string): Object;
    whenAvailable(arg0: string, arg1: (param0: string, param1: Object) => void): void;
}