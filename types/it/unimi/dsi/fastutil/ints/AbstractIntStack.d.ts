import type { AbstractStack } from '../../../../../it/unimi/dsi/fastutil/AbstractStack.d.ts'
import type { IntStack } from '../../../../../it/unimi/dsi/fastutil/ints/IntStack.d.ts'
export abstract class AbstractIntStack extends AbstractStack<number> implements IntStack {
    constructor()
    peek(arg0: number): number;
    pop(): number;
    push(arg0: number): void;
    top(): number;
}