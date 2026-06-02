import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class KeyValuePairConfig extends Object {
    constructor()
    readonly configs: { [key: string]: string[] };
    getConfigs(): { [key: string]: string[] };
    setConfig(configs: { [key: string]: string[] }): void;
}