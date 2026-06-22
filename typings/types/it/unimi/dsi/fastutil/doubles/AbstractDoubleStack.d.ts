import type { AbstractStack } from '../../../../../it/unimi/dsi/fastutil/AbstractStack.d.ts'
import type { DoubleStack } from '../../../../../it/unimi/dsi/fastutil/doubles/DoubleStack.d.ts'
export abstract class AbstractDoubleStack extends AbstractStack<number> implements DoubleStack {
    constructor()
    peek(arg0: number): number;
    peekDouble(arg0: number): number;
    pop(): number;
    popDouble(): number;
    push(arg0: number): void;
    top(): number;
    topDouble(): number;
}