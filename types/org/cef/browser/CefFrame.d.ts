import type { Object } from '../../../java/lang/Object.d.ts'
export interface CefFrame extends Object{
    copy(): void;
    cut(): void;
    dispose(): void;
    executeJavaScript(arg0: string, arg1: string, arg2: number): void;
    getIdentifier(): string;
    getName(): string;
    getParent(): CefFrame;
    getURL(): string;
    isFocused(): boolean;
    isMain(): boolean;
    isValid(): boolean;
    paste(): void;
    redo(): void;
    selectAll(): void;
    undo(): void;
}