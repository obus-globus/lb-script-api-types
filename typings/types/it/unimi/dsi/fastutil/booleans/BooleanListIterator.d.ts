import type { BooleanBidirectionalIterator } from '../../../../../it/unimi/dsi/fastutil/booleans/BooleanBidirectionalIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ListIterator } from '../../../../../java/util/ListIterator.d.ts'
export interface BooleanListIterator extends BooleanBidirectionalIterator, Object, ListIterator<boolean>{
    add(arg0: boolean): void;
    add(arg0: boolean): void;
    back(arg0: number): number;
    next(): boolean;
    previous(): boolean;
    previous(): boolean;
    remove(): void;
    set(arg0: boolean): void;
    set(arg0: boolean): void;
    skip(arg0: number): number;
}