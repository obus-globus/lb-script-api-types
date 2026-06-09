import type { Object } from '../../../java/lang/Object.d.ts'
export interface Consumer<T extends Object | number | string | boolean> extends Object {
    accept(arg0: T): void;
    andThen(arg0: (param0: T) => void): (param0: T) => void;
}