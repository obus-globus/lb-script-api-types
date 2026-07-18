import type { Object } from '../../../../java/lang/Object.d.ts'
export class LockFreeMPSCQueue<E extends unknown> extends Object {
    constructor()
    /*not mapped: */ isEmpty(): boolean;
    addLast(element: E): boolean;
    close(): void;
    removeFirstOrNull(): E | null;
}