import type { JavaMap } from '../../../JavaMap.d.ts'
import type { ConfigValue } from '../../../com/typesafe/config/ConfigValue.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class ConfigValueFactory extends Object {
    static fromAnyRef(paramarg0: Object): ConfigValue;
    static fromAnyRef(paramarg0: Object, paramarg1: string): ConfigValue;
    static fromIterable(paramarg0: Object[]): (Object | null)[];
    static fromIterable(paramarg0: Object[], paramarg1: string): (Object | null)[];
    static fromMap(paramarg0: JavaMap<string, Object>): JavaMap<any, any>;
    static fromMap(paramarg0: JavaMap<string, Object>, paramarg1: string): JavaMap<any, any>;
    private constructor()
}