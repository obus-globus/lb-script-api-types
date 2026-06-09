import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface ThrowingConsumer<T extends Object | number | string | boolean> extends Object {
    accept(arg0: T): void;
    toConsumer(): (param0: T) => void;
    tryAccept(arg0: T): void;
}