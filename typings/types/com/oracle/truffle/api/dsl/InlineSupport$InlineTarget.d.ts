import type { InlineSupport$InlinableField } from '../../../../../com/oracle/truffle/api/dsl/InlineSupport$InlinableField.d.ts'
import type { InlineSupport$ReferenceField } from '../../../../../com/oracle/truffle/api/dsl/InlineSupport$ReferenceField.d.ts'
import type { InlineSupport$StateField } from '../../../../../com/oracle/truffle/api/dsl/InlineSupport$StateField.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class InlineSupport$InlineTarget extends Object {
    static create(paramtargetClass: Class<Object>, paramupdaters: (Object | null)[]): InlineSupport$InlineTarget;
    constructor(targetClass: Class<Object>, updaters: InlineSupport$InlinableField[])
    readonly targetClass: Class<Object>;
    // private updaters: InlineSupport$InlinableField[];
    // private get<T extends Object | number | string | boolean>(index: number, fieldClass: Class<T>): T;
    getPrimitive<T extends InlineSupport$InlinableField>(index: number, fieldClass: Class<T>): T;
    getReference<V extends Object | number | string | boolean>(index: number, valueClass: Class<Object>): InlineSupport$ReferenceField<V>;
    getState(index: number, minimumBits: number): InlineSupport$StateField;
    getTargetClass(): Class<Object>;
}