import type { Stack } from '../../../../it/unimi/dsi/fastutil/Stack.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class AbstractStack<K extends unknown> extends Object implements Stack<K> {
    constructor()
    peek(arg0: number): K;
    top(): K;
}