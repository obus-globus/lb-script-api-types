import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class IteratorRecord extends Object {
    static create(paramiterator: Object, paramnextMethod: Object): IteratorRecord;
    static create(paramiterator: Object, paramnextMethod: Object, paramdone: boolean): IteratorRecord;
    private constructor(iterator: Object, nextMethod: Object, done: boolean)
    readonly done: boolean;
    readonly iterator: Object;
    readonly nextMethod: Object;
    getIterator(): Object;
    getNextMethod(): Object;
    isDone(): boolean;
    setDone(done: boolean): void;
    toString(): string;
}