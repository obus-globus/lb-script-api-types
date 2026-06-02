import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
export class Collation extends Object {
    static CASE_AND_QUATERNARY_MASK: number;
    static CASE_LEVEL: number;
    static CASE_MASK: number;
    static COMMON_SEC_AND_TER_CE: number;
    static COMMON_WEIGHT16: number;
    static EQUAL: number;
    static FFFD_PRIMARY: number;
    static GREATER: number;
    static IDENTICAL_LEVEL: number;
    static LESS: number;
    static LEVEL_SEPARATOR_BYTE: number;
    static MAX_PRIMARY: number;
    static MERGE_SEPARATOR_BYTE: number;
    static MERGE_SEPARATOR_PRIMARY: number;
    static NO_CE: number;
    static NO_LEVEL: number;
    static ONLY_TERTIARY_MASK: number;
    static PRIMARY_COMPRESSION_HIGH_BYTE: number;
    static PRIMARY_COMPRESSION_LOW_BYTE: number;
    static PRIMARY_LEVEL: number;
    static QUATERNARY_LEVEL: number;
    static QUATERNARY_MASK: number;
    static SECONDARY_LEVEL: number;
    static SENTINEL_CP: number;
    static TERMINATOR_BYTE: number;
    static TERTIARY_LEVEL: number;
    static ZERO_LEVEL: number;
    static incThreeBytePrimaryByOffset(parambasePrimary: number, paramisCompressible: boolean, paramoffset: number): number;
    static incTwoBytePrimaryByOffset(parambasePrimary: number, paramisCompressible: boolean, paramoffset: number): number;
    static makeCE(paramp: number): number;
    constructor()
}