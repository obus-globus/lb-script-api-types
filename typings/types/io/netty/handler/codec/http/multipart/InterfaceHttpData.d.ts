import type { InterfaceHttpData$HttpDataType } from '../../../../../../io/netty/handler/codec/http/multipart/InterfaceHttpData$HttpDataType.d.ts'
import type { ReferenceCounted } from '../../../../../../io/netty/util/ReferenceCounted.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../../../java/lang/Comparable.d.ts'
export interface InterfaceHttpData extends ReferenceCounted, Object, Comparable<InterfaceHttpData>{
    getHttpDataType(): InterfaceHttpData$HttpDataType;
    getName(): string;
    retain(): InterfaceHttpData;
    retain(arg0: number): InterfaceHttpData;
    touch(): InterfaceHttpData;
    touch(arg0: Object): InterfaceHttpData;
}