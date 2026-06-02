import type { File } from '../../../../java/io/File.d.ts'
import type { InputStream } from '../../../../java/io/InputStream.d.ts'
import type { PrivateKey } from '../../../../java/security/PrivateKey.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class BouncyCastlePemReader extends Object {
    static getPrivateKey(paramarg0: File, paramarg1: string): PrivateKey;
    static getPrivateKey(paramarg0: InputStream, paramarg1: string): PrivateKey;
    private constructor()
}