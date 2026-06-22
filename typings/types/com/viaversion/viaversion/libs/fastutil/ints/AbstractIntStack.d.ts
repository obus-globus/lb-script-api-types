import type { AbstractStack } from '../../../../../../com/viaversion/viaversion/libs/fastutil/AbstractStack.d.ts'
import type { IntStack } from '../../../../../../com/viaversion/viaversion/libs/fastutil/ints/IntStack.d.ts'
export abstract class AbstractIntStack extends AbstractStack<number> implements IntStack {
    constructor()
    peek(arg0: number): number;
    peekInt(arg0: number): number;
    pop(): number;
    popInt(): number;
    push(arg0: number): void;
    top(): number;
    topInt(): number;
}