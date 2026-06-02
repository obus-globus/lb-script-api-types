import type { Config } from '../../../../../../net/ccbluex/liquidbounce/config/types/Config.d.ts'
export class PersistentLocalStorage extends Config {
    static INSTANCE: PersistentLocalStorage;
    readonly map: { [key: string]: string };
    set(name: string, value: boolean): void;
    set(name: string, value: number): void;
}