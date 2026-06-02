import type { InputStream } from '../../../../java/io/InputStream.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class ConfigBase extends Object {
    constructor()
    configure(arg0: string, arg1: InputStream): string[];
    handleSettings(arg0: string[]): void;
}