import type { AbstractStack } from '../../../../../it/unimi/dsi/fastutil/AbstractStack.d.ts'
import type { ShortStack } from '../../../../../it/unimi/dsi/fastutil/shorts/ShortStack.d.ts'
export abstract class AbstractShortStack extends AbstractStack<number> implements ShortStack {
    constructor()
    peek(arg0: number): number;
    peekShort(arg0: number): number;
    pop(): number;
    popShort(): number;
    push(arg0: number): void;
    top(): number;
    topShort(): number;
}