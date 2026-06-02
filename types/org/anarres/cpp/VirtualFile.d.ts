import type { Object } from '../../../java/lang/Object.d.ts'
import type { Token } from '../../../org/anarres/cpp/Token.d.ts'
export interface VirtualFile extends Object{
    getChildFile(arg0: string): VirtualFile;
    getName(): string;
    getParentFile(): VirtualFile;
    getPath(): string;
    getSource(): Token[];
    isFile(): boolean;
}