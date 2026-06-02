import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface IOConsumer<T extends Object | number | string | boolean> extends Object{
    accept(arg0: T): void;
    andThen(arg0: (param0: T) => void): (param0: T) => void;
    asConsumer(): (param0: T) => void;
}