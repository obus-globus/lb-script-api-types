import type { AbstractStack } from '../../../../../it/unimi/dsi/fastutil/AbstractStack.d.ts'
import type { CharStack } from '../../../../../it/unimi/dsi/fastutil/chars/CharStack.d.ts'
export abstract class AbstractCharStack extends AbstractStack<string> implements CharStack {
    constructor()
    peek(arg0: number): string;
    peekChar(arg0: number): string;
    pop(): string;
    popChar(): string;
    push(arg0: string): void;
    top(): string;
    topChar(): string;
}