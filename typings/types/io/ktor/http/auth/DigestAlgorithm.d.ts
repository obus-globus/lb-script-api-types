import type { DigestAlgorithm$Companion } from '../../../../io/ktor/http/auth/DigestAlgorithm$Companion.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class DigestAlgorithm extends Object {
    static Companion: DigestAlgorithm$Companion;
    constructor(name: string, hashName: string, isSession: boolean)
    readonly hashName: string;
    // private isSession: boolean;
    /*not mapped: */ isSession(): boolean;
    readonly name: string;
}