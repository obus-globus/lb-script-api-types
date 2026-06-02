import type { File } from '../../java/io/File.d.ts'
import type { InputStream } from '../../java/io/InputStream.d.ts'
import type { OutputStream } from '../../java/io/OutputStream.d.ts'
import type { Class } from '../../java/lang/Class.d.ts'
import type { Key } from '../../java/security/Key.d.ts'
import type { KeyStore$Entry } from '../../java/security/KeyStore$Entry.d.ts'
import type { KeyStore$Entry$Attribute } from '../../java/security/KeyStore$Entry$Attribute.d.ts'
import type { KeyStore$LoadStoreParameter } from '../../java/security/KeyStore$LoadStoreParameter.d.ts'
import type { KeyStore$ProtectionParameter } from '../../java/security/KeyStore$ProtectionParameter.d.ts'
import type { KeyStoreSpi } from '../../java/security/KeyStoreSpi.d.ts'
import type { Certificate } from '../../java/security/cert/Certificate.d.ts'
import type { Date } from '../../java/util/Date.d.ts'
import type { Enumeration } from '../../java/util/Enumeration.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export class KeyStore extends Object {
    static getDefaultType(): string;
    static getInstance(paramarg0: File, paramarg1: string[]): KeyStore;
    static getInstance(paramarg0: File, paramarg1: KeyStore$LoadStoreParameter): KeyStore;
    static getInstance(paramarg0: string): KeyStore;
    static getInstance(paramarg0: string, paramarg1: string): KeyStore;
    static getInstance(paramarg0: string, paramarg1: Provider): KeyStore;
    constructor(arg0: KeyStoreSpi, arg1: Provider, arg2: string)
    // private initialized: boolean;
    // private keyStoreSpi: KeyStoreSpi;
    readonly provider: Provider;
    readonly type: string;
    aliases(): Enumeration<string>;
    containsAlias(arg0: string): boolean;
    deleteEntry(arg0: string): void;
    entryInstanceOf(arg0: string, arg1: Class<KeyStore$Entry>): boolean;
    getAttributes(arg0: string): KeyStore$Entry$Attribute[];
    getCertificate(arg0: string): Certificate;
    getCertificateAlias(arg0: Certificate): string;
    getCertificateChain(arg0: string): Certificate[];
    getCreationDate(arg0: string): Date;
    getEntry(arg0: string, arg1: KeyStore$ProtectionParameter): KeyStore$Entry;
    getKey(arg0: string, arg1: string[]): Key;
    getProvider(): Provider;
    // private getProviderName(): string;
    getType(): string;
    isCertificateEntry(arg0: string): boolean;
    isKeyEntry(arg0: string): boolean;
    load(arg0: InputStream, arg1: string[]): void;
    load(arg0: KeyStore$LoadStoreParameter): void;
    setCertificateEntry(arg0: string, arg1: Certificate): void;
    setEntry(arg0: string, arg1: KeyStore$Entry, arg2: KeyStore$ProtectionParameter): void;
    setKeyEntry(arg0: string, arg1: Key, arg2: string[], arg3: Certificate[]): void;
    setKeyEntry(arg0: string, arg1: number[], arg2: Certificate[]): void;
    size(): number;
    store(arg0: OutputStream, arg1: string[]): void;
    store(arg0: KeyStore$LoadStoreParameter): void;
}