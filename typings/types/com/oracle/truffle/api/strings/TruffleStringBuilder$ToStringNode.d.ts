import type { AbstractPublicNode } from '../../../../../com/oracle/truffle/api/strings/AbstractPublicNode.d.ts'
import type { TruffleString } from '../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { TruffleStringBuilder } from '../../../../../com/oracle/truffle/api/strings/TruffleStringBuilder.d.ts'
import type { TruffleStringBuilder$ToStringIntlNode } from '../../../../../com/oracle/truffle/api/strings/TruffleStringBuilder$ToStringIntlNode.d.ts'
import type { TruffleStringBuilderUTF16 } from '../../../../../com/oracle/truffle/api/strings/TruffleStringBuilderUTF16.d.ts'
import type { TruffleStringBuilderUTF32 } from '../../../../../com/oracle/truffle/api/strings/TruffleStringBuilderUTF32.d.ts'
import type { TruffleStringBuilderUTF8 } from '../../../../../com/oracle/truffle/api/strings/TruffleStringBuilderUTF8.d.ts'
export abstract class TruffleStringBuilder$ToStringNode extends AbstractPublicNode {
    static create(): TruffleStringBuilder$ToStringNode;
    static getUncached(): TruffleStringBuilder$ToStringNode;
    constructor()
    createString(sb: TruffleStringBuilder, lazy: boolean, intlNode: TruffleStringBuilder$ToStringIntlNode): TruffleString;
    execute(sb: TruffleStringBuilder): TruffleString;
    execute(sb: TruffleStringBuilder, lazy: boolean): TruffleString;
    execute(sb: TruffleStringBuilderUTF16): TruffleString;
    execute(sb: TruffleStringBuilderUTF16, lazy: boolean): TruffleString;
    execute(sb: TruffleStringBuilderUTF32): TruffleString;
    execute(sb: TruffleStringBuilderUTF32, lazy: boolean): TruffleString;
    execute(sb: TruffleStringBuilderUTF8): TruffleString;
    execute(sb: TruffleStringBuilderUTF8, lazy: boolean): TruffleString;
}