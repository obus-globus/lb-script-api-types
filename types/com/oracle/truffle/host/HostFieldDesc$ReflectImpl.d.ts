import type { HostFieldDesc } from '../../../../com/oracle/truffle/host/HostFieldDesc.d.ts'
import type { Field } from '../../../../java/lang/reflect/Field.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class HostFieldDesc$ReflectImpl extends HostFieldDesc {
    constructor(field: Field)
    // private field: Field;
    get(receiver: Object): Object;
    set(receiver: Object, value: Object): void;
    toString(): string;
}