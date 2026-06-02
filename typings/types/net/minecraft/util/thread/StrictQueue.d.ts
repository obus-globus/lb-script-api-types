import type { Runnable } from '../../../../java/lang/Runnable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface StrictQueue<T extends Runnable> extends Object{
    isEmpty(): boolean;
    pop(): () => void;
    push(t: T): boolean;
    size(): number;
}