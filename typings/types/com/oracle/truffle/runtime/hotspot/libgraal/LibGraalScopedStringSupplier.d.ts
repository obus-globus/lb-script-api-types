import type { LibGraalScopedHandle } from '../../../../../../com/oracle/truffle/runtime/hotspot/libgraal/LibGraalScopedHandle.d.ts'
import type { Supplier } from '../../../../../../java/util/function/Supplier.d.ts'
export class LibGraalScopedStringSupplier extends LibGraalScopedHandle implements Supplier<string> {
    constructor(handle: number)
    get(): string;
}