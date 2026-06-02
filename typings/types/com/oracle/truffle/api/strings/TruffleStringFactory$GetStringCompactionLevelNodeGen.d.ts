import type { AbstractTruffleString } from '../../../../../com/oracle/truffle/api/strings/AbstractTruffleString.d.ts'
import type { TruffleString$CompactionLevel } from '../../../../../com/oracle/truffle/api/strings/TruffleString$CompactionLevel.d.ts'
import type { TruffleString$Encoding } from '../../../../../com/oracle/truffle/api/strings/TruffleString$Encoding.d.ts'
import type { TruffleString$GetStringCompactionLevelNode } from '../../../../../com/oracle/truffle/api/strings/TruffleString$GetStringCompactionLevelNode.d.ts'
export class TruffleStringFactory$GetStringCompactionLevelNodeGen extends TruffleString$GetStringCompactionLevelNode {
    static create(): TruffleString$GetStringCompactionLevelNode;
    static getUncached(): TruffleString$GetStringCompactionLevelNode;
    private constructor()
    execute(arg0Value: AbstractTruffleString, arg1Value: TruffleString$Encoding): TruffleString$CompactionLevel;
}