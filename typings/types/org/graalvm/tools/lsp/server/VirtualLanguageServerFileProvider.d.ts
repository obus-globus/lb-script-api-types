import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface VirtualLanguageServerFileProvider extends Object{
    getSourceText(path: Path[]): string;
    isVirtualFile(path: Path[]): boolean;
}