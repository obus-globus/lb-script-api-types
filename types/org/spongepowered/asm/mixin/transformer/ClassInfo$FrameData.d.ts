import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { FrameNode } from '../../../../../org/objectweb/asm/tree/FrameNode.d.ts'
export class ClassInfo$FrameData extends Object {
    constructor(arg0: number, arg1: FrameNode, arg2: number)
    index: number;
    locals: number;
    rawSize: number;
    size: number;
    type: number;
    toString(): string;
}