import type { HostFieldDesc } from '../../../../com/oracle/truffle/host/HostFieldDesc.d.ts'
import type { MethodHandle } from '../../../../java/lang/invoke/MethodHandle.d.ts'
import type { MethodHandles$Lookup } from '../../../../java/lang/invoke/MethodHandles$Lookup.d.ts'
import type { Field } from '../../../../java/lang/reflect/Field.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class HostFieldDesc$MHImpl extends HostFieldDesc {
    constructor(methodLookup: MethodHandles$Lookup, field: Field)
    // private field: Field;
    // private getHandle: MethodHandle;
    // private methodLookup: MethodHandles$Lookup;
    // private setHandle: MethodHandle;
    get(receiver: Object): Object;
    // private makeGetMethodHandle(): MethodHandle;
    // private makeSetMethodHandle(): MethodHandle;
    set(receiver: Object, value: Object): void;
    toString(): string;
}