import type { AbstractStack } from '../../../../../it/unimi/dsi/fastutil/AbstractStack.d.ts'
import type { ByteStack } from '../../../../../it/unimi/dsi/fastutil/bytes/ByteStack.d.ts'
export abstract class AbstractByteStack extends AbstractStack<number> implements ByteStack {
    constructor()
    peek(arg0: number): number;
    peekByte(arg0: number): number;
    pop(): number;
    popByte(): number;
    push(arg0: number): void;
    top(): number;
    topByte(): number;
}