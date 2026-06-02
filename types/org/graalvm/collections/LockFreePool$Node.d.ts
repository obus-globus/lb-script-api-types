import type { Object } from '../../../java/lang/Object.d.ts'
export class LockFreePool$Node<E extends Object | number | string | boolean> extends Object {
    private constructor(element: E, tail: LockFreePool$Node<E>)
    // private element: E;
    // private tail: LockFreePool$Node<E>;
}