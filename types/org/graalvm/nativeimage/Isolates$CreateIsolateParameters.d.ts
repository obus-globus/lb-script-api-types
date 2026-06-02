import type { Object } from '../../../java/lang/Object.d.ts'
import type { Isolates$ProtectionDomain } from '../../../org/graalvm/nativeimage/Isolates$ProtectionDomain.d.ts'
import type { UnsignedWord } from '../../../org/graalvm/word/UnsignedWord.d.ts'
export class Isolates$CreateIsolateParameters extends Object {
    static getDefault(): Isolates$CreateIsolateParameters;
    private constructor(reservedAddressSpaceSize: UnsignedWord, auxiliaryImagePath: string, auxiliaryImageReservedSpaceSize: UnsignedWord, arguments: string[], protectionDomain: Isolates$ProtectionDomain)
    readonly arguments: string[];
    readonly auxiliaryImagePath: string;
    readonly auxiliaryImageReservedSpaceSize: UnsignedWord;
    readonly protectionDomain: Isolates$ProtectionDomain;
    readonly reservedAddressSpaceSize: UnsignedWord;
    getArguments(): string[];
    getAuxiliaryImagePath(): string;
    getAuxiliaryImageReservedSpaceSize(): UnsignedWord;
    getProtectionDomain(): Isolates$ProtectionDomain;
    getReservedAddressSpaceSize(): UnsignedWord;
}