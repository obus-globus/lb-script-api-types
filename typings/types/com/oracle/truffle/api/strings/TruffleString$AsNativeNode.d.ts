import type { AbstractPublicNode } from '../../../../../com/oracle/truffle/api/strings/AbstractPublicNode.d.ts'
import type { NativeAllocator } from '../../../../../com/oracle/truffle/api/strings/NativeAllocator.d.ts'
import type { TruffleString } from '../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { TruffleString$Encoding } from '../../../../../com/oracle/truffle/api/strings/TruffleString$Encoding.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class TruffleString$AsNativeNode extends AbstractPublicNode {
    static create(): TruffleString$AsNativeNode;
    static getUncached(): TruffleString$AsNativeNode;
    constructor()
    execute(a: TruffleString, allocator: (param0: number) => Object, expectedEncoding: TruffleString$Encoding, useCompaction: boolean, cacheResult: boolean): TruffleString;
}