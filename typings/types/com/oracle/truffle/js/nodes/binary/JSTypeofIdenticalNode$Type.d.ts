import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class JSTypeofIdenticalNode$Type extends Enum<JSTypeofIdenticalNode$Type> {
    static BigInt: JSTypeofIdenticalNode$Type;
    static Boolean: JSTypeofIdenticalNode$Type;
    static False: JSTypeofIdenticalNode$Type;
    static Function: JSTypeofIdenticalNode$Type;
    static Number: JSTypeofIdenticalNode$Type;
    static Object: JSTypeofIdenticalNode$Type;
    static String: JSTypeofIdenticalNode$Type;
    static Symbol: JSTypeofIdenticalNode$Type;
    static Undefined: JSTypeofIdenticalNode$Type;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): JSTypeofIdenticalNode$Type;
    static values(): JSTypeofIdenticalNode$Type[];
    private constructor()
    name(): "Number" | "BigInt" | "String" | "Boolean" | "Object" | "Undefined" | "Function" | "Symbol" | "False";
}