import type { Object } from '../../../java/lang/Object.d.ts'
import type { CefPostDataElement$Type } from '../../../org/cef/network/CefPostDataElement$Type.d.ts'
export abstract class CefPostDataElement extends Object {
    static create(): CefPostDataElement;
    constructor()
    dispose(): void;
    finalize(): void;
    getBytes(arg0: number, arg1: number[]): number;
    getBytesCount(): number;
    getFile(): string;
    getType(): CefPostDataElement$Type;
    isReadOnly(): boolean;
    setToBytes(arg0: number, arg1: number[]): void;
    setToEmpty(): void;
    setToFile(arg0: string): void;
    toString(): string;
    toString(arg0: string): string;
}