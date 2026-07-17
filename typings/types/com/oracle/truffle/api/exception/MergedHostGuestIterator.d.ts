import type { StackTraceElement } from '../../../../../java/lang/StackTraceElement.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../../java/util/Iterator.d.ts'
import type { ListIterator } from '../../../../../java/util/ListIterator.d.ts'
export class MergedHostGuestIterator<T extends unknown, G extends unknown> extends Object implements Iterator<T> {
    constructor(polyglotEngineImpl: Object, hostStack: StackTraceElement[], guestFrames: Iterator<G>, inHostLanguage: boolean, includeHostFrames: boolean, hostFrameConvertor: (param0: StackTraceElement) => T, guestFrameConvertor: (param0: G) => T)
    // private fetchedNext: T;
    // private firstFrame: boolean;
    // private guestFrameConvertor: (param0: G) => T;
    // private guestFrames: Iterator<G>;
    // private hostFrameConvertor: (param0: StackTraceElement) => T;
    // private hostFrames: ListIterator<StackTraceElement>;
    // private hostStack: StackTraceElement[];
    // private inHostLanguage: boolean;
    // private includeHostFrames: boolean;
    // private polyglotEngineImpl: Object;
    // private fetchNext(): T;
    forEachRemaining(arg0: (param0: T) => void): void;
    hasNext(): boolean;
    next(): T;
    // private traceStackTraceElement(element: StackTraceElement): void;
}