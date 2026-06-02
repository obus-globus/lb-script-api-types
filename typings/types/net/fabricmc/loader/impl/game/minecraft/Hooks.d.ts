import type { File } from '../../../../../../java/io/File.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class Hooks extends Object {
    static FABRIC: string;
    static INTERNAL_NAME: string;
    static VANILLA: string;
    static appletMainClass: string;
    static insertBranding(paramarg0: string): string;
    static setGameInstance(paramarg0: Object): void;
    static startClient(paramarg0: File, paramarg1: Object): void;
    static startServer(paramarg0: File, paramarg1: Object): void;
    constructor()
}