import type { OutputStream } from '../../../java/io/OutputStream.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export abstract class CefDragData extends Object {
    static create(): CefDragData;
    constructor()
    addFile(arg0: string, arg1: string): void;
    clone(): CefDragData;
    dispose(): void;
    finalize(): void;
    getFileContents(arg0: OutputStream): number;
    getFileName(): string;
    getFileNames(arg0: string[]): boolean;
    getFilePaths(arg0: string[]): boolean;
    getFragmentBaseURL(): string;
    getFragmentHtml(): string;
    getFragmentText(): string;
    getLinkMetadata(): string;
    getLinkTitle(): string;
    getLinkURL(): string;
    isFile(): boolean;
    isFragment(): boolean;
    isLink(): boolean;
    isReadOnly(): boolean;
    resetFileContents(): void;
    setFragmentBaseURL(arg0: string): void;
    setFragmentHtml(arg0: string): void;
    setFragmentText(arg0: string): void;
    setLinkMetadata(arg0: string): void;
    setLinkTitle(arg0: string): void;
    setLinkURL(arg0: string): void;
    toString(): string;
}