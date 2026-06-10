import type { Consumer } from '../../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Config } from '../../../../../../net/ccbluex/liquidbounce/config/types/Config.d.ts'
import type { Value } from '../../../../../../net/ccbluex/liquidbounce/config/types/Value.d.ts'
export class PersistentLocalStorage extends Config {
    static INSTANCE: PersistentLocalStorage;
    readonly map: { [key: string]: string };
    set(name: string, value: boolean): void;
    set(name: string, value: number): void;
    set(t: Value<Object>[]): void;
    set(t: Value<Object>[], apply: (param0: Value<Object>[]) => void): void;
}