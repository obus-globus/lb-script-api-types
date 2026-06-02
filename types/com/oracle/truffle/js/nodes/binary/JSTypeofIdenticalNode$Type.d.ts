import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
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
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): JSTypeofIdenticalNode$Type;
    static values(): (Object | null)[];
    private constructor()
    name(): "Number" | "BigInt" | "String" | "Boolean" | "Object" | "Undefined" | "Function" | "Symbol" | "False";
}