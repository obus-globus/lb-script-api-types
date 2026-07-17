import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { File } from '../../../../java/io/File.d.ts'
import type { InputStream } from '../../../../java/io/InputStream.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class CommentStore extends Object {
    constructor(arg0: string, arg1: number)
    // private headers: JavaMap<string, string[]>;
    // private indents: number;
    // private mainHeader: string[];
    // private pathSeparator: string;
    // private pathSeparatorQuoted: string;
    // private getIndents(arg0: string): number;
    header(arg0: string): string[];
    header(arg0: string, ...arg1: string[]): void;
    // private join(arg0: string[], arg1: number): string;
    mainHeader(): string[];
    mainHeader(...arg0: string[]): void;
    storeComments(arg0: InputStream): void;
    writeComments(arg0: string, arg1: File): void;
}