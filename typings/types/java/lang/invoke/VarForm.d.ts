import type { Class } from '../../../java/lang/Class.d.ts'
import type { MemberName } from '../../../java/lang/invoke/MemberName.d.ts'
import type { MethodType } from '../../../java/lang/invoke/MethodType.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class VarForm extends Object {
    constructor(arg0: Class<Object>, arg1: Class<Object>, arg2: Class<Object>, ...arg3: Class<Object>[])
    constructor(arg0: Class<Object>, arg1: VarForm)
    constructor(arg0: Class<Object>, arg1: Class<Object>[])
    // private implClass: Class<Object>;
    // private memberName_table: MemberName[];
    // private methodType_V_table: MethodType[];
    // private methodType_table: MethodType[];
    // private assertMethodTypeTableInitialized(): boolean;
    getMemberName(arg0: number): MemberName;
    getMemberNameOrNull(arg0: number): MemberName;
    getMethodType(arg0: number): MethodType;
    getMethodType_V(arg0: number): MethodType;
    getMethodType_V_init(): MethodType[];
    initMethodTypes(arg0: Class<Object>, ...arg1: Class<Object>[]): void;
    resolveMemberName(arg0: number): MemberName;
}