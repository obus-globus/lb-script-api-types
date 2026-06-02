import type { Object } from '../../../java/lang/Object.d.ts'
import type { CefPostDataElement } from '../../../org/cef/network/CefPostDataElement.d.ts'
export abstract class CefPostData extends Object {
    static create(): CefPostData;
    constructor()
    addElement(arg0: CefPostDataElement): boolean;
    dispose(): void;
    finalize(): void;
    getElementCount(): number;
    getElements(arg0: CefPostDataElement[]): void;
    isReadOnly(): boolean;
    removeElement(arg0: CefPostDataElement): boolean;
    removeElements(): void;
    toString(): string;
    toString(arg0: string): string;
}