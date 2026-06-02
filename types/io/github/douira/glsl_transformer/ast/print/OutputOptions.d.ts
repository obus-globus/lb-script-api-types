import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class OutputOptions extends Object {
    constructor()
    constructor(arg0: boolean, arg1: string, arg2: boolean)
    readonly headerSuffix: string;
    printCustomDirectives: boolean;
    // private printInfo: boolean;
    clone(): OutputOptions;
    disablePrintInfo(): void;
    enablePrintInfo(): void;
    getPrintHeader(): string;
    setHeaderSuffix(arg0: string): void;
}