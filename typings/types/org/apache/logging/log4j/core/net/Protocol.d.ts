import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class Protocol extends Enum<Protocol> {
    static SSL: Protocol;
    static TCP: Protocol;
    static UDP: Protocol;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): Protocol;
    static values(): Protocol[];
    private constructor()
    isEqual(name: string): boolean;
    name(): "TCP" | "SSL" | "UDP";
}