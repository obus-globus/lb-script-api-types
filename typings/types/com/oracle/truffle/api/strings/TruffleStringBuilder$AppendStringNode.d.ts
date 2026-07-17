import type { AbstractPublicNode } from '../../../../../com/oracle/truffle/api/strings/AbstractPublicNode.d.ts'
import type { AbstractTruffleString } from '../../../../../com/oracle/truffle/api/strings/AbstractTruffleString.d.ts'
import type { TruffleStringBuilder } from '../../../../../com/oracle/truffle/api/strings/TruffleStringBuilder.d.ts'
import type { TruffleStringBuilder$AppendStringIntlNode } from '../../../../../com/oracle/truffle/api/strings/TruffleStringBuilder$AppendStringIntlNode.d.ts'
import type { TruffleStringBuilderUTF16 } from '../../../../../com/oracle/truffle/api/strings/TruffleStringBuilderUTF16.d.ts'
import type { TruffleStringBuilderUTF32 } from '../../../../../com/oracle/truffle/api/strings/TruffleStringBuilderUTF32.d.ts'
import type { TruffleStringBuilderUTF8 } from '../../../../../com/oracle/truffle/api/strings/TruffleStringBuilderUTF8.d.ts'
export abstract class TruffleStringBuilder$AppendStringNode extends AbstractPublicNode {
    static create(): TruffleStringBuilder$AppendStringNode;
    static getUncached(): TruffleStringBuilder$AppendStringNode;
    constructor()
    append(sb: TruffleStringBuilder, a: AbstractTruffleString, intlNode: TruffleStringBuilder$AppendStringIntlNode): void;
    execute(sb: TruffleStringBuilder, a: AbstractTruffleString): void;
    execute(sb: TruffleStringBuilderUTF16, a: AbstractTruffleString): void;
    execute(sb: TruffleStringBuilderUTF32, a: AbstractTruffleString): void;
    execute(sb: TruffleStringBuilderUTF8, a: AbstractTruffleString): void;
}