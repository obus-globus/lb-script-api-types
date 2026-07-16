import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class Proxy$Type extends Enum<Proxy$Type> {
    static HTTP: Proxy$Type;
    static SOCKS5: Proxy$Type;
    static getEntries(): Proxy$Type[];
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): Proxy$Type;
    static values(): Proxy$Type[];
    private constructor()
    name(): "HTTP" | "SOCKS5";
}