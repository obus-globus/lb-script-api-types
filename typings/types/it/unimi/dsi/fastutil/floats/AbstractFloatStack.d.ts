import type { AbstractStack } from '../../../../../it/unimi/dsi/fastutil/AbstractStack.d.ts'
import type { FloatStack } from '../../../../../it/unimi/dsi/fastutil/floats/FloatStack.d.ts'
export abstract class AbstractFloatStack extends AbstractStack<number> implements FloatStack {
    constructor()
    peek(arg0: number): number;
    peekFloat(arg0: number): number;
    pop(): number;
    popFloat(): number;
    push(arg0: number): void;
    top(): number;
    topFloat(): number;
}