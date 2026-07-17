import type { JavaMap } from '../../../../../../../JavaMap.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class KeyValuePairConfig extends Object {
    constructor()
    readonly configs: JavaMap<string, string[]>;
    getConfigs(): JavaMap<string, string[]>;
    setConfig(configs: JavaMap<string, string[]>): void;
}