import type { AbstractPublicNode } from '../../../../../com/oracle/truffle/api/strings/AbstractPublicNode.d.ts'
import type { TruffleStringBuilder } from '../../../../../com/oracle/truffle/api/strings/TruffleStringBuilder.d.ts'
import type { TruffleStringBuilder$AppendCodePointIntlNode } from '../../../../../com/oracle/truffle/api/strings/TruffleStringBuilder$AppendCodePointIntlNode.d.ts'
export abstract class TruffleStringBuilder$AppendCodePointNode extends AbstractPublicNode {
    static create(): TruffleStringBuilder$AppendCodePointNode;
    static getUncached(): TruffleStringBuilder$AppendCodePointNode;
    constructor()
    append(sb: TruffleStringBuilder, codepoint: number, repeat: number, allowUTF16Surrogates: boolean, appendCodePointIntlNode: TruffleStringBuilder$AppendCodePointIntlNode): void;
    execute(sb: TruffleStringBuilder, codepoint: number): void;
    execute(sb: TruffleStringBuilder, codepoint: number, repeat: number): void;
    execute(sb: TruffleStringBuilder, codepoint: number, repeat: number, allowUTF16Surrogates: boolean): void;
}