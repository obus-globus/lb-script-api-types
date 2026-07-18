import type { JavaMap } from '../../../JavaMap.d.ts'
import type { AttributeKey } from '../../../io/ktor/util/AttributeKey.d.ts'
import type { AttributesJvmBase } from '../../../io/ktor/util/AttributesJvmBase.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class ConcurrentSafeAttributes extends AttributesJvmBase {
    constructor()
    readonly map: JavaMap<AttributeKey<Object>, Object | null>;
    computeIfAbsent<T extends unknown>(key: AttributeKey<T>, block: () => T): T;
}