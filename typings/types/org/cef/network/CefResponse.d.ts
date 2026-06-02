import type { Object } from '../../../java/lang/Object.d.ts'
import type { CefLoadHandler$ErrorCode } from '../../../org/cef/handler/CefLoadHandler$ErrorCode.d.ts'
export abstract class CefResponse extends Object {
    static create(): CefResponse;
    constructor()
    dispose(): void;
    finalize(): void;
    getError(): CefLoadHandler$ErrorCode;
    getHeaderByName(arg0: string): string;
    getHeaderMap(arg0: { [key: string]: string }): void;
    getMimeType(): string;
    getStatus(): number;
    getStatusText(): string;
    isReadOnly(): boolean;
    setError(arg0: CefLoadHandler$ErrorCode): void;
    setHeaderByName(arg0: string, arg1: string, arg2: boolean): void;
    setHeaderMap(arg0: { [key: string]: string }): void;
    setMimeType(arg0: string): void;
    setStatus(arg0: number): void;
    setStatusText(arg0: string): void;
    toString(): string;
}