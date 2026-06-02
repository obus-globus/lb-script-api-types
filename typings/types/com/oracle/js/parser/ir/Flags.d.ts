import type { LexicalContext } from '../../../../../com/oracle/js/parser/ir/LexicalContext.d.ts'
import type { LexicalContextNode } from '../../../../../com/oracle/js/parser/ir/LexicalContextNode.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface Flags<T extends LexicalContextNode> extends Object{
    getFlag(flag: number): boolean;
    getFlags(): number;
    setFlag(lc: LexicalContext, flag: number): T;
    setFlags(lc: LexicalContext, flags: number): T;
}