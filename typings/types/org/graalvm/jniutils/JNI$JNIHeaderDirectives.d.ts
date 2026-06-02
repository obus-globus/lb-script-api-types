import type { Object } from '../../../java/lang/Object.d.ts'
import type { CContext$Directives } from '../../../org/graalvm/nativeimage/c/CContext$Directives.d.ts'
export class JNI$JNIHeaderDirectives extends Object implements CContext$Directives {
    constructor()
    getHeaderFiles(): string[];
    getHeaderFiles(): string[];
    getLibraries(): string[];
    getLibraryPaths(): string[];
    getMacroDefinitions(): string[];
    getOptions(): string[];
    getOptions(): string[];
    isInConfiguration(): boolean;
    isInConfiguration(): boolean;
}