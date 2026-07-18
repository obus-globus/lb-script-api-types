import type { Config } from '../../../../com/typesafe/config/Config.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ConfigBeanImpl extends Object {
    static createInternal<T extends unknown>(paramarg0: Config, paramarg1: Class<T>, paramarg2: boolean): T;
    constructor()
}