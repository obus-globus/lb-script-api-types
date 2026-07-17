import type { InlinedConditionProfile } from '../../../../../com/oracle/truffle/api/profiles/InlinedConditionProfile.d.ts'
import type { AbstractPublicNode } from '../../../../../com/oracle/truffle/api/strings/AbstractPublicNode.d.ts'
import type { TruffleString } from '../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { TruffleString$Encoding } from '../../../../../com/oracle/truffle/api/strings/TruffleString$Encoding.d.ts'
import type { TruffleString$InternalSwitchEncodingNode } from '../../../../../com/oracle/truffle/api/strings/TruffleString$InternalSwitchEncodingNode.d.ts'
export abstract class TruffleString$FromJavaStringNode extends AbstractPublicNode {
    static create(): TruffleString$FromJavaStringNode;
    static getUncached(): TruffleString$FromJavaStringNode;
    constructor()
    doUTF16(javaString: string, charOffset: number, length: number, encoding: TruffleString$Encoding, copy: boolean, utf16CompactProfile: InlinedConditionProfile, length1Profile: InlinedConditionProfile, fullLengthProfile: InlinedConditionProfile, equalStrideProfile: InlinedConditionProfile, switchEncodingNode: TruffleString$InternalSwitchEncodingNode): TruffleString;
    execute(value: string, encoding: TruffleString$Encoding): TruffleString;
    execute(value: string, charOffset: number, length: number, encoding: TruffleString$Encoding, copy: boolean): TruffleString;
}