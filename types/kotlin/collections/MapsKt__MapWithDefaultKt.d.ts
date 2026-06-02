import type { Object } from '../../java/lang/Object.d.ts'
import type { Function1 } from '../../kotlin/jvm/functions/Function1.d.ts'
export class MapsKt__MapWithDefaultKt extends Object {
    static getOrImplicitDefaultNullable(paramarg0: Map<Object | null, Object | null>, paramarg1: Object | null): Object | null;
    static withDefault(paramarg0: Map<Object | null, Object | null>, paramarg1: Function1<Object, Object>): Map<Object | null, Object | null>;
    static withDefaultMutable(paramarg0: Map<Object | null, Object | null>, paramarg1: Function1<Object, Object>): Map<Object | null, Object | null>;
}