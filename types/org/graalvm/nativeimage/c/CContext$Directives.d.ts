import type { Object } from '../../../../java/lang/Object.d.ts'
export interface CContext$Directives extends Object{
    getHeaderFiles(): string[];
    getLibraries(): string[];
    getLibraryPaths(): string[];
    getMacroDefinitions(): string[];
    getOptions(): string[];
    isInConfiguration(): boolean;
}