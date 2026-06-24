import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Flags$BooleanFlagField } from '../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/deserialization/Flags$BooleanFlagField.d.ts'
import type { Flags$FlagField } from '../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/deserialization/Flags$FlagField.d.ts'
export class FlagImpl extends Object {
    constructor(arg0: number, arg1: number, arg2: number)
    constructor(arg0: Flags$BooleanFlagField)
    constructor(arg0: Flags$FlagField<Object>, arg1: number)
    // private bitWidth: number;
    // private offset: number;
    // private value: number;
    getBitWidth$org_jetbrains_kotlin_kotlin_metadata(): number;
    getOffset$org_jetbrains_kotlin_kotlin_metadata(): number;
    getValue$org_jetbrains_kotlin_kotlin_metadata(): number;
    invoke(arg0: number): boolean;
    plus$org_jetbrains_kotlin_kotlin_metadata(arg0: number): number;
}