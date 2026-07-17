import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { StringBuilder } from '../../../../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ClassNode } from '../../../../../org/objectweb/asm/tree/ClassNode.d.ts'
import type { SourceMap$File } from '../../../../../org/spongepowered/asm/mixin/struct/SourceMap$File.d.ts'
import type { SourceMap$Stratum } from '../../../../../org/spongepowered/asm/mixin/struct/SourceMap$Stratum.d.ts'
export class SourceMap extends Object {
    constructor(arg0: string)
    // private defaultStratum: string;
    // private nextLineOffset: number;
    readonly sourceFile: string;
    // private strata: JavaMap<string, SourceMap$Stratum>;
    addFile(arg0: string, arg1: string, arg2: number): SourceMap$File;
    addFile(arg0: string, arg1: string, arg2: string, arg3: number): SourceMap$File;
    addFile(arg0: string, arg1: ClassNode): SourceMap$File;
    addFile(arg0: ClassNode): SourceMap$File;
    // private appendTo(arg0: StringBuilder): void;
    getPseudoGeneratedSourceFile(): string;
    getSourceFile(): string;
    toString(): string;
}