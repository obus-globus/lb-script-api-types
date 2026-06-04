import type { ObjectOutput } from '../../java/io/ObjectOutput.d.ts'
import type { ObjectOutputStream$PutField } from '../../java/io/ObjectOutputStream$PutField.d.ts'
import type { ObjectStreamClass } from '../../java/io/ObjectStreamClass.d.ts'
import type { Class } from '../../java/lang/Class.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export class ObjectOutputStream$PutFieldImpl extends ObjectOutputStream$PutField {
    constructor(null_: ObjectOutputStream$PutFieldImpl, arg1: ObjectStreamClass)
    // private desc: ObjectStreamClass;
    // private objVals: Object[];
    // private primVals: number[];
    // private getFieldOffset(arg0: string, arg1: Class<Object>): number;
    put(arg0: string, arg1: Object): void;
    put(arg0: string, arg1: boolean): void;
    put(arg0: string, arg1: number): void;
    put(arg0: string, arg1: string): void;
    write(arg0: ObjectOutput): void;
    writeFields(): void;
}