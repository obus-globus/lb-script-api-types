import type { ObjectSizeCalculator$ClassInfo } from '../../../../com/oracle/truffle/polyglot/ObjectSizeCalculator$ClassInfo.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { AtomicBoolean } from '../../../../java/util/concurrent/atomic/AtomicBoolean.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { AbstractPolyglotImpl$APIAccess } from '../../../../org/graalvm/polyglot/impl/AbstractPolyglotImpl$APIAccess.d.ts'
export class ObjectSizeCalculator extends Object {
    constructor()
    // private alreadyVisitedInitialCapacity: number;
    // private cachedClassInfos: Map<Class<Object>, ObjectSizeCalculator$ClassInfo>;
    // private cachedClassInfosInUse: boolean;
    calculateObjectSize(api: AbstractPolyglotImpl$APIAccess, obj: Object, stopAtBytes: number, cancelled: AtomicBoolean): number;
}