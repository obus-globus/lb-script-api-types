import type { Object } from '../../java/lang/Object.d.ts'
import type { Function } from '../../kotlin/Function.d.ts'
import type { CallsInPlace } from '../../kotlin/contracts/CallsInPlace.d.ts'
import type { InvocationKind } from '../../kotlin/contracts/InvocationKind.d.ts'
import type { Returns } from '../../kotlin/contracts/Returns.d.ts'
import type { ReturnsNotNull } from '../../kotlin/contracts/ReturnsNotNull.d.ts'
export interface ContractBuilder extends Object{
    callsInPlace<R extends Object | number | string | boolean>(lambda: Function<R>, kind: InvocationKind): CallsInPlace;
    returns(): Returns;
    returns(value: Object | null): Returns;
    returnsNotNull(): ReturnsNotNull;
}