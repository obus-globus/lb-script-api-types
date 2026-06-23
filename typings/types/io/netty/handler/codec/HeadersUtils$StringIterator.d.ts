import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../java/util/Iterator.d.ts'
export class HeadersUtils$StringIterator<T extends unknown> extends Object implements Iterator<string> {
    constructor(arg0: Iterator<T>)
    // private iter: Iterator<T>;
    forEachRemaining(arg0: (param0: string) => void): void;
    hasNext(): boolean;
    next(): string;
    remove(): void;
}