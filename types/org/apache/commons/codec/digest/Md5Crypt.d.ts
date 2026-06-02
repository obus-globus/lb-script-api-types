import type { Random } from '../../../../../java/util/Random.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Md5Crypt extends Object {
    static apr1Crypt(paramarg0: number[]): string;
    static apr1Crypt(paramarg0: number[], paramarg1: string): string;
    static apr1Crypt(paramarg0: number[], paramarg1: Random): string;
    static apr1Crypt(paramarg0: string): string;
    static apr1Crypt(paramarg0: string, paramarg1: string): string;
    static md5Crypt(paramarg0: number[]): string;
    static md5Crypt(paramarg0: number[], paramarg1: string): string;
    static md5Crypt(paramarg0: number[], paramarg1: string, paramarg2: string): string;
    static md5Crypt(paramarg0: number[], paramarg1: string, paramarg2: string, paramarg3: Random): string;
    static md5Crypt(paramarg0: number[], paramarg1: Random): string;
    constructor()
}