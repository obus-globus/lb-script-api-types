import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export abstract class JvmMemberSignature extends Object {
    private constructor()
    getDescriptor(): string;
    getName(): string;
    toString(): string;
}