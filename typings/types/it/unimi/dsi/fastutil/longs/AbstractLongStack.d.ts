import type { AbstractStack } from '../../../../../it/unimi/dsi/fastutil/AbstractStack.d.ts'
import type { LongStack } from '../../../../../it/unimi/dsi/fastutil/longs/LongStack.d.ts'
export abstract class AbstractLongStack extends AbstractStack<number> implements LongStack {
    constructor()
    peek(arg0: number): number;
    peekLong(arg0: number): number;
    pop(): number;
    popLong(): number;
    push(arg0: number): void;
    top(): number;
    topLong(): number;
}