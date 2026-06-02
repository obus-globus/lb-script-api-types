import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../../../../java/lang/Comparable.d.ts'
import type { DeprecationLevelValue } from '../../../../../../../kotlin/reflect/jvm/internal/impl/resolve/deprecation/DeprecationLevelValue.d.ts'
export abstract class DeprecationInfo extends Object implements Comparable<DeprecationInfo> {
    constructor()
    compareTo(arg0: DeprecationInfo): number;
    getDeprecationLevel(): DeprecationLevelValue;
    getPropagatesToOverrides(): boolean;
}