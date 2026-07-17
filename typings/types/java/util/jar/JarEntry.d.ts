import type { JavaMap } from '../../../JavaMap.d.ts'
import type { CodeSigner } from '../../../java/security/CodeSigner.d.ts'
import type { Certificate } from '../../../java/security/cert/Certificate.d.ts'
import type { ZipEntry } from '../../../java/util/zip/ZipEntry.d.ts'
export class JarEntry extends ZipEntry {
    static CENATT: number;
    static CENATX: number;
    static CENCOM: number;
    static CENCRC: number;
    static CENDSK: number;
    static CENEXT: number;
    static CENFLG: number;
    static CENHDR: number;
    static CENHOW: number;
    static CENLEN: number;
    static CENNAM: number;
    static CENOFF: number;
    static CENSIG: number;
    static CENSIZ: number;
    static CENTIM: number;
    static CENVEM: number;
    static CENVER: number;
    static DEFLATED: number;
    static ENDCOM: number;
    static ENDHDR: number;
    static ENDOFF: number;
    static ENDSIG: number;
    static ENDSIZ: number;
    static ENDSUB: number;
    static ENDTOT: number;
    static EXTCRC: number;
    static EXTHDR: number;
    static EXTLEN: number;
    static EXTSIG: number;
    static EXTSIZ: number;
    static LOCCRC: number;
    static LOCEXT: number;
    static LOCFLG: number;
    static LOCHDR: number;
    static LOCHOW: number;
    static LOCLEN: number;
    static LOCNAM: number;
    static LOCSIG: number;
    static LOCSIZ: number;
    static LOCTIM: number;
    static LOCVER: number;
    static STORED: number;
    constructor(arg0: JarEntry)
    constructor(arg0: ZipEntry)
    constructor(arg0: string)
    // private attr: JavaMap<any, any>;
    // private certs: Certificate[];
    // private signers: CodeSigner[];
    getAttributes(): JavaMap<any, any>;
    getCertificates(): Certificate[];
    getCodeSigners(): CodeSigner[];
    getRealName(): string;
}