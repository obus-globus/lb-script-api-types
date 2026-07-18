import type { AbstractPublicNode } from '../../../../../com/oracle/truffle/api/strings/AbstractPublicNode.d.ts'
import type { AbstractTruffleString } from '../../../../../com/oracle/truffle/api/strings/AbstractTruffleString.d.ts'
import type { TruffleStringBuilder } from '../../../../../com/oracle/truffle/api/strings/TruffleStringBuilder.d.ts'
import type { TruffleStringBuilder$AppendStringIntlNode } from '../../../../../com/oracle/truffle/api/strings/TruffleStringBuilder$AppendStringIntlNode.d.ts'
export abstract class TruffleStringBuilder$AppendStringNode extends AbstractPublicNode {
    static create(): TruffleStringBuilder$AppendStringNode;
    static getUncached(): TruffleStringBuilder$AppendStringNode;
    constructor()
    append(sb: TruffleStringBuilder, a: AbstractTruffleString, intlNode: TruffleStringBuilder$AppendStringIntlNode): void;
    execute(sb: TruffleStringBuilder, a: AbstractTruffleString): void;
}