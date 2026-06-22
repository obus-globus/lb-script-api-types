import type { AbstractStack } from '../../../../../it/unimi/dsi/fastutil/AbstractStack.d.ts'
import type { BooleanStack } from '../../../../../it/unimi/dsi/fastutil/booleans/BooleanStack.d.ts'
export abstract class AbstractBooleanStack extends AbstractStack<boolean> implements BooleanStack {
    constructor()
    peek(arg0: number): boolean;
    peekBoolean(arg0: number): boolean;
    pop(): boolean;
    popBoolean(): boolean;
    push(arg0: boolean): void;
    top(): boolean;
    topBoolean(): boolean;
}