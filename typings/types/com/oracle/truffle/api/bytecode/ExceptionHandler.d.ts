import type { ExceptionHandler$HandlerKind } from '../../../../../com/oracle/truffle/api/bytecode/ExceptionHandler$HandlerKind.d.ts'
import type { TagTree } from '../../../../../com/oracle/truffle/api/bytecode/TagTree.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class ExceptionHandler extends Object {
    constructor(token: Object)
    getEndBytecodeIndex(): number;
    getHandlerBytecodeIndex(): number;
    getKind(): ExceptionHandler$HandlerKind;
    getStartBytecodeIndex(): number;
    getTagTree(): TagTree;
    toString(): string;
}