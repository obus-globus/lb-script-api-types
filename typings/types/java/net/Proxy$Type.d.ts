import type { Class } from '../../java/lang/Class.d.ts'
import type { Enum } from '../../java/lang/Enum.d.ts'
export class Proxy$Type extends Enum<Proxy$Type> {
    static DIRECT: Proxy$Type;
    static HTTP: Proxy$Type;
    static SOCKS: Proxy$Type;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): Proxy$Type;
    static values(): Proxy$Type[];
    private constructor()
    name(): "DIRECT" | "HTTP" | "SOCKS";
}