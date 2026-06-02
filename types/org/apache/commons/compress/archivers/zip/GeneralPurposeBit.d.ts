import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../../java/lang/Cloneable.d.ts'
export class GeneralPurposeBit extends Object implements Cloneable {
    static UFT8_NAMES_FLAG: number;
    static parse(paramarg0: number[], paramarg1: number): GeneralPurposeBit;
    constructor()
    // private dataDescriptorFlag: boolean;
    // private encryptionFlag: boolean;
    // private languageEncodingFlag: boolean;
    // private numberOfShannonFanoTrees: number;
    // private slidingDictionarySize: number;
    // private strongEncryptionFlag: boolean;
    protected clone(): Object;
    clone(): Object;
    encode(): number[];
    encode(arg0: number[], arg1: number): void;
    equals(arg0: Object | null): boolean;
    getNumberOfShannonFanoTrees(): number;
    getSlidingDictionarySize(): number;
    hashCode(): number;
    useDataDescriptor(arg0: boolean): void;
    useEncryption(arg0: boolean): void;
    useStrongEncryption(arg0: boolean): void;
    useUTF8ForNames(arg0: boolean): void;
    usesDataDescriptor(): boolean;
    usesEncryption(): boolean;
    usesStrongEncryption(): boolean;
    usesUTF8ForNames(): boolean;
}