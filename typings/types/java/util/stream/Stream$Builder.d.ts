import type { Consumer } from '../../../java/util/function/Consumer.d.ts'
import type { Stream } from '../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface Stream$Builder<T extends Object | number | string | boolean> extends Consumer<T>, Object{
    accept(arg0: T): void;
    add(arg0: T): Stream$Builder<T>;
    andThen(arg0: (param0: T) => void): (param0: T) => void;
    build(): Stream<T>;
}