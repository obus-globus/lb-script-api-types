import type { StringBuilder } from '../../../../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ClassNode } from '../../../../../org/objectweb/asm/tree/ClassNode.d.ts'
import type { MethodNode } from '../../../../../org/objectweb/asm/tree/MethodNode.d.ts'
export class SourceMap$File extends Object {
    constructor(arg0: number, arg1: number, arg2: number, arg3: string)
    constructor(arg0: number, arg1: number, arg2: number, arg3: string, arg4: string)
    id: number;
    lineOffset: number;
    size: number;
    sourceFileName: string;
    sourceFilePath: string;
    appendFile(arg0: StringBuilder): void;
    appendLines(arg0: StringBuilder): void;
    applyOffset(arg0: ClassNode): void;
    applyOffset(arg0: MethodNode): void;
}