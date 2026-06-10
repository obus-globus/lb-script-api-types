import type { PacketWrapper } from '../../../../../../com/viaversion/viaversion/api/protocol/packet/PacketWrapper.d.ts'
import type { PacketHandler } from '../../../../../../com/viaversion/viaversion/api/protocol/remapper/PacketHandler.d.ts'
import type { ValueReader } from '../../../../../../com/viaversion/viaversion/api/protocol/remapper/ValueReader.d.ts'
import type { ValueTransformer } from '../../../../../../com/viaversion/viaversion/api/protocol/remapper/ValueTransformer.d.ts'
import type { ValueWriter } from '../../../../../../com/viaversion/viaversion/api/protocol/remapper/ValueWriter.d.ts'
import type { Type } from '../../../../../../com/viaversion/viaversion/api/type/Type.d.ts'
import type { Function } from '../../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class PacketHandlers extends Object implements PacketHandler {
    constructor()
    // private packetHandlers: (param0: PacketWrapper) => void[];
    create<T extends Object | number | string | boolean>(arg0: Type<T>, arg1: T): void;
    handle(arg0: PacketWrapper): void;
    handler(arg0: (param0: PacketWrapper) => void): void;
    handlerSoftFail(arg0: (param0: PacketWrapper) => void): void;
    handlersSize(): number;
    map<T extends Object | number | string | boolean>(arg0: (param0: PacketWrapper) => T, arg1: (param0: PacketWrapper, param1: T) => void): void;
    map<T1 extends Object | number | string | boolean, T2 extends Object | number | string | boolean>(arg0: ValueTransformer<T1, T2>): void;
    map(arg0: Type<Object>, arg1: Type<Object>): void;
    map<T extends Object | number | string | boolean>(arg0: Type<T>): void;
    map<T1 extends Object | number | string | boolean, T2 extends Object | number | string | boolean>(arg0: Type<T1>, arg1: ValueTransformer<T1, T2>): void;
    map<T1 extends Object | number | string | boolean, T2 extends Object | number | string | boolean>(arg0: Type<T1>, arg1: Type<T2>, arg2: (param0: T1) => T2): void;
    read(arg0: Type<Object>): void;
    register(): void;
    then(arg0: (param0: PacketWrapper) => void): (param0: PacketWrapper) => void;
}