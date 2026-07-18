import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Executable } from '../../../../java/lang/reflect/Executable.d.ts'
import type { Field } from '../../../../java/lang/reflect/Field.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class RuntimeJNIAccess extends Object {
    static register(...paramclasses: Class<Object>[]): void;
    static register(...parammethods: Executable[]): void;
    static register(...paramfields: Field[]): void;
    private constructor()
}