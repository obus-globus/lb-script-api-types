import type { DynamicOps } from '../../../com/mojang/serialization/DynamicOps.d.ts'
import type { Stream } from '../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface Keyable extends Object{
    keys<T extends Object | number | string | boolean>(arg0: DynamicOps<T>): Stream<T>;
}