import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class SevenZMethod extends Enum<SevenZMethod> {
    static AES256SHA256: SevenZMethod;
    static BCJ_ARM_FILTER: SevenZMethod;
    static BCJ_ARM_THUMB_FILTER: SevenZMethod;
    static BCJ_IA64_FILTER: SevenZMethod;
    static BCJ_PPC_FILTER: SevenZMethod;
    static BCJ_SPARC_FILTER: SevenZMethod;
    static BCJ_X86_FILTER: SevenZMethod;
    static BZIP2: SevenZMethod;
    static COPY: SevenZMethod;
    static DEFLATE: SevenZMethod;
    static DEFLATE64: SevenZMethod;
    static DELTA_FILTER: SevenZMethod;
    static LZMA: SevenZMethod;
    static LZMA2: SevenZMethod;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): SevenZMethod;
    static values(): SevenZMethod[];
    private constructor(arg2: number[])
    // private id: number[];
    getId(): number[];
    name(): "COPY" | "LZMA" | "LZMA2" | "DEFLATE" | "DEFLATE64" | "BZIP2" | "AES256SHA256" | "BCJ_X86_FILTER" | "BCJ_PPC_FILTER" | "BCJ_IA64_FILTER" | "BCJ_ARM_FILTER" | "BCJ_ARM_THUMB_FILTER" | "BCJ_SPARC_FILTER" | "DELTA_FILTER";
}