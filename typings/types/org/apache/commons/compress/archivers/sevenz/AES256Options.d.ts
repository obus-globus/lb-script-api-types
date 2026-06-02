import type { Cipher } from '../../../../../../javax/crypto/Cipher.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class AES256Options extends Object {
    constructor(arg0: string[])
    constructor(arg0: string[], arg1: number[], arg2: number[], arg3: number)
    // private cipher: Cipher;
    // private iv: number[];
    // private numCyclesPower: number;
    // private salt: number[];
    getCipher(): Cipher;
    getIv(): number[];
    getNumCyclesPower(): number;
    getSalt(): number[];
}