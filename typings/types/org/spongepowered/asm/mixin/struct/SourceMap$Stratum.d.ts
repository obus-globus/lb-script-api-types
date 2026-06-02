import type { StringBuilder } from '../../../../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { SourceMap$File } from '../../../../../org/spongepowered/asm/mixin/struct/SourceMap$File.d.ts'
export class SourceMap$Stratum extends Object {
    constructor(arg0: string)
    // private files: { [key: string]: SourceMap$File };
    name: string;
    addFile(arg0: number, arg1: number, arg2: string, arg3: string): SourceMap$File;
    appendTo(arg0: StringBuilder): void;
}