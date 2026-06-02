import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ClassReader } from '../../../../../../org/objectweb/asm/ClassReader.d.ts'
export class Pack200ClassReader extends ClassReader {
    static EXPAND_FRAMES: number;
    static SKIP_CODE: number;
    static SKIP_DEBUG: number;
    static SKIP_FRAMES: number;
    constructor(arg0: number[])
    // private anySyntheticAttributes: boolean;
    readonly fileName: string;
    // private lastConstantHadWideIndex: boolean;
    // private lastUnsignedShort: number;
    getFileName(): string;
    hasSyntheticAttributes(): boolean;
    lastConstantHadWideIndex(): boolean;
    readConst(arg0: number, arg1: string[]): Object;
    readUTF8(arg0: number, arg1: string[]): string;
    readUnsignedShort(arg0: number): number;
    setFileName(arg0: string): void;
}