import type { InputStream } from '../../java/io/InputStream.d.ts'
import type { OutputStream } from '../../java/io/OutputStream.d.ts'
import type { Class } from '../../java/lang/Class.d.ts'
import type { Key } from '../../java/security/Key.d.ts'
import type { KeyStore$Entry } from '../../java/security/KeyStore$Entry.d.ts'
import type { KeyStore$Entry$Attribute } from '../../java/security/KeyStore$Entry$Attribute.d.ts'
import type { KeyStore$LoadStoreParameter } from '../../java/security/KeyStore$LoadStoreParameter.d.ts'
import type { KeyStore$ProtectionParameter } from '../../java/security/KeyStore$ProtectionParameter.d.ts'
import type { Certificate } from '../../java/security/cert/Certificate.d.ts'
import type { Date } from '../../java/util/Date.d.ts'
import type { Enumeration } from '../../java/util/Enumeration.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export abstract class KeyStoreSpi extends Object {
    constructor()
    engineAliases(): Enumeration<string>;
    engineContainsAlias(arg0: string): boolean;
    engineDeleteEntry(arg0: string): void;
    engineEntryInstanceOf(arg0: string, arg1: Class<KeyStore$Entry>): boolean;
    engineGetAttributes(arg0: string): KeyStore$Entry$Attribute[];
    engineGetCertificate(arg0: string): Certificate;
    engineGetCertificateAlias(arg0: Certificate): string;
    engineGetCertificateChain(arg0: string): Certificate[];
    engineGetCreationDate(arg0: string): Date;
    engineGetEntry(arg0: string, arg1: KeyStore$ProtectionParameter): KeyStore$Entry;
    engineGetKey(arg0: string, arg1: string[]): Key;
    engineIsCertificateEntry(arg0: string): boolean;
    engineIsKeyEntry(arg0: string): boolean;
    engineLoad(arg0: InputStream, arg1: KeyStore$LoadStoreParameter): void;
    engineLoad(arg0: InputStream, arg1: string[]): void;
    engineLoad(arg0: KeyStore$LoadStoreParameter): void;
    engineProbe(arg0: InputStream): boolean;
    engineSetCertificateEntry(arg0: string, arg1: Certificate): void;
    engineSetEntry(arg0: string, arg1: KeyStore$Entry, arg2: KeyStore$ProtectionParameter): void;
    engineSetKeyEntry(arg0: string, arg1: Key, arg2: string[], arg3: Certificate[]): void;
    engineSetKeyEntry(arg0: string, arg1: number[], arg2: Certificate[]): void;
    engineSize(): number;
    engineStore(arg0: OutputStream, arg1: string[]): void;
    engineStore(arg0: KeyStore$LoadStoreParameter): void;
}