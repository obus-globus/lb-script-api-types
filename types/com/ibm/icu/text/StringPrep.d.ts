import type { CharTrie } from '../../../../com/ibm/icu/impl/CharTrie.d.ts'
import type { UBiDiProps } from '../../../../com/ibm/icu/impl/UBiDiProps.d.ts'
import type { UCharacterIterator } from '../../../../com/ibm/icu/text/UCharacterIterator.d.ts'
import type { VersionInfo } from '../../../../com/ibm/icu/util/VersionInfo.d.ts'
import type { InputStream } from '../../../../java/io/InputStream.d.ts'
import type { StringBuffer } from '../../../../java/lang/StringBuffer.d.ts'
import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class StringPrep extends Object {
    static ALLOW_UNASSIGNED: number;
    static DEFAULT: number;
    static RFC3491_NAMEPREP: number;
    static RFC3530_NFS4_CIS_PREP: number;
    static RFC3530_NFS4_CS_PREP: number;
    static RFC3530_NFS4_CS_PREP_CI: number;
    static RFC3530_NFS4_MIXED_PREP_PREFIX: number;
    static RFC3530_NFS4_MIXED_PREP_SUFFIX: number;
    static RFC3722_ISCSI: number;
    static RFC3920_NODEPREP: number;
    static RFC3920_RESOURCEPREP: number;
    static RFC4011_MIB: number;
    static RFC4013_SASLPREP: number;
    static RFC4505_TRACE: number;
    static RFC4518_LDAP: number;
    static RFC4518_LDAP_CI: number;
    static getInstance(paramarg0: number): StringPrep;
    constructor(arg0: InputStream)
    private constructor(arg0: ByteBuffer)
    // private bdp: UBiDiProps;
    // private checkBiDi: boolean;
    // private doNFKC: boolean;
    // private indexes: number[];
    // private mappingData: string[];
    // private normCorrVer: VersionInfo;
    // private sprepTrie: CharTrie;
    // private sprepUniVer: VersionInfo;
    // private getCodePointValue(arg0: number): string;
    // private map(arg0: UCharacterIterator, arg1: number): StringBuffer;
    // private normalize(arg0: StringBuffer): StringBuffer;
    prepare(arg0: UCharacterIterator, arg1: number): StringBuffer;
    prepare(arg0: string, arg1: number): string;
}