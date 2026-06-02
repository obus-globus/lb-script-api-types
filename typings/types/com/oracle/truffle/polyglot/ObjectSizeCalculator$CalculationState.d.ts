import type { ObjectSizeCalculator$ClassInfo } from '../../../../com/oracle/truffle/polyglot/ObjectSizeCalculator$ClassInfo.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { AtomicBoolean } from '../../../../java/util/concurrent/atomic/AtomicBoolean.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { AbstractPolyglotImpl$APIAccess } from '../../../../org/graalvm/polyglot/impl/AbstractPolyglotImpl$APIAccess.d.ts'
export class ObjectSizeCalculator$CalculationState extends Object {
    constructor(api: AbstractPolyglotImpl$APIAccess, classInfos: Map<Class<Object>, ObjectSizeCalculator$ClassInfo>, alreadyVisited: Object[], stopAtBytes: number, cancelled: AtomicBoolean)
    // private alreadyVisited: Object[];
    // private api: AbstractPolyglotImpl$APIAccess;
    // private cancelled: AtomicBoolean;
    // private classInfos: Map<Class<Object>, ObjectSizeCalculator$ClassInfo>;
    // private dataSize: number;
    // private pending: Object[];
    // private stopAtBytes: number;
}