import type { ICUBinary$Authenticate } from '../../../../com/ibm/icu/impl/ICUBinary$Authenticate.d.ts'
import type { UCharacterName } from '../../../../com/ibm/icu/impl/UCharacterName.d.ts'
import type { UCharacterName$AlgorithmName } from '../../../../com/ibm/icu/impl/UCharacterName$AlgorithmName.d.ts'
import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class UCharacterNameReader extends Object implements ICUBinary$Authenticate {
    constructor(arg0: ByteBuffer)
    // private m_algnamesindex_: number;
    // private m_byteBuffer_: ByteBuffer;
    // private m_groupindex_: number;
    // private m_groupstringindex_: number;
    // private m_tokenstringindex_: number;
    authenticate(arg0: number[], arg1: number[]): boolean;
    isDataVersionAcceptable(arg0: number[]): boolean;
    read(arg0: UCharacterName): void;
    // private readAlg(): UCharacterName$AlgorithmName;
}