import type { Random } from '../../../../../java/util/Random.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Sha2Crypt extends Object {
    static sha256Crypt(paramarg0: number[]): string;
    static sha256Crypt(paramarg0: number[], paramarg1: string): string;
    static sha256Crypt(paramarg0: number[], paramarg1: string, paramarg2: Random): string;
    static sha512Crypt(paramarg0: number[]): string;
    static sha512Crypt(paramarg0: number[], paramarg1: string): string;
    static sha512Crypt(paramarg0: number[], paramarg1: string, paramarg2: Random): string;
    constructor()
}