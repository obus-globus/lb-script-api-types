import type { Message } from '../../../com/mojang/brigadier/Message.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class LiteralMessage extends Object implements Message {
    constructor(arg0: string)
    readonly string: string;
    getString(): string;
    toString(): string;
}